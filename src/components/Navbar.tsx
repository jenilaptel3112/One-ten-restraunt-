import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin } from 'lucide-react';
import { NavSection } from '../types';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: NavSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E3DA]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      {/* Top micro-banner */}
      <div className="hidden lg:block bg-[#1C1B1A] text-[#FAF8F5] text-xs py-1.5 px-6 font-sans tracking-widest text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] text-[#D5CFC4]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#A67C52]" />
            110 Mercer Street, SoHo · New York, NY
          </span>
          <span className="text-[#FAF8F5] tracking-widest font-medium">
            AUTUMN TASTING MENU NOW PRESENTING
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-[#A67C52]" />
            +1 (212) 555-0110
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-22">
          {/* Brand Logo */}
          <button
            id="brand-logo-button"
            onClick={() => handleLinkClick('home')}
            className="flex flex-col text-left group cursor-pointer"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium text-[#1C1B1A] transition-colors group-hover:text-[#A67C52]">
              ONE TEN
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#7E7A73] font-sans -mt-0.5">
              Restaurant & Cellar
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-menu" className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 text-sm tracking-widest uppercase transition-colors cursor-pointer font-medium ${
                    isActive
                      ? 'text-[#1C1B1A]'
                      : 'text-[#7E7A73] hover:text-[#1C1B1A]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#A67C52] transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action / Reservation Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="header-reserve-button"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#1C1B1A] hover:bg-[#A67C52] transition-colors duration-200 cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              id="mobile-reserve-quick-button"
              onClick={onOpenReservation}
              className="px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#1C1B1A] cursor-pointer"
            >
              Reserve
            </button>
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1B1A] hover:text-[#A67C52] transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#FAF8F5] border-b border-[#E8E3DA] px-6 py-6 shadow-md transition-all animate-fadeIn"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left text-base uppercase tracking-widest py-2 border-b border-[#EFEAE1] transition-colors ${
                  activeSection === item.id
                    ? 'text-[#1C1B1A] font-semibold pl-2 border-l-2 border-l-[#A67C52]'
                    : 'text-[#7E7A73] hover:text-[#1C1B1A]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                id="mobile-drawer-reserve-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full text-center py-3 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#1C1B1A] hover:bg-[#A67C52] transition-colors"
              >
                Book a Table
              </button>
              <div className="text-center text-xs text-[#7E7A73] pt-2">
                110 Mercer Street, SoHo · (212) 555-0110
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
