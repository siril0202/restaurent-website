import { useState } from 'react';
import { DISHES } from '../data';
import { Dish } from '../types';
import { Flame, Star, Sparkles, X, Info } from 'lucide-react';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<'starter' | 'main' | 'dessert' | 'beverage'>('starter');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const categories = [
    { key: 'starter', label: 'Elegantes Starters' },
    { key: 'main', label: 'Signature Mains' },
    { key: 'dessert', label: 'Decadent Desserts' },
    { key: 'beverage', label: 'Artisanal Nectars' },
  ];

  const filteredDishes = DISHES.filter((d) => d.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-burgundy-950 relative overflow-hidden">
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-burgundy-900/10 to-burgundy-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase mb-3">LA CARTE ROYAL</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-gold-100 tracking-tight">
            Our Culinary <span className="italic text-gold-400 font-normal">Masterpieces</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gold-100/60 max-w-xl mx-auto font-light leading-relaxed mt-4">
            Curated daily by Chef Vignesh Sundaram, uniting world-class European gastronomical standards with Southern India\'s finest spices.
          </p>
          <div className="mt-4 flex justify-center items-center">
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
            <div className="mx-3 text-gold-400 text-xs">◆</div>
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 border-b border-gold-500/10 pb-6 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`font-display text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-xs transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.key
                  ? 'bg-burgundy-800 text-gold-200 border-gold-400/60 shadow-[0_4px_15px_rgba(13,2,4,0.6)]'
                  : 'bg-burgundy-900/30 text-neutral-400 border-transparent hover:text-gold-200 hover:border-gold-500/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish)}
              className="group bg-burgundy-900/10 hover:bg-burgundy-900/20 border border-gold-500/5 hover:border-gold-500/20 p-5 md:p-6 rounded-xs flex items-center space-x-5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Dish Image */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden rounded-xs border border-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {dish.isSignature && (
                  <div className="absolute top-1 left-1 bg-gold-500 text-burgundy-950 p-1 rounded-xs shadow-md">
                    <Star className="w-3 h-3 fill-burgundy-950" />
                  </div>
                )}
              </div>

              {/* Dish Metadata */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between space-x-2">
                  <h3 className="font-serif text-base sm:text-lg font-medium text-gold-200 group-hover:text-gold-300 transition-colors duration-300 truncate">
                    {dish.name}
                  </h3>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-gold-400 flex-shrink-0 pt-0.5">
                    ₹{dish.price.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mt-1.5 mb-2.5">
                  {dish.isSignature && (
                    <span className="bg-gold-500/10 text-gold-400 border border-gold-500/20 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-xs font-semibold flex items-center space-x-1">
                      <Star className="w-2.5 h-2.5 fill-gold-400" />
                      <span>Signature</span>
                    </span>
                  )}
                  {dish.isChefSpecial && (
                    <span className="bg-burgundy-800/40 text-rose-300 border border-burgundy-700/60 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-xs font-semibold flex items-center space-x-1">
                      <Flame className="w-2.5 h-2.5" />
                      <span>Chef Special</span>
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs text-neutral-400/90 leading-relaxed font-light line-clamp-2 mb-2">
                  {dish.description}
                </p>

                <div className="flex items-center space-x-1.5 text-gold-500/40 group-hover:text-gold-500/70 transition-colors duration-300 text-[10px] uppercase tracking-widest font-sans">
                  <Info className="w-3 h-3" />
                  <span>Click to view gastronomy details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive notes footnote */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs text-gold-200/50 italic">
            * All culinary items are prepared mocktail-friendly, utilizing non-alcoholic distillation. 100% halal options available upon request.
          </p>
        </div>
      </div>

      {/* Gourmet Detail Modal (Lightbox / Popup) */}
      {selectedDish && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300">
          <div className="relative bg-burgundy-950 border border-gold-500/30 max-w-2xl w-full rounded-xs shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-10 p-2 text-gold-200 hover:text-gold-400 bg-black/40 hover:bg-black/80 rounded-full transition-colors duration-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-0">
              {/* Left Side: Large Image */}
              <div className="sm:col-span-5 h-56 sm:h-auto relative border-b sm:border-b-0 sm:border-r border-gold-500/15">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/70 to-transparent" />
              </div>

              {/* Right Side: Gourmet Details */}
              <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="font-display text-[10px] tracking-[0.3em] text-gold-400 uppercase">
                    Chef Vignesh\'s Culinary Vault
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-gold-100">{selectedDish.name}</h3>

                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gold-500 text-burgundy-950 text-[9px] uppercase tracking-widest font-sans font-bold px-2.5 py-1 rounded-xs">
                      ₹{selectedDish.price.toLocaleString('en-IN')}
                    </span>
                    {selectedDish.isSignature && (
                      <span className="bg-gold-500/10 text-gold-400 border border-gold-500/20 text-[9px] uppercase tracking-widest font-sans font-bold px-2.5 py-1 rounded-xs flex items-center space-x-1">
                        <Star className="w-2.5 h-2.5 fill-gold-400" />
                        <span>Signature Piece</span>
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                    {selectedDish.description}
                  </p>

                  {selectedDish.notes && (
                    <div className="bg-burgundy-900/30 border border-gold-500/10 p-3.5 rounded-xs text-[11px] text-gold-200/90 font-sans italic flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span>{selectedDish.notes}</span>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-gold-500/10 mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-neutral-400">Freshly crafted to order</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedDish(null);
                      const target = document.getElementById('reservation');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-sans text-[10px] uppercase tracking-widest text-gold-400 hover:text-gold-200 font-bold flex items-center space-x-1 cursor-pointer transition-colors duration-300"
                  >
                    <span>Reserve Dining Experience</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
