import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import OfferCard from '../components/OfferCard';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, Star } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const Home = ({ onOpenBookingModal }) => {
  return (
    <div className="animate-fade-in bg-espresso-950 text-stone-200">
      
      {/* 1. AUTO-SLIDING HERO SECTION */}
      <HeroSlider />

      {/* 2. WHAT WE OFFER / SERVICES SECTION */}
      <section className="py-20 sm:py-28 bg-espresso-900 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 block mb-2">
                / WHAT WE OFFER
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Our Premium <br />
                <span className="italic font-normal text-gold-400">Spa Services</span>
              </h2>
            </div>
            
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-espresso-950 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-gold-400 hover:text-espresso-950 transition-all self-start md:self-auto"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_CONFIG.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 3. SPECIAL OFFERS SECTION */}
      <section className="py-20 sm:py-28 bg-espresso-950 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              SPECIAL PROMOTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Limited-Time <span className="italic font-normal text-gold-400">Spa Offers</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-light">
              Discover our carefully selected spa offers and enjoy a premium wellness experience at exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SITE_CONFIG.offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. ABOUT STORY INTRO */}
      <section className="py-20 sm:py-28 bg-espresso-900 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
                  alt="OM Luxury Spa Ambience"
                  className="w-full h-[450px] object-cover filter brightness-90"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
                / ABOUT {SITE_CONFIG.businessName}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                A Different Way to <br />
                <span className="italic font-normal text-gold-400">Unwind</span>
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                At {SITE_CONFIG.businessName} in {SITE_CONFIG.city}, we believe wellness is not simply about taking time away from everyday life. It is about creating meaningful moments where your body can relax, your mind can slow down and you can reconnect with yourself.
              </p>
              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Every detail of the experience is thoughtfully considered—from the quiet atmosphere and ambient aromatherapy to the care provided by our certified therapists.
              </p>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-espresso-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:brightness-110 transition-all"
                >
                  <span>Learn Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. GUEST REVIEWS */}
      <section className="py-20 sm:py-28 bg-espresso-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              GUEST FEEDBACK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Stories of <span className="italic font-normal text-gold-400">Relaxation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.testimonials.map((t) => (
              <div key={t.id} className="bg-espresso-900 border border-stone-800 rounded-2xl p-8 space-y-4 shadow-lg">
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="font-serif italic text-stone-300 text-sm leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">{t.author}</span>
                  <span className="text-stone-500">{t.role}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
