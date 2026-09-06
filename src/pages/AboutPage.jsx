import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, Heart, Shield, Award, Feather, Phone, MessageCircle } from 'lucide-react';
import { openWhatsApp, getPhoneLink } from '../utils/whatsapp';

const AboutPage = () => {
  return (
    <div className="pt-28 pb-20 animate-fade-in bg-espresso-950 min-h-screen text-stone-200">
      
      {/* Header */}
      <section className="bg-espresso-900 text-white py-16 px-4 text-center border-b border-stone-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            OUR STORY & PHILOSOPHY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            A Sanctuary for Stillness
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            {SITE_CONFIG.businessName} was created with a clear purpose: to offer a tranquil escape where modern physical tension yields to complete body renewal.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              OUR APPROACH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-light leading-tight">
              Designed around the art of feeling well.
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              At {SITE_CONFIG.businessName} in {SITE_CONFIG.city}, we believe wellness is not simply about taking time away from everyday life. It is about creating meaningful moments where your body can relax, your mind can slow down and you can reconnect with yourself.
            </p>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
              Our location near {SITE_CONFIG.address} makes our spa a convenient choice for guests seeking high-end massage therapy, facial skincare, and Jacuzzi relaxation.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
                alt="Spa Interior"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              OUR STANDARDS
            </span>
            <h2 className="font-serif text-3xl text-white">The 4 Pillars of Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-espresso-900 p-6 rounded-2xl border border-stone-800 space-y-3">
              <Feather className="w-8 h-8 text-gold-400" />
              <h3 className="font-serif text-xl text-white">Mindful Ambiance</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Quiet acoustic suites, ambient lighting, and organic aromatherapy to calm your nervous system.
              </p>
            </div>

            <div className="bg-espresso-900 p-6 rounded-2xl border border-stone-800 space-y-3">
              <Heart className="w-8 h-8 text-gold-400" />
              <h3 className="font-serif text-xl text-white">Pure Botanicals</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                100% organic cold-pressed massage oils, essential extracts, and dermatologically tested facials.
              </p>
            </div>

            <div className="bg-espresso-900 p-6 rounded-2xl border border-stone-800 space-y-3">
              <Shield className="w-8 h-8 text-gold-400" />
              <h3 className="font-serif text-xl text-white">Hygiene Commitment</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Single-use plush linens, sanitized treatment suites, and hospital-grade sterilization protocol.
              </p>
            </div>

            <div className="bg-espresso-900 p-6 rounded-2xl border border-stone-800 space-y-3">
              <Award className="w-8 h-8 text-gold-400" />
              <h3 className="font-serif text-xl text-white">Expert Practitioners</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Certified spa therapists trained to adapt pressure and technique to your individual body needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-espresso-900 text-center rounded-3xl p-8 sm:p-12 border border-gold-400/30 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">Experience Stillness Today</h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto font-light">
            Contact our desk via phone or WhatsApp to reserve your treatment slot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getPhoneLink()}
              className="w-full sm:w-auto px-8 py-3.5 bg-gold-400 text-espresso-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-espresso-950" />
              Call Us Direct
            </a>
            <button
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto px-8 py-3.5 bg-whatsapp text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              WhatsApp Booking
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AboutPage;
