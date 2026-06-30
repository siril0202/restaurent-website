import { ArrowDown, Flame, CalendarRange, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export default function Hero({ onExploreMenu, onReserveTable }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-burgundy-950"
    >
      {/* Background Image Container with Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=90"
          alt="Velvet Flame Luxury Ambience"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover animate-slow-pan select-none pointer-events-none opacity-45"
        />
        {/* Multilayered Gradients for Cinematic Richness */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-burgundy-950/40 to-burgundy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-burgundy-950/90" />
      </div>

      {/* Floating Sparkles / Embers */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-gold-400/30 blur-xs animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-[60%] left-[25%] w-1 h-1 rounded-full bg-gold-300/40 blur-xs animate-pulse" style={{ animationDuration: '5s' }}></div>
        <div className="absolute top-[30%] right-[20%] w-2 h-2 rounded-full bg-gold-500/20 blur-xs animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-[75%] right-[15%] w-1.5 h-1.5 rounded-full bg-gold-400/30 blur-xs animate-pulse" style={{ animationDuration: '3s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        {/* Luxury Monogram */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-gold-400"></div>
          <div className="mx-4 p-2.5 rounded-full border border-gold-500/30 bg-burgundy-900/80 flex items-center justify-center">
            <Flame className="w-5 h-5 text-gold-400 animate-pulse" />
          </div>
          <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-gold-400"></div>
        </div>

        {/* Brand Name Pre-header */}
        <p className="font-display text-xs md:text-sm text-gold-400 tracking-[0.4em] uppercase mb-4">
          CÉLESTE GASTRONOMY IN TAMIL NADU
        </p>

        {/* Master Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-light tracking-tight text-white leading-[1.1] mb-8 max-w-4xl mx-auto uppercase">
          Where Every <br />
          <span className="italic text-gold-400 lowercase font-normal">meal</span> Becomes <br />
          A Memory
        </h1>

        {/* Story Subtext */}
        <p className="font-sans text-xs md:text-sm text-gray-400 max-w-md mx-auto leading-relaxed mb-10 tracking-wide">
          Experience the intersection of ancient Madurai heritage and modern culinary artistry. A Michelin-inspired journey through the flavors of the Temple City, refined for the global palate.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onReserveTable}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-burgundy-800 border border-gold-400 text-gold-400 px-8 py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gold-400 hover:text-burgundy-800 transition-colors duration-300 cursor-pointer"
          >
            <CalendarRange className="w-4 h-4" />
            <span>Reserve A Table</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 border border-white/20 text-white px-8 py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore Menu</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={onExploreMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-gold-400/60 hover:text-gold-400 transition-colors duration-300 cursor-pointer focus:outline-none group"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] mb-2 text-gold-400/45 group-hover:text-gold-400/75 transition-colors duration-300">
          Scroll Down
        </span>
        <div className="p-1 rounded-full border border-gold-400/20 group-hover:border-gold-400/50 transition-all duration-300 animate-bounce">
          <ArrowDown className="w-4 h-4" />
        </div>
      </button>

      {/* Decorative luxury corners */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-gold-500/10 pointer-events-none hidden md:block" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-gold-500/10 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-gold-500/10 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-gold-500/10 pointer-events-none hidden md:block" />
    </section>
  );
}
