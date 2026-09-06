import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const LightboxModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  if (currentIndex === null || currentIndex < 0 || !images || !images.length) return null;

  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-espresso-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 text-white">
        <div className="text-xs uppercase tracking-widest text-gold-400 font-serif">
          {currentImage.title} • ({currentIndex + 1} of {images.length})
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-espresso-900 hover:bg-gold-500 hover:text-espresso-950 text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <button
        onClick={onPrev}
        className="absolute left-4 z-10 p-3 rounded-full bg-espresso-900 hover:bg-gold-500 hover:text-espresso-950 text-white transition-colors"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="max-w-5xl max-h-[85vh] p-2 flex flex-col items-center justify-center">
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-stone-800"
        />
        <div className="mt-4 text-center">
          <p className="font-serif text-xl text-white tracking-wide">{currentImage.title}</p>
          <span className="text-xs uppercase tracking-widest text-gold-400 font-light">
            {currentImage.category}
          </span>
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 z-10 p-3 rounded-full bg-espresso-900 hover:bg-gold-500 hover:text-espresso-950 text-white transition-colors"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LightboxModal;
