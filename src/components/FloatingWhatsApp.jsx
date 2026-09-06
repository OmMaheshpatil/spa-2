import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2 px-3.5 py-2 bg-espresso-900 text-white text-xs font-medium rounded-xl shadow-2xl border border-gold-400/30 flex items-center gap-2 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Book on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <button
        onClick={() => openWhatsApp()}
        className="w-14 h-14 bg-whatsapp hover:bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2 border-white/20 animate-pulse-subtle"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
