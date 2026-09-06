import React from 'react';
import OfferCard from '../components/OfferCard';
import { SITE_CONFIG } from '../config/siteConfig';
import { Tag, Phone, MessageCircle } from 'lucide-react';
import { openWhatsApp, getPhoneLink } from '../utils/whatsapp';

const OffersPage = () => {
  return (
    <div className="pt-28 pb-20 animate-fade-in bg-espresso-950 min-h-screen text-stone-200">
      
      {/* Header */}
      <section className="bg-espresso-900 text-white py-16 px-4 text-center border-b border-stone-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold flex items-center justify-center gap-1.5">
            <Tag className="w-3.5 h-3.5" />
            SPECIAL PROMOTIONS & DEALS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            Exclusive Spa Offers
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Enjoy premium wellness treatments and massages at exclusive promotional value in {SITE_CONFIG.city}.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SITE_CONFIG.offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Claim Call Banner */}
        <div className="bg-espresso-900 rounded-3xl p-8 sm:p-12 border border-gold-400/30 text-center space-y-4 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Looking for Today's Unlisted Deals or Group Booking Discounts?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto font-light">
            Contact our front desk directly to inquire about daily walk-in specials and customized couple packages.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getPhoneLink()}
              className="w-full sm:w-auto px-8 py-3.5 bg-gold-400 text-espresso-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-espresso-950" />
              Call Desk
            </a>
            <button
              onClick={() => openWhatsApp("Hi, I am interested in today's special unlisted spa offers.")}
              className="w-full sm:w-auto px-8 py-3.5 bg-whatsapp text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              WhatsApp Specials
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OffersPage;
