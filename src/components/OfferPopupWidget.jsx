import React, { useState } from 'react';
import { X, Gift } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { openWhatsApp } from '../utils/whatsapp';

const OfferPopupWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const offer = SITE_CONFIG.offerWidget;

  if (!isOpen) return null;

  const handleClaim = () => {
    openWhatsApp(offer.whatsappMessage);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-xs w-full animate-fade-in">
      <div className="glass-widget rounded-2xl p-4 shadow-2xl text-white relative border border-gold-400/30">
        
        {/* Dismiss X */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-stone-400 hover:text-white p-1 rounded-full hover:bg-espresso-800 transition-colors"
          aria-label="Close offer widget"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Agent Info Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
              alt={offer.agentName}
              className="w-10 h-10 rounded-full object-cover border border-gold-400/40"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-espresso-950" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
              <span>Hi, I'm {offer.agentName}</span>
              <span>👋</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-medium block">
              {offer.agentStatus}
            </span>
          </div>
        </div>

        {/* Offer Box Content */}
        <div className="bg-espresso-900/90 rounded-xl p-3.5 border border-stone-800 mb-3 space-y-1">
          <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block">
            {offer.badge}
          </span>
          <h4 className="font-serif text-xl font-normal text-white tracking-wide">
            {offer.title}
          </h4>
          <p className="text-[11px] text-stone-300 font-light">
            {offer.subtitle}
          </p>
        </div>

        {/* Claim Button */}
        <button
          onClick={handleClaim}
          className="w-full py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:brightness-110 text-espresso-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <Gift className="w-4 h-4 text-espresso-950" />
          <span>{offer.buttonText}</span>
        </button>

        <p className="text-[9px] text-stone-400 text-center mt-2 tracking-wide">
          No advance payment required • Instant WhatsApp confirmation
        </p>

      </div>
    </div>
  );
};

export default OfferPopupWidget;
