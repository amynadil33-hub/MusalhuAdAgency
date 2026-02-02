import { Link } from 'react-router-dom';
import { RabbitEars, RabbitDivider } from '../ui/RabbitEars';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Digital Launchpad', path: '/packages/digital-launchpad' },
    { name: 'Performance Growth', path: '/packages/performance-growth' },
    { name: 'Elite Experiences', path: '/packages/elite-experiences' },
    { name: 'All Packages', path: '/packages' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0612] border-t border-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <RabbitEars size="md" />
              <span className="font-sora font-bold text-xl text-white">HopAgency</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A Maldivian marketing, advertising & event management agency built for speed, strategy, and scale.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-violet-400 hover:border-violet-500/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-violet-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-violet-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Malé, Republic of Maldives
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <a
                  href="mailto:hello@hopagency.mv"
                  className="text-white/60 text-sm hover:text-violet-400 transition-colors"
                >
                  hello@hopagency.mv
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <a
                  href="tel:+9607777777"
                  className="text-white/60 text-sm hover:text-violet-400 transition-colors"
                >
                  +960 777 7777
                </a>
              </li>
            </ul>
          </div>
        </div>

        <RabbitDivider className="my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} HopAgency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/40 text-sm hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-white/40 text-sm hover:text-white/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
