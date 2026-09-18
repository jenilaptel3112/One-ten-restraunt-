import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { NavSection } from '../types';
import { Check, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReservation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#191817] text-[#FAF8F5] pt-20 pb-12 border-t border-[#2D2A28]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#2D2A28]">
          {/* Brand & Accolades (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-serif text-3xl tracking-[0.2em] font-medium text-[#FAF8F5] block">
                ONE TEN
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A67C52] font-sans block mt-1">
                Restaurant & Cellar · SoHo
              </span>
            </div>

            <p className="text-xs text-[#A8A29A] font-light leading-relaxed max-w-sm">
              An ode to seasonal craft, provenance, and quiet luxury.
              110 Mercer Street, New York, NY.
            </p>

            {/* Accolades list */}
            <div className="space-y-1.5 pt-2">
              {RESTAURANT_INFO.awards.map((award, i) => (
                <div key={i} className="text-[11px] text-[#C5A059] flex items-center gap-2 font-serif">
                  <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A67C52] font-sans font-medium block">
              Exploration
            </span>
            <ul className="space-y-2.5 text-xs text-[#D5CFC4] font-sans">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FAF8F5] hover:underline cursor-pointer transition-colors"
                >
                  Home & Ethos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-[#FAF8F5] hover:underline cursor-pointer transition-colors"
                >
                  Seasonal Tasting & Menus
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="text-[#C5A059] hover:underline cursor-pointer transition-colors"
                >
                  Book a Table / Reservations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FAF8F5] hover:underline cursor-pointer transition-colors"
                >
                  Our Story & Farm Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#FAF8F5] hover:underline cursor-pointer transition-colors"
                >
                  Atmosphere & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FAF8F5] hover:underline cursor-pointer transition-colors"
                >
                  Location & Private Events
                </button>
              </li>
            </ul>
          </div>

          {/* Sittings & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A67C52] font-sans font-medium block">
              Contact & Hours
            </span>
            <div className="space-y-3 text-xs text-[#A8A29A]">
              <div>
                <span className="text-[#FAF8F5] block text-[11px]">Dinner Service</span>
                <span>Tue – Sun: 5:30 PM – 10:30 PM</span>
              </div>
              <div>
                <span className="text-[#FAF8F5] block text-[11px]">Lunch Service</span>
                <span>Wed – Sun: 12:00 PM – 2:30 PM</span>
              </div>
              <div className="pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-[#FAF8F5] hover:text-[#C5A059] transition-colors block"
                >
                  {RESTAURANT_INFO.phone}
                </a>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="hover:text-[#C5A059] transition-colors block truncate"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A67C52] font-sans font-medium block">
              The One Ten Journal
            </span>
            <p className="text-xs text-[#A8A29A] font-light leading-relaxed">
              Seasonal releases, farm updates, and early reservation availability notifications.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#23211F] border border-[#A67C52] text-xs text-[#C5A059] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C5A059]" />
                <span>You are subscribed to the seasonal journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#242220] border border-[#3E3A36] text-xs text-[#FAF8F5] placeholder-[#757068] focus:outline-hidden focus:border-[#A67C52]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#FAF8F5] text-[#191817] hover:bg-[#A67C52] hover:text-[#FAF8F5] text-[11px] uppercase tracking-widest font-medium transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E7A73]">
          <div>
            © {new Date().getFullYear()} One Ten Restaurant LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>110 Mercer St, SoHo, NY</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#D5CFC4] hover:text-[#FAF8F5] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#A67C52]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
