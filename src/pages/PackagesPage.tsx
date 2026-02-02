import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { 
  Rocket, BarChart3, Calendar, ArrowRight, CheckCircle2,
  Users, Building2, Store
} from 'lucide-react';

const digitalImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027602449_fa74f253.png';
const eventImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027628329_6751c959.png';
const growthImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027655979_f7578edd.png';

const packages = [
  {
    id: 'digital-launchpad',
    title: 'Digital Launchpad',
    subtitle: 'SME "Kickstarter"',
    audience: 'For Cafes, Shops, Startups',
    audienceIcon: Store,
    usp: 'Get your business online in 7 days.',
    priceModel: 'Low Setup Fee + Monthly Retainer',
    icon: Rocket,
    color: 'violet',
    image: digitalImage,
    path: '/packages/digital-launchpad',
    features: [
      '5-Page Responsive Website (WordPress/Webflow)',
      'Google My Business & SEO Setup',
      'Social Media: 8 Posts + 4 Stories per month',
      'Basic Analytics Report',
    ],
    hasCheckout: true,
  },
  {
    id: 'performance-growth',
    title: 'Performance Growth',
    subtitle: 'Growth Engine',
    audience: 'For Guesthouses, E-commerce',
    audienceIcon: Building2,
    usp: "We don't just post; we generate bookings.",
    priceModel: 'Medium Retainer + % of Ad Spend',
    icon: BarChart3,
    color: 'fuchsia',
    image: growthImage,
    path: '/packages/performance-growth',
    features: [
      'Full E-commerce or Booking Engine (SaaS integration)',
      'Paid Ads Management (FB, Insta, TikTok, Google)',
      'Content Creation: 2 Video Shoots per month',
      'Email Marketing Automation',
    ],
    hasCheckout: true,
  },
  {
    id: 'elite-experiences',
    title: 'Elite Experiences',
    subtitle: 'Prestige Event & Media',
    audience: 'For Resorts, Large Corporates',
    audienceIcon: Users,
    usp: 'World-class entertainment for world-class destinations.',
    priceModel: 'Custom Quote (High Ticket)',
    icon: Calendar,
    color: 'cyan',
    image: eventImage,
    path: '/packages/elite-experiences',
    features: [
      'Event Management: Full logistics for resort gigs',
      'Talent Acquisition: Booking famous personalities/DJs',
      'Multimedia: Drone coverage, 4K Aftermovies, Live Streaming',
      'PR Coverage: Press releases and influencer invites',
    ],
    hasCheckout: false,
  },
];

export default function PackagesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <RabbitEars size="lg" className="mx-auto mb-6" />
            <h1 className="font-sora font-bold text-5xl sm:text-6xl text-white mb-6">
              Our <span className="text-gradient">Packages</span>
            </h1>
            <p className="font-inter text-xl text-white/70">
              Three distinct packages designed for different stages of your business journey. 
              Choose the path that fits your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`glass-card rounded-3xl overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Side */}
                  <div className={`relative h-64 lg:h-auto min-h-[400px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 1 ? 'l' : 'r'} from-[#1A0B2E] via-[#1A0B2E]/50 to-transparent lg:from-transparent lg:via-transparent lg:to-[#1A0B2E]`} />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                        pkg.color === 'violet' ? 'bg-violet-500/20 text-violet-400 border border-violet-500/30' :
                        pkg.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30' :
                        'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      }`}>
                        <pkg.audienceIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{pkg.audience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                      pkg.color === 'violet' ? 'bg-violet-500/20 text-violet-400' :
                      pkg.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400' :
                      'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      <pkg.icon className="w-7 h-7" />
                    </div>

                    <span className="text-sm font-medium text-white/50 uppercase tracking-wider mb-2">
                      {pkg.subtitle}
                    </span>

                    <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
                      {pkg.title}
                    </h2>

                    <p className={`font-poppins font-semibold text-lg mb-4 ${
                      pkg.color === 'violet' ? 'text-violet-400' :
                      pkg.color === 'fuchsia' ? 'text-fuchsia-400' :
                      'text-cyan-400'
                    }`}>
                      "{pkg.usp}"
                    </p>

                    <p className="font-inter text-white/60 mb-6">
                      <span className="font-medium text-white/80">Price Model:</span> {pkg.priceModel}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            pkg.color === 'violet' ? 'text-violet-400' :
                            pkg.color === 'fuchsia' ? 'text-fuchsia-400' :
                            'text-cyan-400'
                          }`} />
                          <span className="font-inter text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={pkg.path}
                        className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins font-semibold transition-all duration-300 hop ${
                          pkg.color === 'violet' ? 'bg-violet-500 hover:bg-violet-600 text-white glow-purple' :
                          pkg.color === 'fuchsia' ? 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white glow-pink' :
                          'bg-cyan-500 hover:bg-cyan-600 text-[#0F0A1E] glow-cyan'
                        }`}
                      >
                        {pkg.hasCheckout ? 'View Package' : 'Request Proposal'}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RabbitDivider className="mb-16" />
          
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Quick <span className="text-gradient">Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-6 text-left font-poppins font-semibold text-white">Feature</th>
                  <th className="p-6 text-center font-poppins font-semibold text-violet-400">Digital Launchpad</th>
                  <th className="p-6 text-center font-poppins font-semibold text-fuchsia-400">Performance Growth</th>
                  <th className="p-6 text-center font-poppins font-semibold text-cyan-400">Elite Experiences</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-white/70">Best For</td>
                  <td className="p-6 text-center text-white/70">SMEs, Startups</td>
                  <td className="p-6 text-center text-white/70">Guesthouses, E-commerce</td>
                  <td className="p-6 text-center text-white/70">Resorts, Corporates</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-white/70">Website</td>
                  <td className="p-6 text-center text-violet-400">5-Page Site</td>
                  <td className="p-6 text-center text-fuchsia-400">Full E-commerce</td>
                  <td className="p-6 text-center text-cyan-400">Custom</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-white/70">Social Media</td>
                  <td className="p-6 text-center text-violet-400">8 Posts/month</td>
                  <td className="p-6 text-center text-fuchsia-400">Full Management</td>
                  <td className="p-6 text-center text-cyan-400">PR Coverage</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-white/70">Paid Ads</td>
                  <td className="p-6 text-center text-white/40">-</td>
                  <td className="p-6 text-center text-fuchsia-400">Full Management</td>
                  <td className="p-6 text-center text-cyan-400">Campaign Support</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-6 text-white/70">Video Production</td>
                  <td className="p-6 text-center text-white/40">-</td>
                  <td className="p-6 text-center text-fuchsia-400">2 Shoots/month</td>
                  <td className="p-6 text-center text-cyan-400">4K + Drone</td>
                </tr>
                <tr>
                  <td className="p-6 text-white/70">Event Management</td>
                  <td className="p-6 text-center text-white/40">-</td>
                  <td className="p-6 text-center text-white/40">-</td>
                  <td className="p-6 text-center text-cyan-400">Full Service</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-fuchsia-900/20 to-violet-900/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
            Not sure which package fits?
          </h2>
          <p className="font-inter text-lg text-white/70 mb-8">
            Let's have a quick chat to understand your goals and recommend the perfect solution.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300"
          >
            Schedule a Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
