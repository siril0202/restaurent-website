import { useState, useEffect } from 'react';
import { REVIEWS } from '../data';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000); // Auto slide every 7 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const activeReview = REVIEWS[activeIndex];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-burgundy-900 to-burgundy-950 overflow-hidden relative border-t border-gold-500/10">
      {/* Decorative ambient blurred glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-burgundy-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Monogram Seal */}
        <div className="flex justify-center mb-6">
          <div className="p-3 rounded-full border border-gold-500/30 bg-burgundy-950 flex items-center justify-center">
            <Quote className="w-5 h-5 text-gold-400" />
          </div>
        </div>

        {/* Section Header */}
        <p className="font-display text-xs text-gold-400 tracking-[0.3em] uppercase mb-4">REVERED VOICES</p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-gold-100 tracking-tight mb-16">
          The Critique & <span className="italic text-gold-400 font-normal">Praise</span>
        </h2>

        {/* Testimonial Active Display Box */}
        <div className="relative min-h-[280px] sm:min-h-[220px] px-6 md:px-12 flex flex-col justify-center items-center">
          <div
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0'
            }`}
          >
            {/* 5 Golden Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>

            {/* Critique Comment */}
            <blockquote className="font-serif italic text-base md:text-xl text-gold-100 leading-relaxed max-w-3xl mx-auto mb-8">
              &ldquo;{activeReview.comment}&rdquo;
            </blockquote>

            {/* Critic Portrait Info */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <img
                src={activeReview.avatar}
                alt={activeReview.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-gold-500/35 shadow-md"
              />
              <div className="text-left">
                <p className="font-serif font-semibold text-sm text-gold-200 tracking-wide">{activeReview.name}</p>
                <p className="font-sans text-[10px] text-neutral-400 uppercase tracking-widest">{activeReview.role} • {activeReview.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dot Indicators & Buttons */}
        <div className="flex items-center justify-center space-x-6 mt-16">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="p-2 border border-gold-500/20 hover:border-gold-400 text-gold-300 hover:text-gold-100 rounded-full transition-all duration-300 cursor-pointer focus:outline-none hover:bg-burgundy-900/40"
            aria-label="Previous critique"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveIndex(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index ? 'w-6 bg-gold-400' : 'w-1.5 bg-gold-500/20 hover:bg-gold-500/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="p-2 border border-gold-500/20 hover:border-gold-400 text-gold-300 hover:text-gold-100 rounded-full transition-all duration-300 cursor-pointer focus:outline-none hover:bg-burgundy-900/40"
            aria-label="Next critique"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
