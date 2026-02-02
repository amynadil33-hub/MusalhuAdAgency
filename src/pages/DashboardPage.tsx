import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { RabbitEars, RabbitDivider } from '@/components/ui/RabbitEars';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { 
  User, CreditCard, Package, Clock, CheckCircle2,
  ArrowRight, Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Payment {
  id: string;
  package_name: string;
  amount: number;
  status: string;
  created_at: string;
}

interface UserProfile {
  full_name: string | null;
  company_name: string | null;
  email: string;
  phone: string | null;
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    try {
      // Fetch payments
      const { data: paymentsData } = await supabase
        .from('payments')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (paymentsData) {
        setPayments(paymentsData);
      }

      // Fetch profile
      const { data: profileData } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (profileData) {
        setProfile(profileData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-violet-400 animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!user) return null;

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <RabbitEars size="md" className="mb-4" />
            <h1 className="font-sora font-bold text-4xl text-white mb-2">
              Welcome back, <span className="text-gradient">{profile?.full_name || user.email?.split('@')[0]}</span>
            </h1>
            <p className="font-inter text-white/60">
              Manage your account and view your orders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <User className="w-7 h-7 text-violet-400" />
                </div>
                <div>
                  <h2 className="font-poppins font-semibold text-lg text-white">Profile</h2>
                  <p className="text-sm text-white/50">Your account details</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Name</p>
                  <p className="text-white">{profile?.full_name || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white">{user.email}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Company</p>
                  <p className="text-white">{profile?.company_name || 'Not set'}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                  <Package className="w-7 h-7 text-fuchsia-400" />
                </div>
                <div>
                  <h2 className="font-poppins font-semibold text-lg text-white">Quick Actions</h2>
                  <p className="text-sm text-white/50">Get started</p>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/packages"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <span className="text-white">Browse Packages</span>
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <span className="text-white">Contact Support</span>
                  <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <CreditCard className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h2 className="font-poppins font-semibold text-lg text-white">Overview</h2>
                  <p className="text-sm text-white/50">Your activity</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <p className="text-2xl font-sora font-bold text-white">{payments.length}</p>
                  <p className="text-xs text-white/50">Total Orders</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <p className="text-2xl font-sora font-bold text-white">
                    {payments.filter(p => p.status === 'completed').length}
                  </p>
                  <p className="text-xs text-white/50">Completed</p>
                </div>
              </div>
            </div>
          </div>

          <RabbitDivider className="my-12" />

          {/* Orders */}
          <div>
            <h2 className="font-sora font-bold text-2xl text-white mb-6">
              Order History
            </h2>

            {payments.length === 0 ? (
              <div className="glass-card rounded-2xl p-12 text-center">
                <Package className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                  No orders yet
                </h3>
                <p className="text-white/50 mb-6">
                  You haven't made any purchases yet. Browse our packages to get started.
                </p>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-full font-poppins font-semibold text-white hop"
                >
                  Browse Packages
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="glass-card rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <Package className="w-6 h-6 text-violet-400" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-white">
                            {payment.package_name}
                          </h3>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-white/50 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {new Date(payment.created_at).toLocaleDateString()}
                            </span>
                            <span className={`text-sm flex items-center gap-1 ${
                              payment.status === 'completed' ? 'text-green-400' : 'text-yellow-400'
                            }`}>
                              <CheckCircle2 className="w-3 h-3" />
                              {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-sora font-bold text-xl text-white">
                          MVR {payment.amount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
