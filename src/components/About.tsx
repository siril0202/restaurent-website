import { Flame, Star, Sparkles, Award } from 'lucide-react';
import { CHEF_INFO } from '../data';

export default function About() {
  const PHILOSOPHIES = [
    {
      icon: <Award className="w-5 h-5 text-gold-400" />,
      title: 'Michelin Standards',
      description: 'Rigorous European culinary discipline, slow reductions, and precision temperature cooking in every plate.',
    },
    {
      icon: <Flame className="w-5 h-5 text-gold-400" />,
      title: 'The Fire & The Velvet',
      description: 'A sensory play of charcoal-fueled heat combined with velvet-smooth textures, rich emulsions, and deep glazes.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold-400" />,
      title: 'Madurai Heritage Sourcing',
      description: 'We source fresh organic Jasmine blossoms, Nilgiri game meat, Guntur chilis, and local organic honey daily.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-burgundy-950 to-burgundy-900 overflow-hidden relative">
      {/* Decorative side watermark */}
      <div className="absolute top-[10%] right-[-5%] text-gold-500/3 font-display text-[150px] uppercase tracking-widest pointer-events-none select-none rotate-90 origin-center hidden xl:block">
        TEMPLE OF FLAVORS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase mb-3">OUR ORIGIN</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-gold-100 tracking-tight">
            The Chronicle of <span className="italic text-gold-400 font-normal">Velvet Flame</span>
          </h2>
          <div className="mt-4 flex justify-center items-center">
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
            <div className="mx-3 text-gold-400 text-xs">◆</div>
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Overlapping Images (Left) */}
          <div className="lg:col-span-5 relative h-[450px] md:h-[500px]">
            {/* Main Background frame */}
            <div className="absolute top-0 left-0 w-[80%] h-[85%] border border-gold-500/20 rounded-xs overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Dining setting"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-25 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Front Overlapping frame */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[65%] border-2 border-burgundy-900 rounded-xs overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
                alt="Wine and candle atmosphere"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-700"
              />
            </div>
            {/* Gold Accenting line */}
            <div className="absolute -bottom-4 left-6 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
          </div>

          {/* Story Text (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl text-gold-200 tracking-tight">
              A Symphony of Imperial Spices & European Elegance
            </h3>
            <p className="font-sans text-neutral-300 text-sm md:text-base leading-relaxed font-light">
              Founded on the belief that fine dining is a sensory voyage, <strong>Velvet Flame</strong> draws inspiration from the legendary banquets of the ancient Pandyan Dynasty, who ruled Madurai as an empire of arts, pearls, and majestic culinary treasures.
            </p>
            <p className="font-sans text-neutral-300 text-sm md:text-base leading-relaxed font-light">
              We have woven these historic South Indian spices, premium coastal seafood, and aromatic mountain herbs into the precise structural canvas of classical French and European kitchen discipline. Our dishes are cooked on slow fires, capturing the deep warmth of woodsmoke while exhibiting the velvet-smooth textures of gourmet emulsions and reductions.
            </p>
            <p className="font-sans text-neutral-300 text-sm md:text-base leading-relaxed font-light">
              Every detail has been crafted with uncompromising obsession—from the hand-selected crystal glassware that captures the flickering of candle embers to the ambient background strings that echo the timeless spirit of historic Tamil Nadu.
            </p>

            <div className="pt-4 flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400/20" />
                <span className="font-sans text-xs uppercase tracking-widest text-gold-200">Michelin-Inspired Craft</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400/20" />
                <span className="font-sans text-xs uppercase tracking-widest text-gold-200">Local Madurai Sourcing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400/20" />
                <span className="font-sans text-xs uppercase tracking-widest text-gold-200">Sartorial Interior Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chef Spotlight Grid */}
        <div className="border-t border-gold-500/10 pt-20 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Chef Details (Left) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase">THE MAESTRO</p>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-gold-100">{CHEF_INFO.name}</h3>
            <p className="font-sans text-xs text-gold-300/80 uppercase tracking-widest font-semibold">{CHEF_INFO.title}</p>
            <p className="font-sans text-neutral-300 text-sm md:text-base leading-relaxed font-light">
              {CHEF_INFO.bio}
            </p>

            {/* Chef Quote Card */}
            <div className="bg-burgundy-950/80 border-l-2 border-gold-500 p-6 rounded-r-xs shadow-lg relative overflow-hidden">
              <div className="absolute right-4 bottom-2 opacity-5 text-gold-400">
                <Flame className="w-24 h-24" />
              </div>
              <p className="font-serif italic text-gold-200 text-sm md:text-base leading-relaxed relative z-10">
                &ldquo;{CHEF_INFO.quote}&rdquo;
              </p>
              <p className="font-display text-[10px] tracking-widest uppercase text-gold-400 mt-3">— Vignesh Sundaram</p>
            </div>
          </div>

          {/* Chef Image (Right) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative group max-w-[320px] md:max-w-[380px] w-full aspect-[3/4] border border-gold-500/20 rounded-xs overflow-hidden shadow-2xl">
              <img
                src={CHEF_INFO.image}
                alt={CHEF_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950 via-transparent to-transparent opacity-60"></div>
              {/* Gold borders */}
              <div className="absolute inset-4 border border-gold-500/20 group-hover:border-gold-500/40 transition-colors duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Pillars / Philosophies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-gold-500/10 pt-20">
          {PHILOSOPHIES.map((p, index) => (
            <div
              key={index}
              className="bg-burgundy-950/60 hover:bg-burgundy-800/20 border border-gold-500/10 hover:border-gold-500/30 p-8 rounded-xs transition-all duration-300 group shadow-lg"
            >
              <div className="p-3 bg-burgundy-900/80 border border-gold-500/20 rounded-xs inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h4 className="font-serif text-lg font-medium text-gold-100 tracking-wide mb-3 group-hover:text-gold-300 transition-colors duration-300">
                {p.title}
              </h4>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
