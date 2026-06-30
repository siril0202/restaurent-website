import { useState, useEffect } from 'react';
import { Menu, X, Flame, CalendarRange, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'The Story', id: 'about' },
    { label: 'Exquisite Menu', id: 'menu' },
    { label: 'Signatures', id: 'signatures' },
    { label: 'Chef\'s Specials', id: 'specials' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Location', id: 'location' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-burgundy-950/95 backdrop-blur-md border-b border-gold-500/20 py-4 shadow-[0_4px_30px_rgba(13,2,4,0.8)]'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Est Tagline */}
        <div className="flex items-center space-x-6">
          <div className="hidden xl:block text-[10px] tracking-[0.3em] text-gold-400 uppercase border-r border-gold-500/20 pr-6">
            Est. 2024 • Madurai
          </div>
          <button
            onClick={() => handleItemClick('hero')}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="relative">
              <Flame className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="font-serif text-xl md:text-2xl font-light tracking-[0.2em] text-white group-hover:text-gold-200 transition-colors duration-300 uppercase">
              VELVET <span className="text-gold-400 italic">FLAME</span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:text-gold-300 focus:outline-none cursor-pointer relative py-1 ${
                activeSection === item.id ? 'text-gold-400 font-medium' : 'text-neutral-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-400 transition-all duration-300" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => handleItemClick('reservation')}
            className="flex items-center space-x-2 border border-gold-500/40 hover:border-gold-400 bg-burgundy-800/40 hover:bg-burgundy-700/60 text-gold-300 hover:text-gold-100 px-5 py-2.5 rounded-xs text-xs font-sans uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(197,168,128,0.1)] hover:shadow-[0_0_20px_rgba(197,168,128,0.25)] focus:outline-none cursor-pointer"
          >
            <CalendarRange className="w-3.5 h-3.5" />
            <span>Reserve A Table</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gold-200 hover:text-gold-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bg-burgundy-950/98 backdrop-blur-lg border-b border-gold-500/20 lg:hidden shadow-2xl transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4 px-8 py-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left font-sans text-sm uppercase tracking-[0.2em] py-2 border-b border-white/5 ${
                  activeSection === item.id ? 'text-gold-400' : 'text-neutral-300 hover:text-gold-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleItemClick('reservation')}
              className="flex items-center justify-center space-x-2 border border-gold-400 bg-burgundy-800/80 hover:bg-burgundy-700 text-gold-200 px-6 py-3 rounded-xs text-xs uppercase tracking-widest transition-all duration-300 mt-4 cursor-pointer"
            >
              <CalendarRange className="w-4 h-4" />
              <span>Reserve A Table</span>
            </button>
            <div className="flex items-center justify-center space-x-2 text-xs text-neutral-400 pt-4 font-sans tracking-wide">
              <PhoneCall className="w-3 h-3 text-gold-400" />
              <span>+91 XXXXX XXXXX</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
