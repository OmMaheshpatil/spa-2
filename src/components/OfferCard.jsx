import React from 'react';
import { Phone, MessageCircle, Tag } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { openWhatsApp, getPhoneLink } from '../utils/whatsapp';

const OfferCard = ({ offer }) => {
  const { title, badge, discount, description, originalPrice, offerPrice, image } = offer;

  const handleWhatsAppOffer = () => {
    openWhatsApp(`Hello ${SITE_CONFIG.businessName}, I am interested in the special offer "${title}" for ${SITE_CONFIG.currencySymbol}${offerPrice}. Please let me know today's slots.`);
  };

  return (
    <article className="bg-espresso-900 border-2 border-gold-400/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between relative transform hover:-translate-y-1 transition-all duration-500">
      
      {/* Discount Badge */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gold-400 text-espresso-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
        <Tag className="w-3.5 h-3.5" />
        {discount}
      </div>

      {badge && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-espresso-950/80 backdrop-blur-sm text-gold-300 text-[10px] uppercase tracking-widest rounded-full border border-gold-400/30">
          {badge}
        </div>
      )}

      <div>
        {/* Banner Image */}
        <div className="relative h-60 overflow-hidden bg-espresso-950">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover filter brightness-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-transparent to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="font-serif text-2xl text-white font-light tracking-wide">
            {title}
          </h3>
          <p className="text-xs text-stone-300 font-light leading-relaxed">
            {description}
          </p>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-3 pt-2">
            <span className="font-serif text-3xl font-normal text-gold-400">
              {SITE_CONFIG.currencySymbol}{offerPrice.toLocaleString()}
            </span>
            <span className="text-sm text-stone-500 line-through">
              {SITE_CONFIG.currencySymbol}{originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Dual CTA Buttons */}
      <div className="p-6 pt-0 grid grid-cols-2 gap-3">
        <a
          href={getPhoneLink()}
          className="py-3 px-4 bg-gold-400 hover:bg-gold-500 text-espresso-950 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
        >
          <Phone className="w-4 h-4 fill-espresso-950" />
          <span>Call Now</span>
        </a>

        <button
          onClick={handleWhatsAppOffer}
          className="py-3 px-4 bg-whatsapp hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp</span>
        </button>
      </div>

    </article>
  );
};

export default OfferCard;
