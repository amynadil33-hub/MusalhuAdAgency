import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { supabase } from '@/lib/supabase';
import {
  Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Loader2
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
  { value: 'custom', label: "Custom / Let's Discuss" },
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1️⃣ Save to Supabase
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

      // 2️⃣ Send email via Vercel serverless
      const emailRes = await fetch(
        'https://musalhu-advertising.com/api/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!emailRes.ok) {
        throw new Error('Email failed');
      }

      setIsSubmitted(true);
      toast({
        title: 'Message sent!',
        description: "We'll get back to you within 24 hours.",
      });

    } catch (err) {
      console.error(err);
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RabbitEars size="lg" className="mx-auto mb-6" />
          <h1 className="font-sora font-bold text-5xl sm:text-6xl text-white mb-6">
            Let's <span className="text-gradient">Talk</span>
          </h1>
          <p className="font-inter text-xl text-white/70">
            Tell us about your project and we’ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left info column */}
          <div>
            <h2 className="font-sora font-bold text-2xl text-white mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <a href="mailto:hello@musalhu-advertising.com" className="glass-card p-4 rounded-xl flex gap-4">
                <Mail className="text-violet-400" />
                <span className="text-white/60">hello@musalhu-advertising.com</span>
              </a>

              <a href="tel:+9609403155" className="glass-card p-4 rounded-xl flex gap-4">
                <Phone className="text-fuchsia-400" />
                <span className="text-white/60">+960 940 3155</span>
              </a>

              <a
                href="https://wa.me/9609403155"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex gap-4"
              >
                <MessageCircle className="text-green-400" />
                <span className="text-white/60">WhatsApp</span>
              </a>

              <div className="glass-card p-4 rounded-xl flex gap-4">
                <MapPin className="text-cyan-400" />
                <span className="text-white/60">Malé, Maldives</span>
              </div>
            </div>

            <RabbitDivider className="my-8" />
          </div>

          {/* Form column */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h2 className="text-white text-2xl font-bold mb-2">
                  Message Sent!
                </h2>
                <p className="text-white/60 mb-6">
                  We’ll get back to you shortly.
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
                  className="px-6 py-3 glass rounded-full text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input name="name" required placeholder="Your Name" value={formData.name} onChange={handleChange} />
                <input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
                <input name="email" required type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                <textarea name="message" required placeholder="Message" value={formData.message} onChange={handleChange} />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-primary rounded-full text-white flex justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
