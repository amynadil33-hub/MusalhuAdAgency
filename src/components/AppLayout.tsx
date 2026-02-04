import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight, CheckCircle2, Zap, Target, Globe, Clock, Shield, Rocket, BarChart3, Calendar, Star, Users, Award } from 'lucide-react';

const heroImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027548513_0349a6dc.png';
const digitalImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027602449_fa74f253.png';
const eventImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027628329_6751c959.png';
const growthImage = 'https://d64gsuwffb70l.cloudfront.net/69807992c3aafc4aa8861f6a_1770027655979_f7578edd.png';

function RabbitEars({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = { sm: { height: 16, width: 3, gap: 6 }, md: { height: 24, width: 4, gap: 8 }, lg: { height: 32, width: 5, gap: 10 } };
  const { height, width, gap } = sizes[size];
  return (
    <div className={`relative inline-flex items-end ${className}`} style={{ gap: `${gap}px` }}>
      <div className="bg-gradient-to-t from-violet-500 via-fuchsia-500 to-cyan-400 rounded-full transform -rotate-12" style={{ width: `${width}px`, height: `${height}px` }} />
      <div className="bg-gradient-to-t from-violet-500 via-fuchsia-500 to-cyan-400 rounded-full transform rotate-12" style={{ width: `${width}px`, height: `${height}px` }} />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{ name: 'Home', path: '#home' }, { name: 'Packages', path: '#packages' }, { name: 'About', path: '#about' }, { name: 'Contact', path: '#contact' }];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <RabbitEars size="md" className="group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold text-xl text-white"></span>
          </a>Musalhu Advertising
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (<a key={link.path} href={link.path} className="font-medium text-sm text-white/80 hover:text-violet-400 transition-colors">{link.name}</a>))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex px-6 py-2.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 rounded-full font-semibold text-sm text-white hover:-translate-y-1 transition-transform shadow-lg shadow-violet-500/30">Start Project</a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white/80"><Menu className="w-6 h-6" /></button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/5 border-t border-white/10 p-4">
          {navLinks.map((link) => (<a key={link.path} href={link.path} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-white/80 hover:bg-white/5 rounded-lg">{link.name}</a>))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block mt-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-pink-500 rounded-lg text-white text-center font-semibold">Start Project</a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0A0612] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6"><RabbitEars size="md" /><span className="font-bold text-xl text-white">Musalhu Advertising</span></div>
            <p className="text-white/60 text-sm">A Maldivian marketing, advertising & event management agency built for speed, strategy, and scale.</p>
          </div>
          <div><h4 className="font-semibold text-white mb-4">Services</h4><ul className="space-y-2 text-white/60 text-sm"><li><a href="#packages" className="hover:text-violet-400">Digital Launchpad</a></li><li><a href="#packages" className="hover:text-violet-400">Performance Growth</a></li><li><a href="#packages" className="hover:text-violet-400">Elite Experiences</a></li></ul></div>
          <div><h4 className="font-semibold text-white mb-4">Company</h4><ul className="space-y-2 text-white/60 text-sm"><li><a href="#about" className="hover:text-violet-400">About Us</a></li><li><a href="#contact" className="hover:text-violet-400">Contact</a></li></ul></div>
          <div><h4 className="font-semibold text-white mb-4">Contact</h4><ul className="space-y-3 text-white/60 text-sm"><li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-violet-400" />Malé, Maldives</li><li className="flex items-center gap-2"><Mail className="w-4 h-4 text-violet-400" />hello@musalhu-advertising.com</li><li className="flex items-center gap-2"><Phone className="w-4 h-4 text-violet-400" />+960 940 3155</li></ul></div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">© {new Date().getFullYear()} Musalhu <Advertising></Advertising>. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function AppLayout() {
  const packages = [
    { title: 'Digital Launchpad', audience: 'For Cafes, Shops, Startups', usp: 'Get your business online in 7 days.', icon: Rocket, color: 'violet', image: digitalImage },
    { title: 'Performance Growth', audience: 'For Guesthouses, E-commerce', usp: "We don't just post; we generate bookings.", icon: BarChart3, color: 'fuchsia', image: growthImage },
    { title: 'Elite Experiences', audience: 'For Resorts, Large Corporates', usp: 'World-class entertainment for world-class destinations.', icon: Calendar, color: 'cyan', image: eventImage },
  ];
  const whyUs = [
    { icon: Clock, title: 'Fast Turnaround', desc: 'Speed is in our DNA.' },
    { icon: Target, title: 'Strategic Execution', desc: 'Data-driven decisions.' },
    { icon: Globe, title: 'Local + Global', desc: 'Maldivian insight, international standards.' },
    { icon: Shield, title: 'End-to-End', desc: 'From concept to completion.' },
  ];

  return (
    <div className="min-h-screen bg-[#0F0A1E]">
      <Header />
      
      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0"><img src={heroImage} alt="Maldives" className="w-full h-full object-cover opacity-40" /><div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E]/80 via-[#0F0A1E]/60 to-[#0F0A1E]" /></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 mb-8"><RabbitEars size="sm" /><span className="text-sm text-white/80">Maldives' Premier Agency</span></div>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">Smart Ideas. <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400">Fast Execution.</span> Real Results.</h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-4">A Maldivian marketing, advertising & event management agency built for speed, strategy, and scale.</p>
            <p className="text-lg text-white/70 mb-10">From digital growth to world-class resort experiences — we make brands move fast.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#packages" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 rounded-full font-semibold text-white hover:-translate-y-2 transition-transform shadow-lg shadow-violet-500/30">Find Your Package <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-colors">Talk to Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><RabbitEars size="lg" className="mx-auto mb-6" /><h2 className="font-bold text-4xl sm:text-5xl text-white mb-4">Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400">Growth Path</span></h2><p className="text-lg text-white/60">Three distinct packages for different stages of your business.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.title} className="group backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform">
                <div className="relative h-48 overflow-hidden"><img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] to-transparent" /></div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${pkg.color === 'violet' ? 'bg-violet-500/20 text-violet-400' : pkg.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400' : 'bg-cyan-500/20 text-cyan-400'}`}><pkg.icon className="w-6 h-6" /></div>
                  <span className={`text-xs font-medium uppercase tracking-wider ${pkg.color === 'violet' ? 'text-violet-400' : pkg.color === 'fuchsia' ? 'text-fuchsia-400' : 'text-cyan-400'}`}>{pkg.audience}</span>
                  <h3 className="font-bold text-2xl text-white mt-2 mb-3">{pkg.title}</h3>
                  <p className="text-white/60 mb-6">{pkg.usp}</p>
                  <a href="#contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors ${pkg.color === 'violet' ? 'bg-violet-500/20 text-violet-400 hover:bg-violet-500/30' : pkg.color === 'fuchsia' ? 'bg-fuchsia-500/20 text-fuchsia-400 hover:bg-fuchsia-500/30' : 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30'}`}>{pkg.title === 'Elite Experiences' ? 'Request Proposal' : 'View Package'} <ArrowRight className="w-4 h-4" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="font-bold text-4xl sm:text-5xl text-white mb-4">Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400">Us</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mx-auto mb-4"><item.icon className="w-8 h-8 text-violet-400" /></div>
                <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-900/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <RabbitEars size="lg" className="mx-auto mb-6" />
              <h2 className="font-bold text-3xl sm:text-4xl text-white mb-6">Why the <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400">Rabbit?</span></h2>
              <p className="text-white/70 mb-8">We named ourselves after the rabbit — not for cuteness, but for what it truly represents: speed, intelligence, and precision. In nature, rabbits are among the fastest and most alert creatures. They move quickly, think strategically, and always stay one step ahead.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mx-auto mb-4"><Zap className="w-8 h-8 text-violet-400" /></div><h3 className="font-semibold text-xl text-white mb-2">Speed</h3><p className="text-sm text-white/60">We move quickly to capture opportunities.</p></div>
                <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center mx-auto mb-4"><Target className="w-8 h-8 text-fuchsia-400" /></div><h3 className="font-semibold text-xl text-white mb-2">Intelligence</h3><p className="text-sm text-white/60">We plan every move with precision.</p></div>
                <div className="text-center"><div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4"><Award className="w-8 h-8 text-cyan-400" /></div><h3 className="font-semibold text-xl text-white mb-2">Precision</h3><p className="text-sm text-white/60">We execute with accuracy and purpose.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RabbitEars size="lg" className="mx-auto mb-8" />
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400">hop ahead?</span></h2>
          <p className="text-xl text-white/70 mb-10">Let's build something extraordinary together. Your brand deserves to move fast.</p>
          <a href="mailto:hello@musalhu-advertising.com" className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 rounded-full font-bold text-lg text-white hover:-translate-y-2 transition-transform shadow-lg shadow-violet-500/30">Start Your Project <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" /></a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
