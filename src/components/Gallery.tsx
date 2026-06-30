import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'dish' | 'chef' | 'wine'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    { key: 'all', label: 'All Chronicles' },
    { key: 'interior', label: 'Dining Hall' },
    { key: 'dish', label: 'Culinary Plating' },
    { key: 'chef', label: 'The Kitchen' },
    { key: 'wine', label: 'Royal Beverages' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_ITEMS.findIndex((x) => x.id === item.id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIndex = lightboxIndex === 0 ? GALLERY_ITEMS.length - 1 : lightboxIndex - 1;
      setLightboxIndex(prevIndex);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIndex = lightboxIndex === GALLERY_ITEMS.length - 1 ? 0 : lightboxIndex + 1;
      setLightboxIndex(nextIndex);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-burgundy-950 to-burgundy-900 overflow-hidden relative border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase mb-3">SENSORY CHRONICLES</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-gold-100 tracking-tight">
            Our Fine Dining <span className="italic text-gold-400 font-normal">Gallery</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gold-100/60 max-w-xl mx-auto font-light leading-relaxed mt-4">
            A visual documentation of Velvet Flame\'s bespoke dining chambers, gourmet ingredients, and artisanal cooking theater.
          </p>
          <div className="mt-4 flex justify-center items-center">
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
            <div className="mx-3 text-gold-400 text-xs">◆</div>
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`font-sans text-[10px] uppercase tracking-widest px-5 py-3 rounded-xs border transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gold-500 text-burgundy-950 border-gold-400 font-semibold shadow-md'
                  : 'bg-transparent text-neutral-400 border-gold-500/10 hover:text-gold-200 hover:border-gold-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative aspect-[4/3] rounded-xs overflow-hidden border border-gold-500/10 hover:border-gold-500/40 transition-all duration-500 cursor-pointer shadow-lg bg-burgundy-950"
            >
              <img
                src={item.url}
                alt={item.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
              />

              {/* Hover Dark Vignette & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Hover Content */}
              <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col space-y-2 z-10">
                <div className="flex items-center space-x-1.5 text-gold-400 text-[9px] uppercase tracking-widest font-semibold">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Click To Expand</span>
                </div>
                <p className="font-serif text-sm text-gold-100 font-medium leading-snug line-clamp-2">
                  {item.caption}
                </p>
              </div>

              {/* Luxury Accent corner icons */}
              <div className="absolute top-4 right-4 p-1.5 rounded-full bg-black/60 border border-gold-500/20 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Overlay Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-55 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-opacity duration-300 select-none"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-gold-100 hover:text-gold-400 bg-white/5 hover:bg-white/10 rounded-full transition-colors duration-300 z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox main box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center justify-center space-y-4"
          >
            <div className="relative w-full aspect-[4/3] max-h-[70vh] border border-gold-500/35 rounded-xs overflow-hidden bg-burgundy-950 shadow-2xl">
              <img
                src={GALLERY_ITEMS[lightboxIndex].url}
                alt={GALLERY_ITEMS[lightboxIndex].caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />

              {/* Left/Right Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/95 border border-gold-500/20 text-gold-300 hover:text-gold-100 rounded-full transition-colors duration-300 z-20 cursor-pointer focus:outline-none"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/95 border border-gold-500/20 text-gold-300 hover:text-gold-100 rounded-full transition-colors duration-300 z-20 cursor-pointer focus:outline-none"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption */}
            <div className="text-center max-w-2xl px-4 space-y-1.5">
              <p className="font-sans text-[10px] text-gold-400 tracking-[0.2em] uppercase font-bold">
                Image {lightboxIndex + 1} of {GALLERY_ITEMS.length} • Category: {GALLERY_ITEMS[lightboxIndex].category}
              </p>
              <p className="font-serif text-base text-gold-100 leading-relaxed font-medium">
                {GALLERY_ITEMS[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
