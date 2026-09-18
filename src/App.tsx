import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { MenuSection } from './components/MenuSection';
import { ReservationSection } from './components/ReservationSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NavSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');

  // Handle smooth scroll navigation between sections
  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    const sectionMap: Record<NavSection, string> = {
      home: 'hero-section',
      menu: 'menu-section',
      reservations: 'reservations-section',
      about: 'about-section',
      gallery: 'gallery-section',
      contact: 'contact-section',
    };

    const targetId = sectionMap[section];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // account for sticky navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleOpenReservation = () => {
    handleNavigate('reservations');
  };

  // Observe scroll position to update active navbar section
  useEffect(() => {
    const handleScrollObserver = () => {
      const sections: { id: NavSection; el: HTMLElement | null }[] = [
        { id: 'home', el: document.getElementById('hero-section') },
        { id: 'menu', el: document.getElementById('menu-section') },
        { id: 'reservations', el: document.getElementById('reservations-section') },
        { id: 'about', el: document.getElementById('about-section') },
        { id: 'gallery', el: document.getElementById('gallery-section') },
        { id: 'contact', el: document.getElementById('contact-section') },
      ];

      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const top = section.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1B1A] flex flex-col font-sans selection:bg-[#EAE0D0]">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Home / Hero */}
        <Hero
          onNavigate={handleNavigate}
          onOpenReservation={handleOpenReservation}
        />

        {/* Brand Philosophy / Ethos */}
        <Philosophy />

        {/* Menu Section */}
        <MenuSection
          onOpenReservation={handleOpenReservation}
        />

        {/* Reservations / Table Booking Engine */}
        <ReservationSection />

        {/* About / Provenance / Chef & Sommelier */}
        <AboutSection />

        {/* Gallery / Vignettes */}
        <GallerySection />

        {/* Contact / Private Dining / FAQs / Map */}
        <ContactSection />
      </main>

      {/* Global Minimalist Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={handleOpenReservation}
      />
    </div>
  );
}
