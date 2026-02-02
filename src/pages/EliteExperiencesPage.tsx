import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { 
  Calendar, ArrowRight, CheckCircle2, Star, Users,
  Music, Camera, Video, Mic, Globe, Award
} from 'lucide-react';

const eventImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027628329_6751c959.png';
const teamImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027688471_2622cb8b.png';

const services = [
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Full logistics for resort gigs including sound, lighting, staging, and coordination.',
  },
  {
    icon: Music,
    title: 'Talent Acquisition',
    description: 'Booking famous personalities, international DJs, and local artists.',
  },
  {
    icon: Camera,
    title: 'Drone Coverage',
    description: 'Stunning aerial footage that captures the grandeur of your event.',
  },
  {
    icon: Video,
    title: '4K Aftermovies',
    description: 'Professional post-event videos that extend the life of your event.',
  },
  {
    icon: Globe,
    title: 'Live Streaming',
    description: 'Broadcast your event to a global audience in real-time.',
  },
  {
    icon: Mic,
    title: 'PR Coverage',
    description: 'Press releases, media invites, and influencer coordination.',
  },
];

const testimonials = [
  {
    quote: "HopAgency delivered an unforgettable New Year's Eve experience. The production quality was world-class.",
    author: "Resort Manager",
    company: "5-Star Maldives Resort",
  },
  {
    quote: "From artist booking to live streaming, they handled everything flawlessly. Highly recommend.",
    author: "Events Director",
    company: "International Hotel Chain",
  },
];

export default function EliteExperiencesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={eventImage}
            alt="Elite Event"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] via-[#0F0A1E]/80 to-[#0F0A1E]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-white/80">For Resorts, Large Corporates</span>
            </div>

            <h1 className="font-sora font-bold text-5xl sm:text-6xl text-white mb-6">
              Elite <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">Experiences</span>
            </h1>

            <p className="font-poppins font-semibold text-2xl text-cyan-400 mb-4">
              "World-class entertainment for world-class destinations."
            </p>

            <p className="font-inter text-lg text-white/70 mb-8">
              The Prestige Event & Media package for luxury resorts and large corporates. 
              We deliver unforgettable experiences that elevate your brand.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact?category=resort-corporate"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full font-poppins font-semibold text-[#0F0A1E] hop glow-cyan transition-all duration-300"
              >
                Request a Private Proposal
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Talk to Us
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/50">
              * Custom Quote (High Ticket) — No standard pricing. Each project is tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Full-Service <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">Production</span>
            </h2>
            <p className="font-inter text-lg text-white/60 max-w-2xl mx-auto">
              From concept to execution, we handle every aspect of your event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="glass-card rounded-2xl p-6 hop">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-white/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RabbitDivider className="mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
                The Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300">Package</span>
              </h2>
              
              <ul className="space-y-4">
                {[
                  'Event Management: Full logistics for resort gigs (Sound, Light, Artist Booking)',
                  'Talent Acquisition: Booking famous personalities/DJs',
                  'Multimedia: Drone coverage, 4K Aftermovies, Live Streaming',
                  'PR Coverage: Press releases and influencer invites',
                  'End-to-end production and coordination',
                  'On-site team for seamless execution',
                  'Post-event content and analytics',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src={teamImage}
                alt="Our Team"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1E] via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                  ))}
                </div>
                <p className="font-inter text-lg text-white/80 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-poppins font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="font-inter text-sm text-white/50">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-sora font-bold text-3xl text-white mb-6">
                  Why Choose Us for Your Event?
                </h2>
                <div className="space-y-4">
                  {[
                    'Deep understanding of Maldives resort culture',
                    'Network of international and local talent',
                    'State-of-the-art production equipment',
                    'Proven track record with luxury brands',
                    'End-to-end confidentiality',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="font-inter text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-cyan-500/20 mb-6">
                  <Users className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="font-sora font-bold text-2xl text-white mb-2">
                  50+ Events
                </h3>
                <p className="font-inter text-white/60">
                  Successfully delivered across the Maldives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-violet-900/20 to-cyan-900/20" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RabbitEars size="lg" className="mx-auto mb-6" />
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-6">
            Ready to create something extraordinary?
          </h2>
          <p className="font-inter text-lg text-white/70 mb-8">
            Let's discuss your vision and craft an unforgettable experience.
          </p>
          <Link
            to="/contact?category=resort-corporate"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full font-poppins font-semibold text-[#0F0A1E] hop glow-cyan transition-all duration-300"
          >
            Request a Private Proposal
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
