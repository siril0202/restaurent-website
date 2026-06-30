import { Flame, Facebook, Instagram, Youtube, Compass, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Youtube className="w-4 h-4" />, href: 'https://youtube.com', label: 'Youtube' },
  ];

  const quickLinks = [
    { label: 'The Story', id: 'about' },
    { label: 'Exquisite Menu', id: 'menu' },
    { label: 'The Signatures', id: 'signatures' },
    { label: 'Seasonal Specials', id: 'specials' },
    { label: 'The Gallery', id: 'gallery' },
    { label: 'Critic Reviews', id: 'reviews' },
    { label: 'Secure Booking', id: 'reservation' },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 font-sans text-xs relative overflow-hidden border-t border-gold-500/20 pt-16 pb-12">
      {/* Subtle back decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-burgundy-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gold-500/10 pb-12 mb-12">
          {/* Column 1: Brand details (Col span 4) */}
          <div className="md:col-span-4 space-y-6">
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center space-x-2 focus:outline-none group text-left cursor-pointer"
            >
              <Flame className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors" />
              <span className="font-display text-base tracking-[0.2em] text-gold-100 group-hover:text-gold-300 transition-colors">
                VELVET FLAME
              </span>
            </button>
            <p className="font-sans text-neutral-400 font-light leading-relaxed max-w-xs">
              A Michelin-caliber temple of fine gastronomy in the historic Pandyan capital of Madurai. We honor local ingredients, European techniques, and royal hospitality.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  className="p-2 border border-gold-500/10 hover:border-gold-400 text-gold-400 hover:text-gold-200 rounded-full transition-all duration-300 bg-burgundy-950/40"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-gold-200 font-semibold tracking-wider text-sm uppercase">Quick Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-gold-300 transition-colors duration-300 cursor-pointer font-light tracking-wide text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary (Col span 5) */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-gold-200 font-semibold tracking-wider text-sm uppercase">Gastronomy Chambers</h4>
            <div className="space-y-3 font-light text-neutral-400 leading-relaxed max-w-sm">
              <p>
                <strong className="text-gold-300 font-semibold uppercase tracking-wider text-[10px]">Address:</strong><br />
                Meenakshi Amman Temple Circle, Madurai, Tamil Nadu, 625001, India.
              </p>
              <p>
                <strong className="text-gold-300 font-semibold uppercase tracking-wider text-[10px]">Inquiries:</strong><br />
                Phone: <span className="text-gold-100 font-medium">+91 XXXXX XXXXX</span><br />
                Email: <span className="text-gold-100 font-medium">hello@example.com</span>
              </p>
              <div className="flex items-center space-x-1.5 text-gold-500/50 text-[10px] uppercase tracking-wider mt-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Private shuttle picks from Madurai Airport (IXM)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between font-sans text-[10px] text-neutral-500 font-light tracking-wider space-y-6 sm:space-y-0">
          <div className="space-y-1 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Velvet Flame Gastronomy. All rights reserved.</p>
            <p className="text-neutral-600">This website is an elegant, high-fidelity portfolio demonstration project.</p>
            <p className="pt-1">
              Designed & Developed by{' '}
              <a
                href="https://codewithsiril.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-200 hover:underline transition-colors duration-300 font-medium"
              >
                CodeWithSiril
              </a>
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-2 border border-gold-500/10 hover:border-gold-500/40 hover:bg-burgundy-900/30 text-gold-400 hover:text-gold-200 px-4 py-2.5 rounded-xs transition-all duration-300 cursor-pointer focus:outline-none"
          >
            <span>Return To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
