import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { RabbitEars } from '../ui/RabbitEars';
import { useAuth } from '@/lib/auth';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Packages', path: '/packages' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <RabbitEars size="md" className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-sora font-bold text-xl text-white group-hover:text-gradient transition-all duration-300">
              Musalhu Advertising
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-poppins font-medium text-sm transition-all duration-300 hover:text-violet-400 relative ${
                  location.pathname === link.path
                    ? 'text-violet-400'
                    : 'text-white/80'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-all duration-300"
                >
                  <User className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-medium text-white/90">
                    {user.email?.split('@')[0]}
                  </span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 glass rounded-xl border border-white/10 overflow-hidden">
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Sign In
              </Link>
            )}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-primary rounded-full font-poppins font-semibold text-sm text-white hop glow-purple hover:glow-pink transition-all duration-300"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-poppins font-medium text-sm transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-violet-500/20 text-violet-400'
                    : 'text-white/80 hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-white/10 mt-2 pt-4 flex flex-col gap-2">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm text-white/80 hover:bg-white/5"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-3 rounded-lg text-sm text-white/80 hover:bg-white/5 text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm text-white/80 hover:bg-white/5"
                >
                  Sign In
                </Link>
              )}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 bg-gradient-primary rounded-lg font-poppins font-semibold text-sm text-white text-center"
              >
                Start Project
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
