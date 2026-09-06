import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { openWhatsApp } from '../utils/whatsapp';

const Navbar = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-espresso-950/95 backdrop-blur-md border-b border-gold-500/20 py-3.5 shadow-2xl text-white'
            : 'bg-gradient-to-b from-espresso-950/90 via-espresso-950/50 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-gold-400/40 flex items-center justify-center bg-espresso-900 group-hover:border-gold-400 transition-colors">
              <Sparkles className="w-4 h-4 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl tracking-[0.2em] font-light text-white group-hover:text-gold-400 transition-colors">
                {SITE_CONFIG.businessName}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 -mt-0.5 hidden sm:block">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-[0.18em] transition-colors relative py-1 ${
                    isActive ? 'text-gold-400 font-semibold' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-400 animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBookingModal || (() => openWhatsApp())}
              className="px-5 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 text-espresso-950 text-xs font-bold uppercase tracking-[0.18em] rounded-full hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-gold-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-espresso-950/98 backdrop-blur-xl animate-fade-in text-white">
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-800">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-serif text-lg tracking-widest text-white">
                {SITE_CONFIG.businessName}
              </span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-stone-400">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg uppercase tracking-[0.2em] font-serif transition-colors ${
                    isActive ? 'text-gold-400 font-semibold border-l-2 border-gold-400 pl-3' : 'text-stone-300'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-6 border-t border-stone-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookingModal) onOpenBookingModal();
                  else openWhatsApp();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-[0.2em] rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                <span>Book Appointment Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-stone-400">
                {SITE_CONFIG.phone} • {SITE_CONFIG.city}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
