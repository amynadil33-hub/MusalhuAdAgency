import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      toast({
        title: 'Message sent!',
        description: "We'll get back to you within 24 hours.",
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
            
            {/* Contact Info (unchanged) */}
            {/* ... your left column stays exactly the same ... */}

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
                      {/* FORM FIELDS UNCHANGED */}
                      {/* Submit Button */}
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
