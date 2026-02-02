import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars } from '@/components/ui/RabbitEars';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { 
  CreditCard, Lock, CheckCircle2, Loader2, ArrowLeft,
  Shield, Building2
} from 'lucide-react';

interface PackageInfo {
  id: string;
  name: string;
  setupFee: number;
  monthlyFee: number;
}

const packageData: Record<string, PackageInfo> = {
  'daily-presence': {
    id: 'daily-presence',
    name: 'Digital Launchpad - Daily Presence',
    setupFee: 500,
    monthlyFee: 299,
  },
  'viral-growth': {
    id: 'viral-growth',
    name: 'Digital Launchpad - Viral Growth',
    setupFee: 750,
    monthlyFee: 499,
  },
  'full-service-digital': {
    id: 'full-service-digital',
    name: 'Digital Launchpad - Full-Service Digital Office',
    setupFee: 1500,
    monthlyFee: 999,
  },
  'performance-growth': {
    id: 'performance-growth',
    name: 'Performance Growth',
    setupFee: 2500,
    monthlyFee: 1499,
  },
};

export default function PaymentPage() {
  const [searchParams] = useSearchParams();
  const packageSlug = searchParams.get('package') || 'daily-presence';
  const selectedPackage = packageData[packageSlug] || packageData['daily-presence'];
  
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: `/payment?package=${packageSlug}` } });
    }
  }, [user, navigate, packageSlug]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const name = e.target.name;

    // Format card number
    if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').slice(0, 16);
      value = value.replace(/(\d{4})/g, '$1 ').trim();
    }

    // Format expiry date
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '').slice(0, 4);
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
    }

    // Format CVV
    if (name === 'cvv') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate BML payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create payment record
      const { error } = await supabase.from('payments').insert({
        user_id: user?.id,
        package_name: selectedPackage.name,
        amount: selectedPackage.setupFee + selectedPackage.monthlyFee,
        currency: 'MVR',
        status: 'completed',
        payment_method: 'bml',
        transaction_id: `BML-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        metadata: {
          package_id: selectedPackage.id,
          setup_fee: selectedPackage.setupFee,
          monthly_fee: selectedPackage.monthlyFee,
        },
      });

      if (error) throw error;

      navigate('/payment/success', { 
        state: { 
          packageName: selectedPackage.name,
          amount: selectedPackage.setupFee + selectedPackage.monthlyFee,
        } 
      });
    } catch (error) {
      toast({
        title: 'Payment failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!user) return null;

  const totalAmount = selectedPackage.setupFee + selectedPackage.monthlyFee;

  return (
    <Layout>
      <section className="py-24 min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-sora font-bold text-2xl text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Package</span>
                  <span className="text-white font-medium">{selectedPackage.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Setup Fee</span>
                  <span className="text-white">MVR {selectedPackage.setupFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">First Month</span>
                  <span className="text-white">MVR {selectedPackage.monthlyFee.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Total Due Today</span>
                  <span className="font-sora font-bold text-2xl text-gradient">
                    MVR {totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-violet-500/10 rounded-xl border border-violet-500/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/80 font-medium">Secure Payment</p>
                    <p className="text-xs text-white/50 mt-1">
                      Your payment is secured by BML payment gateway. We never store your card details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-sora font-bold text-xl text-white">BML Payment</h2>
                  <p className="text-sm text-white/50">Bank of Maldives</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      CVV
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors"
                        placeholder="123"
                      />
                      <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="Name on card"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Pay MVR {totalAmount.toLocaleString()}
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-xs text-white/40 text-center">
                By completing this purchase, you agree to our{' '}
                <a href="/terms" className="text-violet-400 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="/privacy" className="text-violet-400 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
