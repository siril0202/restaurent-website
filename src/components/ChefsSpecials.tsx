import { DISHES } from '../data';
import { Flame, Clock, Sparkles, Utensils } from 'lucide-react';

export default function ChefsSpecials() {
  const specials = DISHES.filter((d) => d.isChefSpecial);

  // Preparation metadata to enrich the gourmet feel
  const preparationMeta = [
    { time: '36 Hours', fire: 'Applewood Slow-Embers', intensity: 'Bold' },
    { time: '45 Mins', fire: 'Thermal Butter Bath', intensity: 'Delicate' },
    { time: '3 Hours', fire: 'Sub-Zero Jasmine Infusion', intensity: 'Floral Elegance' },
  ];

  return (
    <section id="specials" className="py-24 bg-burgundy-950 relative overflow-hidden border-t border-gold-500/10">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#C5A880_1px,transparent_1px),linear-gradient(to_bottom,#C5A880_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase mb-3">SEASONAL RARITIES</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-gold-100 tracking-tight">
            Chef\'s Seasonal <span className="italic text-gold-400 font-normal">Specials</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-gold-100/60 max-w-xl mx-auto font-light leading-relaxed mt-4">
            Highly limited creations utilizing premium seasonal harvests, exotic imported ingredients, and elaborate culinary rituals.
          </p>
          <div className="mt-4 flex justify-center items-center">
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
            <div className="mx-3 text-gold-400 text-xs">◆</div>
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
          </div>
        </div>

        {/* Specials Spotlight Layout */}
        <div className="space-y-16 lg:space-y-24">
          {specials.map((dish, index) => {
            const meta = preparationMeta[index] || { time: 'Custom', fire: 'Bespoke Fire', intensity: 'Sophisticated' };
            const isEven = index % 2 === 0;

            return (
              <div
                key={dish.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Visual Frame */}
                <div className={`lg:col-span-6 relative group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Outer Frame Border */}
                  <div className="absolute -inset-2 border border-gold-500/10 rounded-xs group-hover:border-gold-500/30 transition-all duration-500 pointer-events-none" />

                  {/* Main Image container */}
                  <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xs border border-gold-500/20 shadow-2xl">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent opacity-40" />

                    {/* Left overlay badge for preparation */}
                    <div className="absolute bottom-4 left-4 bg-burgundy-950/90 border border-gold-500/30 px-4 py-2 rounded-xs flex items-center space-x-2 backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <span className="font-sans text-[10px] tracking-widest text-gold-100 uppercase font-medium">PREP TIME: {meta.time}</span>
                    </div>
                  </div>
                </div>

                {/* Gastronomy descriptions */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center space-x-2">
                    <Flame className="w-4 h-4 text-gold-400" />
                    <span className="font-display text-[10px] tracking-[0.3em] text-gold-400 uppercase font-medium">Featured Special</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold-100 leading-tight">
                    {dish.name}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                    {dish.description}
                  </p>

                  {/* Micro culinary stats */}
                  <div className="grid grid-cols-3 gap-4 border-y border-gold-500/10 py-5 my-4">
                    <div>
                      <p className="font-sans text-[10px] text-gold-400/60 uppercase tracking-widest mb-1">Slow Fire</p>
                      <p className="font-serif text-xs md:text-sm text-gold-200 font-medium truncate">{meta.fire}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] text-gold-400/60 uppercase tracking-widest mb-1">Palate Profile</p>
                      <p className="font-serif text-xs md:text-sm text-gold-200 font-medium truncate">{meta.intensity}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] text-gold-400/60 uppercase tracking-widest mb-1">Experience</p>
                      <p className="font-serif text-xs md:text-sm text-gold-200 font-medium truncate">Tableside Ceremony</p>
                    </div>
                  </div>

                  {/* Chef Tasting note */}
                  <div className="bg-burgundy-900/20 border border-gold-500/10 p-4 rounded-xs text-xs text-gold-200/90 italic font-sans flex items-start space-x-2.5 shadow-md">
                    <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>&ldquo;{dish.notes || 'Curated to capture the ultimate seasonal balance of savory heat and velvety sweet notes.'}&rdquo;</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-serif text-lg font-bold text-gold-400">
                      ₹{dish.price.toLocaleString('en-IN')}
                    </span>
                    <button
                      onClick={() => {
                        const target = document.getElementById('reservation');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-burgundy-800 hover:bg-burgundy-700 text-gold-200 hover:text-gold-100 border border-gold-500/20 hover:border-gold-500/40 font-sans text-[10px] uppercase tracking-widest px-6 py-3 rounded-xs transition-all duration-300 shadow-md cursor-pointer"
                    >
                      Reserve Spot
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
