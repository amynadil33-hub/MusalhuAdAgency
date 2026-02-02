import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { useAuth } from '@/lib/auth';
import { 
  Rocket, ArrowRight, CheckCircle2, Clock, Zap,
  Instagram, Facebook, Video, BarChart, MessageCircle,
  Camera, Megaphone
} from 'lucide-react';

const digitalImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027602449_fa74f253.png';

const subPackages = [
  {
    id: 'daily-presence',
    name: 'Daily Presence',
    subtitle: 'Standard',
    target: 'Small businesses needing consistent visibility without high production costs.',
    usp: 'Never miss a day. Stay top-of-mind for your customers 24/7.',
    setupFee: 500,
    monthlyFee: 299,
    features: [
      '7 Posts per week (Cross-posted to IG, FB, and TikTok)',
      'Static graphics, curated stock images, and basic text-based videos',
      'Basic Caption Writing & Hashtag Research',
      '1 Monthly Performance Report',
    ],
    icon: Instagram,
    color: 'violet',
  },
  {
    id: 'viral-growth',
    name: 'Viral Growth',
    subtitle: 'Video-Centric',
    target: 'Brands looking to leverage the TikTok/Reels algorithm.',
    usp: 'Built for the algorithm. We turn views into followers.',
    setupFee: 750,
    monthlyFee: 499,
    features: [
      '7 Posts per week (Specifically optimized for Short-form Video)',
      '3 Original Reels/TikToks (using client-provided raw footage) + 4 High-quality Graphics',
      'Platform-specific optimization (Trending audio for TikTok vs. Aesthetic for IG)',
      'Community Management: 30 minutes/day of replying to comments/DMs',
    ],
    icon: Video,
    color: 'fuchsia',
    popular: true,
  },
  {
    id: 'full-service-digital',
    name: 'Full-Service Digital Office',
    subtitle: 'Premium SME',
    target: 'Established SMEs that want to outsource their entire digital department.',
    usp: 'Your dedicated marketing department for the price of one intern.',
    setupFee: 1500,
    monthlyFee: 999,
    features: [
      '7 Posts per week across all 3 platforms (Unique formats for each)',
      '14 Stories per week (2 per day) to drive daily engagement',
      'Monthly Content Shoot: 4 hours of on-site photography/videography',
      'Ad Management: Setup and monitoring of 1 "Boosted Post" campaign per week',
    ],
    icon: Megaphone,
    color: 'cyan',
  },
];

export default function DigitalLaunchpadPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBuyNow = (pkg: typeof subPackages[0]) => {
    if (!user) {
      navigate('/login', { state: { from: `/payment?package=${pkg.id}` } });
    } else {
      navigate(`/payment?package=${pkg.id}`);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={digitalImage}
            alt="Digital Marketing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] via-[#0F0A1E]/90 to-[#0F0A1E]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Rocket className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-white/80">For Cafes, Shops, Startups</span>
            </div>

            <h1 className="font-sora font-bold text-5xl sm:text-6xl text-white mb-6">
              Digital <span className="text-gradient">Launchpad</span>
            </h1>

            <p className="font-poppins font-semibold text-2xl text-violet-400 mb-4">
              "Get your business online in 7 days."
            </p>

            <p className="font-inter text-lg text-white/70 mb-8">
              The SME "Kickstarter" package designed to get your business visible, credible, 
              and generating leads fast. Choose from three options based on your needs.
            </p>

            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-violet-400" />
                <span>7-Day Launch</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-violet-400" />
                <span>Low Setup Fee + Monthly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Choose Your <span className="text-gradient">Option</span>
            </h2>
            <p className="font-inter text-lg text-white/60">
              Select the package that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {subPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative glass-card rounded-2xl p-8 transition-all duration-300 ${
                  selectedPackage === pkg.id ? 'ring-2 ring-violet-500' : ''
                } ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-primary rounded-full text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                  pkg.color === 'violet' ? 'bg-violet-500/20 text-violet-400' :
                  pkg.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400' :
                  'bg-cyan-500/20 text-cyan-400'
                }`}>
                  <pkg.icon className="w-7 h-7" />
                </div>

                <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  {pkg.subtitle}
                </span>

                <h3 className="font-sora font-bold text-2xl text-white mt-2 mb-4">
                  {pkg.name}
                </h3>

                <p className="font-inter text-sm text-white/60 mb-4">
                  {pkg.target}
                </p>

                <p className={`font-poppins font-semibold text-sm mb-6 ${
                  pkg.color === 'violet' ? 'text-violet-400' :
                  pkg.color === 'fuchsia' ? 'text-fuchsia-400' :
                  'text-cyan-400'
                }`}>
                  "{pkg.usp}"
                </p>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-sora font-bold text-4xl text-white">
                      MVR {pkg.monthlyFee}
                    </span>
                    <span className="text-white/50">/month</span>
                  </div>
                  <p className="text-sm text-white/50 mt-1">
                    + MVR {pkg.setupFee} one-time setup fee
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.color === 'violet' ? 'text-violet-400' :
                        pkg.color === 'fuchsia' ? 'text-fuchsia-400' :
                        'text-cyan-400'
                      }`} />
                      <span className="font-inter text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleBuyNow(pkg)}
                    className={`w-full py-4 rounded-full font-poppins font-semibold transition-all duration-300 hop ${
                      pkg.color === 'violet' ? 'bg-violet-500 hover:bg-violet-600 text-white' :
                      pkg.color === 'fuchsia' ? 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white' :
                      'bg-cyan-500 hover:bg-cyan-600 text-[#0F0A1E]'
                    }`}
                  >
                    Buy Now via BML
                  </button>
                  <Link
                    to="/contact"
                    className="block w-full py-4 rounded-full font-poppins font-semibold text-center glass hover:bg-white/10 text-white transition-all duration-300"
                  >
                    Talk to Us
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Base Package Info */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RabbitDivider className="mb-16" />
          
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <h2 className="font-sora font-bold text-2xl text-white mb-6">
              All Digital Launchpad packages include:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                '5-Page Responsive Website (WordPress/Webflow)',
                'Google My Business & SEO Setup',
                'Social Media Profile Optimization',
                'Basic Analytics Report',
                'Dedicated Account Manager',
                '7-Day Launch Guarantee',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="font-inter text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-fuchsia-900/20 to-violet-900/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RabbitEars size="lg" className="mx-auto mb-6" />
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
            Ready to launch your digital presence?
          </h2>
          <p className="font-inter text-lg text-white/70 mb-8">
            Get your business online in just 7 days. Let's make it happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleBuyNow(subPackages[1])}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
