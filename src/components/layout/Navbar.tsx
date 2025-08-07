import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Settings, LogOut, Grid, Layers, MessageSquare, Bell } from 'lucide-react';
import Button from '../ui/Button';
import { useAppStore } from '../../store';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser, isAuthenticated } = useAppStore();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <Grid className="h-5 w-5" /> },
    { name: 'Projects', path: '/projects', icon: <Layers className="h-5 w-5" /> },
    { name: 'AI Assistant', path: '/assistant', icon: <MessageSquare className="h-5 w-5" /> },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${isScrolled ? 'bg-white shadow-subtle' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-primary-600">
              AIHomeX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center text-sm font-medium transition-colors
                  ${location.pathname === item.path
                    ? 'text-primary-600'
                    : 'text-neutral-700 hover:text-primary-600'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-error-500"></span>
                </Button>
                
                <Link to="/profile">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center overflow-hidden">
                      {currentUser?.profileImage ? (
                        <img
                          src={currentUser.profileImage}
                          alt={currentUser.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <User className="h-5 w-5 text-primary-600" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-neutral-800">
                      {currentUser?.name || 'User'}
                    </span>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-900" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center py-2 text-base font-medium
                    ${location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-neutral-700'
                    }
                  `}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-neutral-200">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center py-2 text-base font-medium text-neutral-700"
                    >
                      <User className="h-5 w-5" />
                      <span className="ml-2">Profile</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center py-2 text-base font-medium text-neutral-700"
                    >
                      <Settings className="h-5 w-5" />
                      <span className="ml-2">Settings</span>
                    </Link>
                    <button
                      className="flex items-center py-2 text-base font-medium text-neutral-700 w-full"
                    >
                      <LogOut className="h-5 w-5" />
                      <span className="ml-2">Log Out</span>
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link to="/login">
                      <Button variant="outline" fullWidth>
                        Log In
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button fullWidth>
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;