import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { useAuth } from '@/lib/auth';
import { 
  BarChart3, ArrowRight, CheckCircle2, TrendingUp, Target,
  ShoppingCart, Mail, Video, Globe, Zap, Users
} from 'lucide-react';

const growthImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027655979_f7578edd.png';

const features = [
  {
    icon: ShoppingCart,
    title: 'Full E-commerce or Booking Engine',
    description: 'SaaS integration with your existing systems or a brand new setup.',
  },
  {
    icon: Target,
    title: 'Paid Ads Management',
    description: 'Facebook, Instagram, TikTok, and Google Ads fully managed.',
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: '2 Video Shoots per month for Reels/TikToks that convert.',
  },
  {
    icon: Mail,
    title: 'Email Marketing Automation',
    description: 'Automated sequences that nurture leads into customers.',
  },
  {
    icon: Globe,
    title: 'Conversion Tracking',
    description: 'Full analytics dashboard to track every booking and sale.',
  },
  {
    icon: Users,
    title: 'Dedicated Growth Team',
    description: 'A team focused solely on growing your revenue.',
  },
];

const results = [
  { metric: '300%', label: 'Average Booking Increase' },
  { metric: '5x', label: 'Return on Ad Spend' },
  { metric: '45%', label: 'Lower Cost Per Acquisition' },
  { metric: '24/7', label: 'Campaign Monitoring' },
];

export default function PerformanceGrowthPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login', { state: { from: '/payment?package=performance-growth' } });
    } else {
      navigate('/payment?package=performance-growth');
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={growthImage}
            alt="Performance Growth"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] via-[#0F0A1E]/90 to-[#0F0A1E]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <BarChart3 className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm font-medium text-white/80">For Guesthouses, E-commerce</span>
              </div>

              <h1 className="font-sora font-bold text-5xl sm:text-6xl text-white mb-6">
                Performance <span className="text-gradient-pink">Growth</span>
              </h1>

              <p className="font-poppins font-semibold text-2xl text-fuchsia-400 mb-4">
                "We don't just post; we generate bookings."
              </p>

              <p className="font-inter text-lg text-white/70 mb-8">
                The Growth Engine package for businesses ready to scale. We combine paid advertising, 
                content creation, and automation to drive real revenue growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleBuyNow}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-fuchsia-500 hover:bg-fuchsia-600 rounded-full font-poppins font-semibold text-white hop glow-pink transition-all duration-300"
                >
                  Start Growing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-all duration-300"
                >
                  Talk to Us
                </Link>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="glass-card rounded-2xl p-8">
              <span className="text-sm font-medium text-white/50 uppercase tracking-wider">
                Growth Engine
              </span>
              <h3 className="font-sora font-bold text-2xl text-white mt-2 mb-6">
                Performance Growth Package
              </h3>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-sora font-bold text-4xl text-white">
                    MVR 1,499
                  </span>
                  <span className="text-white/50">/month</span>
                </div>
                <p className="text-sm text-white/50 mt-1">
                  + MVR 2,500 one-time setup fee
                </p>
                <p className="text-sm text-fuchsia-400 mt-2">
                  + % of Ad Spend (performance-based)
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Full E-commerce or Booking Engine',
                  'Paid Ads Management (All Platforms)',
                  '2 Video Shoots per month',
                  'Email Marketing Automation',
                  'Conversion Tracking Dashboard',
                  'Dedicated Growth Manager',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                    <span className="font-inter text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleBuyNow}
                className="w-full py-4 bg-fuchsia-500 hover:bg-fuchsia-600 rounded-full font-poppins font-semibold text-white transition-all duration-300"
              >
                Buy Now via BML
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Real <span className="text-gradient-pink">Results</span>
            </h2>
            <p className="font-inter text-lg text-white/60">
              Our performance-based approach delivers measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result) => (
              <div key={result.label} className="glass-card rounded-2xl p-6 text-center">
                <div className="font-sora font-bold text-4xl text-gradient-pink mb-2">
                  {result.metric}
                </div>
                <div className="font-inter text-sm text-white/60">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RabbitDivider className="mb-16" />
          
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              What's <span className="text-gradient">Included</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card rounded-2xl p-6 hop">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-inter text-sm text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit', desc: 'We analyze your current setup and identify growth opportunities.' },
              { step: '02', title: 'Strategy', desc: 'Custom growth plan tailored to your business goals.' },
              { step: '03', title: 'Execute', desc: 'Launch campaigns, create content, and optimize continuously.' },
              { step: '04', title: 'Scale', desc: 'Double down on what works and scale your success.' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-sora font-bold text-fuchsia-500/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-white/60">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-fuchsia-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/20 via-violet-900/20 to-fuchsia-900/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RabbitEars size="lg" className="mx-auto mb-6" />
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
            Ready to accelerate your growth?
          </h2>
          <p className="font-inter text-lg text-white/70 mb-8">
            Stop posting and start converting. Let's build your growth engine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleBuyNow}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300"
            >
              Start Growing Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
