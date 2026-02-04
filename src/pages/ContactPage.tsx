import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { supabase } from '@/lib/supabase';
import { 
  Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2,
  Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const categories = [
  { value: 'sme', label: 'SME / Startup (Digital Launchpad)' },
  { value: 'growth', label: 'Guesthouse / E-commerce (Performance Growth)' },
  { value: 'resort-corporate', label: 'Resort / Corporate (Elite Experiences)' },
];

const budgetRanges = [
  { value: 'under-5k', label: 'Under MVR 5,000' },
  { value: '5k-15k', label: 'MVR 5,000 - 15,000' },
  { value: '15k-50k', label: 'MVR 15,000 - 50,000' },
  { value: '50k-plus', label: 'MVR 50,000+' },
  { value: 'custom', label: 'Custom / Let\'s Discuss' },
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const defaultCategory = searchParams.get('category') || '';
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: defaultCategory,
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_inquiries').insert({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        category: formData.category,
        budget_range: formData.budget,
        message: formData.message,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: 'Message sent!',
        description: 'We\'ll get back to you within 24 hours.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <RabbitEars size="lg" className="mx-auto mb-6" />
            <h1 className="font-sora font-bold text-5xl sm:text-6xl text-white mb-6">
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="font-inter text-xl text-white/70">
              Ready to hop ahead? Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-sora font-bold text-2xl text-white mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <a
                  href="mailto:hello@musalhu-advertising.com"
                  className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">Email</h3>
                    <p className="font-inter text-white/60">hello@musalhu-advertising.com</p>
                  </div>
                </a>

                <a
                  href="tel:+9609403155"
                  className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">Phone</h3>
                    <p className="font-inter text-white/60">+960 940 3155</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/9609403155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">WhatsApp</h3>
                    <p className="font-inter text-white/60">Chat with us instantly</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 glass-card rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">Location</h3>
                    <p className="font-inter text-white/60">Malé, Republic of Maldives</p>
                  </div>
                </div>
              </div>

              <RabbitDivider className="my-8" />

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-poppins font-semibold text-white mb-4">
                  Response Time
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-violet-400" />
                    Email: Within 24 hours
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-violet-400" />
                    WhatsApp: Within 2 hours
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-violet-400" />
                    Phone: Instant (9am - 6pm)
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h2 className="font-sora font-bold text-2xl text-white mb-4">
                      Message Sent!
                    </h2>
                    <p className="font-inter text-white/60 mb-8">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          category: '',
                          budget: '',
                          message: '',
                        });
                      }}
                      className="px-6 py-3 glass rounded-full font-poppins font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-sora font-bold text-2xl text-white mb-6">
                      Send us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors"
                            placeholder="+960 XXX XXXX"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">
                            Category *
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500 transition-colors"
                          >
                            <option value="" className="bg-[#1A0B2E]">Select a category</option>
                            {categories.map((cat) => (
                              <option key={cat.value} value={cat.value} className="bg-[#1A0B2E]">
                                {cat.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-violet-500 transition-colors"
                          >
                            <option value="" className="bg-[#1A0B2E]">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range.value} value={range.value} className="bg-[#1A0B2E]">
                                {range.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop glow-purple hover:glow-pink transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
