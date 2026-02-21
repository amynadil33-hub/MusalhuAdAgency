import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Shield,
  Building2,
  Loader2,
  ExternalLink,
} from "lucide-react";

interface PackageInfo {
  id: string;
  name: string;
  setupFee: number;
  monthlyFee: number;
}

const packageData: Record<string, PackageInfo> = {
  "daily-presence": {
    id: "daily-presence",
    name: "Digital Launchpad – Daily Presence",
    setupFee: 500,
    monthlyFee: 599,
  },
  "viral-growth": {
    id: "viral-growth",
    name: "Digital Launchpad – Viral Growth",
    setupFee: 750,
    monthlyFee: 999,
  },
  "full-service-digital": {
    id: "full-service-digital",
    name: "Digital Launchpad – Full-Service Digital Office",
    setupFee: 1500,
    monthlyFee: 1999,
  },
  "performance-growth": {
    id: "performance-growth",
    name: "Performance Growth",
    setupFee: 2500,
    monthlyFee: 3999,
  },
};

export default function PaymentPage() {
  const [searchParams] = useSearchParams();
  const packageSlug = searchParams.get("package") || "daily-presence";
  const selectedPackage =
    packageData[packageSlug] || packageData["daily-presence"];

  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [loadingBML, setLoadingBML] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login", {
        state: { from: `/payment?package=${packageSlug}` },
      });
    }
  }, [user, navigate, packageSlug]);

  if (!user) return null;

  const totalAmount =
    selectedPackage.setupFee + selectedPackage.monthlyFee;

  // 💳 BML Redirect
  const handleBMLPayment = async () => {
    if (!accepted) {
      toast({
        title: "Accept terms required",
        description:
          "Please accept the Terms & Conditions before proceeding.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoadingBML(true);

      const { data, error } = await supabase.functions.invoke(
        "live-initiate-payment",
        {
          body: {
            userId: user.id,
            email: user.email,
            items: [
              {
                id: selectedPackage.id,
                name: selectedPackage.name,
                setupFee: selectedPackage.setupFee,
                monthlyFee: selectedPackage.monthlyFee,
              },
            ],
            total: totalAmount,
          },
        }
      );

      if (error) throw error;

      const redirectUrl =
        (data as any)?.redirectUrl ||
        (data as any)?.raw?.redirectUrl ||
        (data as any)?.raw?.url;

      if (!redirectUrl) {
        throw new Error("No redirect URL returned from BML");
      }

      window.location.href = redirectUrl;
    } catch (err) {
      console.error(err);
      toast({
        title: "Payment initiation failed",
        description:
          "Could not redirect to BML. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingBML(false);
    }
  };

  // 🧾 Bank Transfer Slip Upload
  const handleSlipUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload your payment slip.",
        variant: "destructive",
      });
      return;
    }

    try {
      setUploading(true);
      setUploadMessage("");

      const filePath = `${user.id}/${Date.now()}_${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("payment_slips")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { error: insertError } = await supabase
        .from("payment_uploads")
        .insert({
          user_id: user.id,
          amount: totalAmount,
          slip_path: filePath,
          status: "pending",
        });

      if (insertError) throw insertError;

      setUploadMessage(
        "✅ Payment slip uploaded successfully. We’ll verify it shortly."
      );
      setFile(null);
    } catch (err) {
      console.error(err);
      toast({
        title: "Upload failed",
        description:
          "Could not upload payment slip. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Layout>
      <section className="py-24 min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Package</span>
                  <span className="text-white">
                    {selectedPackage.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Setup Fee</span>
                  <span className="text-white">
                    MVR {selectedPackage.setupFee}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">First Month</span>
                  <span className="text-white">
                    MVR {selectedPackage.monthlyFee}
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 mt-6 pt-4 flex justify-between">
                <span className="font-semibold text-white">
                  Total Due Today
                </span>
                <span className="text-2xl font-bold text-gradient">
                  MVR {totalAmount}
                </span>
              </div>

              <div className="mt-6 p-4 bg-violet-500/10 border border-violet-500/20 rounded-xl">
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-violet-400" />
                  <p className="text-sm text-white/70">
                    Payments are processed securely via Bank of Maldives.
                    We never store card details.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Payment Options
                  </h2>
                  <p className="text-sm text-white/50">
                    Secure & trusted methods
                  </p>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 mb-5">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <p className="text-sm text-white/60">
                  I agree to the{" "}
                  <a href="/terms" className="text-violet-400 underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-violet-400 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* BML Button */}
              <button
                onClick={handleBMLPayment}
                disabled={loadingBML || !accepted}
                className="w-full py-4 bg-gradient-primary rounded-full text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loadingBML ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Redirecting to BML…
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-5 h-5" />
                    Pay Securely via BML
                  </>
                )}
              </button>

              {/* Bank Transfer */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Bank Transfer (Manual)
                </h3>

                <div className="bg-white/5 rounded-xl p-4 text-sm text-white/70 space-y-1">
                  <p><b>Bank:</b> Bank of Maldives</p>
                  <p><b>Account Name:</b> Emir X Pvt Ltd</p>
                  <p><b>Account Number:</b> 7730000761972</p>
                  <p><b>Amount:</b> MVR {totalAmount}</p>
                </div>

                <div className="mt-4 space-y-3">
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) =>
                      setFile(e.target.files?.[0] || null)
                    }
                    className="w-full text-sm text-white"
                  />

                  <button
                    onClick={handleSlipUpload}
                    disabled={uploading}
                    className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-50"
                  >
                    {uploading
                      ? "Uploading..."
                      : "Upload Payment Slip"}
                  </button>

                  {uploadMessage && (
                    <p className="text-xs text-green-400 text-center">
                      {uploadMessage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
