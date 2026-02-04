import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { 
  Zap, Target, Globe, TrendingUp, Clock, Shield, 
  Users, Award, ArrowRight, Play, CheckCircle2,
  Rocket, BarChart3, Calendar, Sparkles
} from 'lucide-react';

const heroImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027548513_0349a6dc.png';
const digitalImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027602449_fa74f253.png';
const eventImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027628329_6751c959.png';
const growthImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027655979_f7578edd.png';

const packages = [
  {
    title: 'Digital Launchpad',
    audience: 'For Cafes, Shops, Startups',
    usp: 'Get your business online in 7 days.',
    icon: Rocket,
    color: 'violet',
    image: digitalImage,
    path: '/packages/digital-launchpad',
    buttonText: 'View Package',
  },
  {
    title: 'Performance Growth',
    audience: 'For Guesthouses, E-commerce',
    usp: "We don't just post; we generate bookings.",
    icon: BarChart3,
    color: 'fuchsia',
    image: growthImage,
    path: '/packages/performance-growth',
    buttonText: 'View Package',
  },
  {
    title: 'Elite Experiences',
    audience: 'For Resorts, Large Corporates',
    usp: 'World-class entertainment for world-class destinations.',
    icon: Calendar,
    color: 'cyan',
    image: eventImage,
    path: '/packages/elite-experiences',
    buttonText: 'Request Proposal',
  },
];

const howWeWork = [
  {
    icon: Target,
    title: 'Outcome-Based Services',
    description: 'We sell results, not hours. Your success is our metric.',
  },
  {
    icon: Zap,
    title: 'Productized Packages',
    description: 'Clear deliverables, fixed pricing, no surprises.',
  },
  {
    icon: TrendingUp,
    title: 'Hybrid Revenue Model',
    description: 'Tech/web recurring revenue + high-margin event management.',
  },
  {
    icon: Sparkles,
    title: 'Resort Entertainment Tech',
    description: 'Artist booking + promotion + ticketing + live streaming.',
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Speed is in our DNA. We move fast without cutting corners.',
  },
  {
    icon: Target,
    title: 'Strategic Execution',
    description: 'Every action is backed by data and strategic thinking.',
  },
  {
    icon: Globe,
    title: 'Local + Global',
    description: 'Maldivian insight combined with international standards.',
  },
  {
    icon: Shield,
    title: 'End-to-End Delivery',
    description: 'From concept to completion, we handle everything.',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '3', label: 'Days Average Launch' },
  { value: '95%', label: 'Client Retention' },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Maldives luxury"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E]/80 via-[#0F0A1E]/60 to-[#0F0A1E]" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-transparent to-fuchsia-900/30" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 fade-in">
              <RabbitEars size="sm" />
              <span className="text-sm font-medium text-white/80">Maldives' Premier Agency</span>
            </div>

            {/* Headline */}
            <h1 className="font-sora font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 fade-in" style={{ animationDelay: '0.1s' }}>
              Smart Ideas.{' '}
              <span className="text-gradient">Fast Execution.</span>{' '}
              Real Results.
            </h1>

            {/* Positioning Lines */}
            <div className="space-y-4 mb-10 fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="font-poppins text-xl sm:text-2xl text-white/90 leading-relaxed">
                A Maldivian marketing, advertising & event management agency built for speed, strategy, and scale.
              </p>
              <p className="font-inter text-lg text-white/70 leading-relaxed">
                From digital growth to world-class resort experiences — we make brands move fast.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/packages"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300"
              >
                Find Your Package
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-violet-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Choose Your Growth Path */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RabbitEars size="lg" className="mx-auto mb-6" />
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
              Choose Your <span className="text-gradient">Growth Path</span>
            </h2>
            <p className="font-inter text-lg text-white/60 max-w-2xl mx-auto">
              Three distinct packages designed for different stages of your business journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.title}
                className="group relative glass-card rounded-2xl overflow-hidden hop"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                    pkg.color === 'violet' ? 'bg-violet-500/20 text-violet-400' :
                    pkg.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400' :
                    'bg-cyan-500/20 text-cyan-400'
                  }`}>
                    <pkg.icon className="w-6 h-6" />
                  </div>

                  <span className={`text-xs font-medium uppercase tracking-wider ${
                    pkg.color === 'violet' ? 'text-violet-400' :
                    pkg.color === 'fuchsia' ? 'text-fuchsia-400' :
                    'text-cyan-400'
                  }`}>
                    {pkg.audience}
                  </span>

                  <h3 className="font-sora font-bold text-2xl text-white mt-2 mb-3">
                    {pkg.title}
                  </h3>

                  <p className="font-inter text-white/60 mb-6">
                    {pkg.usp}
                  </p>

                  <Link
                    to={pkg.path}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-poppins font-semibold text-sm transition-all duration-300 ${
                      pkg.color === 'violet' ? 'bg-violet-500/20 text-violet-400 hover:bg-violet-500/30' :
                      pkg.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500/30' :
                      'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'
                    }`}
                  >
                    {pkg.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  pkg.color === 'violet' ? 'bg-violet-500/5' :
                  pkg.color === 'fuchsia' ? 'bg-fuchsia-500/5' :
                  'bg-cyan-500/5'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RabbitDivider className="mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-6">
                How We <span className="text-gradient-pink">Work</span>
              </h2>
              <p className="font-inter text-lg text-white/60 mb-10">
                We've built a unique approach that combines the best of technology-driven marketing with high-touch event management.
              </p>

              <div className="space-y-6">
                {howWeWork.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="font-inter text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4">
                      <div className="font-sora font-bold text-4xl text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="font-inter text-sm text-white/60">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
              Why Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="font-inter text-lg text-white/60 max-w-2xl mx-auto">
              We combine local expertise with global standards to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 text-center hop"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof/Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RabbitDivider className="mb-16" />
          
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-4xl sm:text-5xl text-white mb-4">
              Results That <span className="text-gradient-pink">Speak</span>
            </h2>
            <p className="font-inter text-lg text-white/60 max-w-2xl mx-auto">
              From sold-out resort events to viral social campaigns — our work delivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Highlight */}
            <div className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-64">
                <img
                  src={eventImage}
                  alt="Resort Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-fuchsia-400 uppercase tracking-wider">Event Management</span>
                  <h3 className="font-poppins font-semibold text-lg text-white mt-1">Luxury Resort DJ Night</h3>
                </div>
              </div>
            </div>

            {/* Digital Campaign */}
            <div className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-64">
                <img
                  src={growthImage}
                  alt="Digital Campaign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">Digital Marketing</span>
                  <h3 className="font-poppins font-semibold text-lg text-white mt-1">300% Booking Increase</h3>
                </div>
              </div>
            </div>

            {/* Brand Launch */}
            <div className="glass-card rounded-2xl overflow-hidden group">
              <div className="relative h-64">
                <img
                  src={digitalImage}
                  alt="Brand Launch"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Brand Launch</span>
                  <h3 className="font-poppins font-semibold text-lg text-white mt-1">7-Day SME Launch</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 via-fuchsia-900/30 to-violet-900/30" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RabbitEars size="lg" className="mx-auto mb-8" />
          
          <h2 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Ready to <span className="text-gradient">hop ahead?</span>
          </h2>
          
          <p className="font-inter text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Let's build something extraordinary together. Your brand deserves to move fast.
          </p>
          
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-primary rounded-full font-poppins font-bold text-lg text-white hop glow-purple hover:glow-pink transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
