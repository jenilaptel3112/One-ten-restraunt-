import React from 'react';
import { Calendar, ArrowDown, Clock, Wine, Sparkles } from 'lucide-react';
import { NavSection } from '../types';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenReservation }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Background with subtle atmospheric imagery & soft gradient overlay */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
          alt="One Ten Interior Ambiance"
          className="w-full h-full object-cover object-center opacity-18 filter grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/90 via-[#FAF8F5]/80 to-[#FAF8F5]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Eyebrow / Provenance */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#D5CFC4] bg-[#F5F2EC]/80 text-[#7E7A73] text-[11px] uppercase tracking-[0.25em] font-sans mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] inline-block animate-pulse" />
          <span>SoHo, New York · 110 Mercer Street</span>
        </div>

        {/* Primary Monogram / Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#1C1B1A] tracking-[0.08em] uppercase leading-[1.05] mb-6">
          ONE TEN
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#3A3835] font-light max-w-3xl mx-auto leading-relaxed mb-8">
          “An ode to seasonal craft, provenance, and quiet hospitality.”
        </p>

        {/* Brief Narrative */}
        <p className="text-sm sm:text-base text-[#68635B] max-w-2xl mx-auto leading-relaxed font-sans font-light tracking-wide mb-10">
          Rooted in the agricultural rhythms of the Hudson Valley and coastal Atlantic waters.
          Presenting contemporary multi-course tasting experiences and an à la carte dining room
          surrounded by century-old cast-iron architecture.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto mb-16">
          <button
            id="hero-book-table-cta"
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#1C1B1A] text-[#FAF8F5] hover:bg-[#A67C52] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Reserve a Table</span>
          </button>

          <button
            id="hero-explore-menu-cta"
            onClick={() => onNavigate('menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-[#1C1B1A] text-[#1C1B1A] hover:bg-[#1C1B1A] hover:text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer"
          >
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Key Attributes Bar */}
        <div className="w-full max-w-4xl border-t border-b border-[#E8E3DA] py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs tracking-wider">
          <div className="flex flex-col items-center gap-1.5">
            <span className="flex items-center gap-1 text-[#A67C52] uppercase font-serif text-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Seven Courses
            </span>
            <span className="text-[#7E7A73]">Autumn Tasting Menu & À La Carte</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 border-t sm:border-t-0 sm:border-l sm:border-r border-[#E8E3DA] pt-4 sm:pt-0">
            <span className="flex items-center gap-1 text-[#A67C52] uppercase font-serif text-sm">
              <Wine className="w-3.5 h-3.5" />
              1,400 Selections
            </span>
            <span className="text-[#7E7A73]">Biodynamic, Classic & Rare Cellar</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 border-t sm:border-t-0 pt-4 sm:pt-0">
            <span className="flex items-center gap-1 text-[#A67C52] uppercase font-serif text-sm">
              <Clock className="w-3.5 h-3.5" />
              Service Hours
            </span>
            <span className="text-[#7E7A73]">Lunch (Wed–Sun) · Dinner (Tue–Sun)</span>
          </div>
        </div>

        {/* Subtle scroll cue */}
        <button
          onClick={() => onNavigate('menu')}
          className="mt-12 text-[#9E988F] hover:text-[#1C1B1A] transition-colors flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] cursor-pointer"
        >
          <span>Discover the Experience</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#A67C52]" />
        </button>
      </div>
    </section>
  );
};
