import { DISHES } from '../data';
import { Star, Flame, Sparkles } from 'lucide-react';

export default function SignatureDishes() {
  const signatures = DISHES.filter((d) => d.isSignature);

  return (
    <section id="signatures" className="py-24 bg-gradient-to-b from-burgundy-900 to-burgundy-950 relative overflow-hidden border-t border-gold-500/10">
      {/* Absolute floating golden accents */}
      <div className="absolute top-1/4 left-5 w-48 h-48 bg-gold-500/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-48 h-48 bg-burgundy-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase mb-3">CHEF\'S MAGNUM OPUS</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-gold-100 tracking-tight">
              The Signature <span className="italic text-gold-400 font-normal">Vault</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-gold-100/60 max-w-lg font-light leading-relaxed mt-3">
              Indulge in our globally recognized culinary masterpieces—crafted with precision, plated with theatrical art, and filled with deep heritage flavors.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-2 text-gold-300">
            <span className="w-10 h-[1px] bg-gold-500/35"></span>
            <span className="font-sans text-xs uppercase tracking-widest">Selected Masterworks</span>
          </div>
        </div>

        {/* Signature Dishes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {signatures.map((dish, index) => (
            <div
              key={dish.id}
              className={`flex flex-col md:flex-row bg-burgundy-950/80 border border-gold-500/10 rounded-xs overflow-hidden shadow-2xl transition-all duration-500 hover:border-gold-500/30 group ${
                index % 2 === 1 ? 'md:translate-y-8' : ''
              }`}
            >
              {/* Picture Side */}
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden border-b md:border-b-0 md:border-r border-gold-500/10">
                <img
                  src={dish.image}
                  alt={dish.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-burgundy-950/20 to-transparent opacity-60" />

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-burgundy-950/90 border border-gold-500/30 px-3 py-1.5 rounded-xs flex items-center space-x-1 backdrop-blur-xs">
                  <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  <span className="font-sans text-[10px] font-semibold tracking-wider text-gold-100">5.0 RATING</span>
                </div>
              </div>

              {/* Text Side */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-3.5 h-3.5 text-gold-400" />
                    <span className="font-display text-[9px] uppercase tracking-[0.25em] text-gold-400 font-medium">Signature Selection</span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-bold text-gold-100 group-hover:text-gold-300 transition-colors duration-300">
                    {dish.name}
                  </h3>

                  <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                    {dish.description}
                  </p>

                  {dish.notes && (
                    <div className="bg-burgundy-900/30 p-3 rounded-xs border border-gold-500/5 flex items-start space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-[10px] text-gold-300/80 italic leading-snug">{dish.notes}</span>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-gold-500/10 mt-6 flex items-center justify-between">
                  <span className="font-sans text-sm font-semibold text-gold-400">
                    ₹{dish.price.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => {
                      const target = document.getElementById('reservation');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-sans text-[10px] uppercase tracking-widest text-gold-300 group-hover:text-gold-200 hover:underline cursor-pointer flex items-center space-x-1"
                  >
                    <span>Reserve & Dine</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic visual offset adjustments spacing footer */}
        <div className="h-12 hidden lg:block" />
      </div>
    </section>
  );
}
