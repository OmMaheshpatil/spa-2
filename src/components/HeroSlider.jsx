import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { openWhatsApp, getPhoneLink } from '../utils/whatsapp';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = SITE_CONFIG.heroSlides;

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between bg-espresso-950 text-white overflow-hidden pt-20">
      
      {/* Background Images with smooth fade transition */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.titlePrefix}
            className="w-full h-full object-cover object-center filter brightness-45 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/50 to-espresso-950/70" />
        </div>
      ))}

      {/* Slide Navigation Manual Arrows */}
      <button
        onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-espresso-900/60 hover:bg-gold-500 hover:text-espresso-950 text-white border border-gold-500/30 hidden md:flex items-center justify-center transition-all"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-espresso-900/60 hover:bg-gold-500 hover:text-espresso-950 text-white border border-gold-500/30 hidden md:flex items-center justify-center transition-all"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Main Central Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-16 sm:py-24 text-left">
        <div className="max-w-3xl space-y-6 animate-slide-up">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-espresso-900/80 border border-gold-400/40 text-[11px] uppercase tracking-[0.25em] text-gold-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>{SITE_CONFIG.locationBadge}</span>
          </div>

          {/* Changing Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-wide text-white leading-[1.1] transition-all">
            {activeSlide.titlePrefix}{' '}
            <span className="font-normal text-gold-400 italic underline decoration-gold-400/40 decoration-wavy">
              {activeSlide.titleHighlight}
            </span>
          </h1>

          {/* Changing Description */}
          <p className="text-sm sm:text-base md:text-lg text-stone-300 font-light leading-relaxed max-w-2xl tracking-wide">
            {activeSlide.description}
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            
            {/* Call Now Button */}
            <a
              href={getPhoneLink()}
              className="px-7 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-bold text-xs uppercase tracking-[0.18em] rounded-full shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2.5 min-w-[150px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>

            {/* WhatsApp Button */}
            <button
              onClick={() => openWhatsApp()}
              className="px-7 py-3.5 bg-whatsapp hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.18em] rounded-full shadow-xl transition-all flex items-center justify-center gap-2.5 min-w-[150px]"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp</span>
            </button>

            {/* Explore Treatments button */}
            <Link
              to="/services"
              className="px-6 py-3.5 bg-espresso-900/80 hover:bg-espresso-900 border border-stone-700 text-stone-300 hover:text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-full transition-colors hidden sm:inline-flex items-center gap-1.5"
            >
              <span>{activeSlide.ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

          </div>

        </div>
      </div>

      {/* Bottom Area: Indicators & Stats Counter */}
      <div className="relative z-10 bg-espresso-950/80 backdrop-blur-md border-t border-espresso-800/80 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Trust Stats Bar */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center md:text-left">
            {SITE_CONFIG.heroStats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-gold-400 block">
                  {stat.number}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-10 bg-gold-400' : 'w-3 bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSlider;
