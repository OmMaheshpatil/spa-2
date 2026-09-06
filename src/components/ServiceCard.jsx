import React from 'react';
import { Phone, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { openWhatsApp, getPhoneLink } from '../utils/whatsapp';

const ServiceCard = ({ service }) => {
  const { name, duration, price, description, image, popular } = service;

  const handleWhatsApp = () => {
    openWhatsApp(`Hello ${SITE_CONFIG.businessName}, I am interested in ${name} (${duration}). Please share available timings.`);
  };

  return (
    <article className="group bg-espresso-900 border border-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gold-500/50 transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-1">
      <div>
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-espresso-950">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-transparent to-transparent opacity-90" />
          
          {/* Popular Tag */}
          {popular && (
            <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-gold-500 text-espresso-950 font-bold text-[10px] uppercase tracking-widest rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              POPULAR
            </div>
          )}

          {/* Duration Badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] font-medium text-stone-200 bg-espresso-950/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
            <Clock className="w-3 h-3 text-gold-400" />
            <span>{duration}</span>
          </div>

          {/* Price */}
          <div className="absolute bottom-3 right-3 font-serif text-xl font-normal text-gold-300">
            {SITE_CONFIG.currencySymbol}{price.toLocaleString()}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-2">
          <h3 className="font-serif text-xl font-normal text-white tracking-wide group-hover:text-gold-400 transition-colors">
            {name}
          </h3>
          <p className="text-xs text-stone-400 leading-relaxed font-light line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Direct Action Buttons (50/50 Split - Inspired by reference site) */}
      <div className="p-4 pt-0 grid grid-cols-2 gap-2">
        
        {/* Call Button */}
        <a
          href={getPhoneLink()}
          className="py-2.5 px-3 bg-gold-400 hover:bg-gold-500 text-espresso-950 text-[11px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          aria-label={`Call for ${name}`}
        >
          <Phone className="w-3.5 h-3.5 fill-espresso-950" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="py-2.5 px-3 bg-whatsapp hover:bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          aria-label={`WhatsApp about ${name}`}
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
          <span>WhatsApp</span>
        </button>

      </div>
    </article>
  );
};

export default ServiceCard;
