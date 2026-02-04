import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars } from '@/components/ui/RabbitEars';
import { CheckCircle2, ArrowRight, Download, Mail } from 'lucide-react';

export default function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { packageName?: string; amount?: number } | null;

  useEffect(() => {
    if (!state?.packageName) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state?.packageName) return null;

  return (
    <Layout>
      <section className="py-24 min-h-[80vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto animate-pulse">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-green-500/10 mx-auto animate-ping" />
          </div>

          <RabbitEars size="md" className="mx-auto mb-6" />

          <h1 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
            Payment <span className="text-gradient">Successful!</span>
          </h1>

          <p className="font-inter text-xl text-white/70 mb-8">
            Thank you for choosing Musalhu Advertising. Your journey to digital success starts now.
          </p>

          {/* Order Details */}
          <div className="glass-card rounded-2xl p-8 mb-8 text-left">
            <h2 className="font-poppins font-semibold text-lg text-white mb-4">
              Order Details
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Package</span>
                <span className="text-white font-medium">{state.packageName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Amount Paid</span>
                <span className="text-white font-medium">MVR {state.amount?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Status</span>
                <span className="text-green-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Confirmed
                </span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="glass-card rounded-2xl p-8 mb-8 text-left">
            <h2 className="font-poppins font-semibold text-lg text-white mb-4">
              What Happens Next?
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 text-sm text-violet-400 font-semibold">
                  1
                </span>
                <div>
                  <p className="text-white font-medium">Confirmation Email</p>
                  <p className="text-sm text-white/60">You'll receive an email with your order details and receipt.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 text-sm text-violet-400 font-semibold">
                  2
                </span>
                <div>
                  <p className="text-white font-medium">Onboarding Call</p>
                  <p className="text-sm text-white/60">Our team will reach out within 24 hours to schedule your kickoff call.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 text-sm text-violet-400 font-semibold">
                  3
                </span>
                <div>
                  <p className="text-white font-medium">Project Kickoff</p>
                  <p className="text-sm text-white/60">We'll start working on your project immediately after the call.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300"
            >
              Back to Home
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
