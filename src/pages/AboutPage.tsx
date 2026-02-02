import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { 
  Zap, Target, Shield, Heart, ArrowRight, CheckCircle2,
  Lightbulb, Rocket, BarChart, Award, Users, Globe
} from 'lucide-react';

const teamImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027688471_2622cb8b.png';
const heroImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027548513_0349a6dc.png';

const values = [
  {
    icon: Zap,
    title: 'Speed',
    description: 'We move fast. In the digital world, timing is everything.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Every action is calculated. Every campaign is data-driven.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We deliver on our promises. Every time.',
  },
  {
    icon: Heart,
    title: 'Creativity',
    description: 'Bold ideas that capture attention and drive results.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discover',
    description: 'We dive deep into your business, audience, and goals.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Custom roadmap designed for your specific objectives.',
  },
  {
    step: '03',
    title: 'Create',
    description: 'Stunning content and campaigns that resonate.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Execute with precision and monitor in real-time.',
  },
  {
    step: '05',
    title: 'Optimize',
    description: 'Continuous improvement based on performance data.',
  },
];

const industries = [
  { name: 'SMEs & Startups', icon: Rocket },
  { name: 'Guesthouses', icon: Users },
  { name: 'E-commerce', icon: BarChart },
  { name: 'Resorts', icon: Globe },
  { name: 'Corporates', icon: Award },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Maldives"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] via-[#0F0A1E]/90 to-[#0F0A1E]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <RabbitEars size="lg" className="mb-6" />
            <h1 className="font-sora font-bold text-5xl sm:text-6xl text-white mb-6">
              About <span className="text-gradient">HopAgency</span>
            </h1>
            <p className="font-inter text-xl text-white/70 mb-8">
              A Maldivian marketing, advertising & event management agency built for speed, strategy, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 font-inter text-white/70 leading-relaxed">
                <p>
                  HopAgency was born from a simple observation: Maldivian businesses deserve world-class 
                  marketing that moves as fast as the digital landscape demands.
                </p>
                <p>
                  We named ourselves after the rabbit — not for cuteness, but for what it truly represents: 
                  <span className="text-violet-400 font-medium"> speed, intelligence, and precision</span>. 
                  In nature, rabbits are among the fastest and most alert creatures. They move quickly, 
                  think strategically, and always stay one step ahead.
                </p>
                <p>
                  That's exactly how we approach marketing. We don't just create campaigns — we engineer 
                  outcomes. Every strategy is calculated, every execution is swift, and every result is measured.
                </p>
                <p>
                  Our hybrid model combines the recurring revenue stability of tech/web services with the 
                  high-margin impact of event management. This allows us to serve everyone from small cafes 
                  to luxury resorts with the same level of excellence.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={teamImage}
                alt="Our Team"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <RabbitEars size="sm" />
                  <div>
                    <p className="font-poppins font-semibold text-white">Speed. Strategy. Scale.</p>
                    <p className="text-xs text-white/50">Our core philosophy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Rabbit Meaning */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <RabbitEars size="lg" className="mx-auto mb-6" />
              <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
                Why the <span className="text-gradient">Rabbit?</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-violet-400" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-white mb-2">Speed</h3>
                  <p className="font-inter text-sm text-white/60">
                    Rabbits are among the fastest creatures. We move quickly to capture opportunities.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-fuchsia-400" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-white mb-2">Intelligence</h3>
                  <p className="font-inter text-sm text-white/60">
                    Alert and strategic, rabbits think ahead. We plan every move with precision.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-white mb-2">Precision</h3>
                  <p className="font-inter text-sm text-white/60">
                    Every hop is calculated. We execute with accuracy and purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome-First Approach */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RabbitDivider className="mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
                Outcome-First <span className="text-gradient-pink">Approach</span>
              </h2>
              <p className="font-inter text-white/70 mb-8">
                We don't sell hours — we sell results. Our packages are designed around 
                the outcomes that matter to your business:
              </p>
              <ul className="space-y-4">
                {[
                  'Bookings and reservations for hospitality',
                  'Online visibility and brand awareness for SMEs',
                  'Sold-out events and viral moments for resorts',
                  'Measurable ROI on every campaign',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-fuchsia-400 flex-shrink-0" />
                    <span className="font-inter text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-poppins font-semibold text-xl text-white mb-6">
                Our Hybrid Model
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-white mb-1">Tech/Web Services</h4>
                    <p className="font-inter text-sm text-white/60">
                      Recurring revenue from digital marketing, websites, and automation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-white mb-1">Event Management</h4>
                    <p className="font-inter text-sm text-white/60">
                      High-margin projects for resorts and corporate events.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-poppins font-semibold text-cyan-400 mb-2">
                  Niche Leadership: Resort Entertainment Tech
                </h4>
                <p className="font-inter text-sm text-white/60">
                  Artist booking + promotion + ticketing + live streaming — all in one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="glass-card rounded-2xl p-6 text-center hop">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-violet-400" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  {value.title}
                </h3>
                <p className="font-inter text-sm text-white/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RabbitDivider className="mb-16" />
          
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-sora font-bold text-violet-500/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-white/60">
                  {item.description}
                </p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="glass-card rounded-full px-6 py-3 flex items-center gap-3 hop"
              >
                <industry.icon className="w-5 h-5 text-violet-400" />
                <span className="font-poppins font-medium text-white">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-fuchsia-900/20 to-violet-900/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RabbitEars size="lg" className="mx-auto mb-6" />
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
            Ready to work with us?
          </h2>
          <p className="font-inter text-lg text-white/70 mb-8">
            Let's discuss how we can help your brand move faster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/packages"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300"
            >
              View Our Packages
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
