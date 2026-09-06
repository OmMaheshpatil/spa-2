import React, { useState } from 'react';
import LightboxModal from '../components/LightboxModal';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, Maximize2 } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['ALL', 'SPA INTERIORS', 'TREATMENTS', 'WELLNESS', 'AMBIENCE'];

  const filteredImages = SITE_CONFIG.gallery.filter((item) => {
    if (selectedCategory === 'ALL') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-20 animate-fade-in bg-espresso-950 min-h-screen text-stone-200">
      
      {/* Header */}
      <section className="bg-espresso-900 text-white py-16 px-4 text-center border-b border-stone-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            VISUAL PORTFOLIO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide">
            Sanctuary Gallery
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Explore the calm atmosphere, thoughtful details and relaxing spaces created to make every visit special.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] rounded-full transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-gold-400 text-espresso-950 font-bold shadow-md'
                  : 'bg-espresso-900 text-stone-300 border border-stone-800 hover:border-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-espresso-900 h-80 shadow-md cursor-pointer border border-stone-800 hover:border-gold-400 transition-all duration-500 transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter brightness-90"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 right-4 p-2 rounded-full bg-espresso-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-400" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 space-y-1 text-white">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-light tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() => setLightboxIndex((lightboxIndex + 1) % filteredImages.length)}
        onPrev={() => setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)}
      />

    </div>
  );
};

export default GalleryPage;
