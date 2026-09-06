import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { openWhatsApp, getPhoneLink } from '../utils/whatsapp';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'MASSAGES', 'THERAPIES', 'HYDROTHERAPY', 'PACKAGES'];

  const filteredServices = SITE_CONFIG.services.filter((svc) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'MASSAGES') return svc.category === 'Massages';
    if (activeCategory === 'THERAPIES') return svc.category === 'Therapies';
    if (activeCategory === 'HYDROTHERAPY') return svc.category === 'Hydrotherapy';
    if (activeCategory === 'PACKAGES') return svc.category === 'Packages';
    return true;
  });

  return (
    <div className="pt-28 pb-20 animate-fade-in bg-espresso-950 min-h-screen text-stone-200">
      
      {/* Header */}
      <section className="bg-espresso-900 text-white py-16 px-4 text-center border-b border-stone-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            FULL SERVICE MENU
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            Signature Spa Services
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Explore our comprehensive range of body massages, facial skincare, Jacuzzi therapy, and couples relaxation sessions.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-full transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-gold-400 text-espresso-950 font-bold shadow-md'
                  : 'bg-espresso-900 text-stone-300 border border-stone-800 hover:border-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Custom Booking Prompt Banner */}
        <div className="mt-16 bg-espresso-900 rounded-3xl p-8 sm:p-12 border border-gold-400/30 text-center space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Need Help Choosing the Right Massage Treatment?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light">
            Our concierge team is available to guide you based on your body tension and preferences.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getPhoneLink()}
              className="w-full sm:w-auto px-8 py-3.5 bg-gold-400 text-espresso-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:brightness-110 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-espresso-950" />
              Call Desk Now
            </a>
            <button
              onClick={() => openWhatsApp()}
              className="w-full sm:w-auto px-8 py-3.5 bg-whatsapp text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:bg-emerald-500 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              WhatsApp Consultation
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ServicesPage;
