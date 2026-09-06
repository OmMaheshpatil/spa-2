import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { openWhatsApp } from '../utils/whatsapp';

const Footer = () => {
  return (
    <footer className="bg-espresso-950 text-stone-300 pt-16 pb-24 md:pb-12 border-t border-espresso-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gold-400/40 flex items-center justify-center bg-espresso-900">
                <Sparkles className="w-4 h-4 text-gold-400" />
              </div>
              <span className="font-serif text-lg tracking-[0.2em] font-light text-white">
                {SITE_CONFIG.businessName}
              </span>
            </div>
            <p className="text-xs italic text-gold-300 font-serif tracking-widest">
              "{SITE_CONFIG.tagline}"
            </p>
            <p className="text-xs text-stone-400 leading-relaxed pt-2">
              A serene spa sanctuary in {SITE_CONFIG.city} dedicated to body wellness, deep tissue relaxation, and rejuvenating facial treatments.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6 border-b border-espresso-800 pb-2 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/" className="text-stone-400 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-gold-400 transition-colors">
                  About Our Spa
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-stone-400 hover:text-gold-400 transition-colors">
                  Massage & Services
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-stone-400 hover:text-gold-400 transition-colors">
                  Special Spa Offers
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-400 hover:text-gold-400 transition-colors">
                  Sanctuary Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-gold-400 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Booking */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6 border-b border-espresso-800 pb-2 inline-block">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-xs text-stone-400 mb-6">
              {SITE_CONFIG.openingHours.map((schedule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-white font-medium">{schedule.days}</span>
                    <span>{schedule.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openWhatsApp()}
              className="px-4 py-2 bg-espresso-900 border border-gold-400/40 text-gold-400 text-[11px] font-semibold uppercase tracking-[0.15em] rounded-full hover:bg-gold-400 hover:text-espresso-950 transition-colors inline-flex items-center gap-2"
            >
              WhatsApp Direct Chat
            </button>
          </div>

          {/* Column 4: Contact & Directions */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6 border-b border-espresso-800 pb-2 inline-block">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-xs text-stone-400 mb-6">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-gold-400">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-gold-400">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gold-400 hover:underline flex items-center gap-1 font-medium"
            >
              Get Directions on Google Maps &rarr;
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-stone-900 text-center md:flex md:justify-between md:items-center text-[11px] text-stone-500">
          <p>© 2026 {SITE_CONFIG.businessName}. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-stone-400">
            Crafted for Premium Spa & Wellness Businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
