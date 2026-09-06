import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { openWhatsApp, getPhoneLink } from '../utils/whatsapp';

const MobileStickyBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-espresso-950/95 backdrop-blur-md border-t border-espresso-800 p-2.5 shadow-2xl animate-fade-in">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        <a
          href={getPhoneLink()}
          className="w-full py-2.5 px-3 bg-gold-400 text-espresso-950 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 active:bg-gold-500 transition-colors shadow-md"
        >
          <Phone className="w-4 h-4 fill-espresso-950" />
          <span>Call Now</span>
        </a>

        <button
          onClick={() => openWhatsApp()}
          className="w-full py-2.5 px-3 bg-whatsapp text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 active:bg-emerald-600 transition-colors shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp</span>
        </button>

      </div>
    </div>
  );
};

export default MobileStickyBar;
