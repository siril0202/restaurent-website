import { MapPin, Phone, Mail, Compass, ExternalLink, CalendarRange } from 'lucide-react';

export default function LocationSection() {
  const handleOpenMaps = () => {
    // Open real Madurai map coordinates on Google Maps
    window.open('https://maps.google.com/?q=Madurai,Tamil+Nadu,India', '_blank');
  };

  return (
    <section id="location" className="py-24 bg-gradient-to-b from-burgundy-950 to-burgundy-900 relative overflow-hidden border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase mb-3">VISIT OUR SANCTUARY</p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-gold-100 tracking-tight">
            Location & <span className="italic text-gold-400 font-normal">Contact</span>
          </h2>
          <div className="mt-4 flex justify-center items-center">
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
            <div className="mx-3 text-gold-400 text-xs">◆</div>
            <div className="h-[1px] w-12 bg-gold-500/35"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Contact Details Panel (Left column - Col span 5) */}
          <div className="lg:col-span-5 bg-burgundy-950/80 border border-gold-500/10 p-8 md:p-10 rounded-xs flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-8">
              <div>
                <span className="font-display text-[9px] uppercase tracking-widest text-gold-400 font-semibold bg-gold-500/5 px-2.5 py-1 border border-gold-500/10 rounded-xs inline-block">
                  VELVET FLAME MADURAI
                </span>
                <h3 className="font-serif text-2xl font-bold text-gold-100 mt-4 leading-tight">
                  In The Heart of The Ancient City
                </h3>
              </div>

              {/* Contact list */}
              <div className="space-y-6 font-sans text-xs">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-burgundy-900 border border-gold-500/20 rounded-xs text-gold-400 mt-1 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold-200 uppercase tracking-widest text-[10px] mb-1">Our Address</h4>
                    <p className="text-neutral-300 leading-relaxed max-w-xs">
                      12, Imperial Palace Avenue, Near Meenakshi Amman Temple South Entrance, Madurai, Tamil Nadu, 625001, India.
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-burgundy-900 border border-gold-500/20 rounded-xs text-gold-400 mt-1 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold-200 uppercase tracking-widest text-[10px] mb-1">Call Us</h4>
                    <p className="text-neutral-300 leading-relaxed font-semibold text-sm">
                      +91 XXXXX XXXXX
                    </p>
                    <p className="text-neutral-500 text-[10px] mt-0.5">Reservations & inquiries (Daily 12:00 PM - 11:30 PM)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-burgundy-900 border border-gold-500/20 rounded-xs text-gold-400 mt-1 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gold-200 uppercase tracking-widest text-[10px] mb-1">Email Us</h4>
                    <p className="text-neutral-300 leading-relaxed text-sm">
                      hello@example.com
                    </p>
                    <p className="text-neutral-500 text-[10px] mt-0.5">Private banquet events & corporate registries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-8 border-t border-gold-500/10 mt-8 space-y-4">
              <div className="flex items-center space-x-2 text-gold-400/80 text-[11px] italic font-sans">
                <Compass className="w-3.5 h-3.5" />
                <span>Coordinates: 9.9252° N, 78.1198° E</span>
              </div>
              <button
                onClick={handleOpenMaps}
                className="w-full text-center border border-gold-500/30 hover:border-gold-400 text-gold-300 hover:text-gold-100 font-sans text-[10px] uppercase tracking-widest py-3.5 rounded-xs transition-all duration-300 flex items-center justify-center space-x-2 bg-burgundy-900/30 hover:bg-burgundy-800/50 cursor-pointer"
              >
                <span>Launch Google Maps Route</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Custom Map Placeholder (Right column - Col span 7) */}
          <div className="lg:col-span-7 relative h-[450px] lg:h-auto rounded-xs overflow-hidden border border-gold-500/20 shadow-2xl bg-burgundy-950">
            {/* Custom styled mock luxury vector map */}
            <div className="absolute inset-0 bg-[#0d0204] opacity-90 flex flex-col justify-between p-6">
              {/* Map grid lines simulation */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#EADCB9_1px,transparent_1px),linear-gradient(to_bottom,#EADCB9_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

              {/* Mock roads & paths drawn with delicate transparent borders */}
              <div className="absolute top-[20%] left-0 right-0 h-[2px] bg-gold-500/10 rotate-[-12deg]" />
              <div className="absolute bottom-[40%] left-0 right-0 h-[3px] bg-gold-500/5 rotate-[25deg]" />
              <div className="absolute top-0 bottom-0 left-[35%] w-[2px] bg-gold-500/8 rotate-[15deg]" />
              <div className="absolute top-0 bottom-0 right-[25%] w-[4px] bg-gold-500/5 rotate-[-5deg]" />

              {/* Waterway (Vigai River simulation) */}
              <div className="absolute top-[10%] left-0 right-0 h-10 bg-gradient-to-b from-burgundy-900/20 to-burgundy-900/40 rotate-[5deg] blur-xs" />

              {/* Floating map controls (UI design only) */}
              <div className="relative z-10 flex justify-between items-start pointer-events-none">
                <div className="bg-black/80 border border-gold-500/25 p-3 rounded-xs flex items-center space-x-2 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping"></div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold-300 font-bold">LIVE TRACKER ACTIVE</span>
                </div>

                <div className="flex flex-col space-y-1">
                  <button className="w-8 h-8 bg-black/80 border border-gold-500/20 rounded-xs text-gold-300 text-xs font-mono flex items-center justify-center font-bold">
                    +
                  </button>
                  <button className="w-8 h-8 bg-black/80 border border-gold-500/20 rounded-xs text-gold-300 text-xs font-mono flex items-center justify-center font-bold">
                    -
                  </button>
                </div>
              </div>

              {/* Centered Golden Marker Pin of Velvet Flame */}
              <div className="absolute inset-0 m-auto w-16 h-16 flex flex-col items-center justify-center pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 rounded-full bg-gold-500/15 animate-ping" />
                  <div className="absolute w-8 h-8 rounded-full bg-gold-500/30 animate-pulse" />
                  <div className="p-2.5 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 border border-gold-300 shadow-xl relative z-10">
                    <Compass className="w-5 h-5 text-burgundy-950 animate-spin" style={{ animationDuration: '30s' }} />
                  </div>
                </div>
                <div className="bg-black/95 border border-gold-500/30 px-3 py-1.5 rounded-xs mt-3 shadow-2xl relative">
                  <p className="font-display text-[9px] tracking-[0.2em] text-gold-400 font-bold text-center uppercase truncate">
                    VELVET FLAME
                  </p>
                  <p className="font-sans text-[8px] text-neutral-400 text-center truncate">
                    Meenakshi Temple Circle, Madurai
                  </p>
                </div>
              </div>

              {/* Landmark badges on map */}
              <div className="absolute top-[35%] left-[10%] opacity-30 font-display text-[8px] uppercase tracking-widest text-gold-400">
                ★ MEENAKSHI TEMPLE S. ENTRANCE
              </div>
              <div className="absolute bottom-[25%] right-[15%] opacity-30 font-display text-[8px] uppercase tracking-widest text-gold-400">
                ★ IMPERIAL ROYAL GARDENS
              </div>

              {/* Map Footer overlay */}
              <div className="relative z-10 flex justify-between items-end">
                <div className="bg-black/90 border border-gold-500/20 p-3.5 rounded-xs max-w-xs shadow-lg">
                  <p className="font-serif text-[10px] text-gold-200 font-semibold mb-1">
                    Madurai Outer limits / Chettinad Shuttle Service
                  </p>
                  <p className="font-sans text-[9px] text-neutral-400 leading-snug">
                    Premium private chauffeur pickup can be arranged from Madurai Airport (IXM) upon reservation confirmation.
                  </p>
                </div>

                <button
                  onClick={handleOpenMaps}
                  className="bg-gold-500 hover:bg-gold-400 text-burgundy-950 font-sans font-bold text-[9px] uppercase tracking-widest px-4 py-2.5 rounded-xs flex items-center space-x-1 shadow-lg cursor-pointer"
                >
                  <span>Open In Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
