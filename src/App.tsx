import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import SignatureDishes from './components/SignatureDishes';
import ChefsSpecials from './components/ChefsSpecials';
import Gallery from './components/Gallery';
import CustomerReviews from './components/CustomerReviews';
import ReservationSection from './components/ReservationSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth Navigation Trigger
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer for Active Section Tracking on Scroll
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'menu',
      'signatures',
      'specials',
      'gallery',
      'reviews',
      'location',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Triggers when the section takes up the middle part of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-burgundy-950 font-sans text-neutral-100 antialiased selection:bg-gold-500/30 selection:text-gold-100">
      {/* Exquisite Sticky Header Navbar */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Single-View Luxurious Sections */}
      <main className="relative">
        <Hero
          onExploreMenu={() => handleNavigate('menu')}
          onReserveTable={() => handleNavigate('reservation')}
        />
        <About />
        <MenuSection />
        <SignatureDishes />
        <ChefsSpecials />
        <Gallery />
        <CustomerReviews />
        <ReservationSection />
        <LocationSection />
      </main>

      {/* Elegant Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
