import React, { useState } from 'react';
import { Wine, Sparkles, Check, Download, Calendar, Info } from 'lucide-react';
import { TASTING_COURSES, DINNER_ITEMS, LUNCH_ITEMS, BEVERAGE_ITEMS } from '../data/restaurantData';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

type MenuCategory = 'tasting' | 'dinner' | 'lunch' | 'beverage';

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('tasting');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [downloadNotice, setDownloadNotice] = useState(false);

  const categories: { id: MenuCategory; label: string; sub: string }[] = [
    { id: 'tasting', label: 'Tasting Experience', sub: 'Seven-Course Progression' },
    { id: 'dinner', label: 'Dinner À La Carte', sub: 'Starters, Mains & Sweets' },
    { id: 'lunch', label: 'Midday Lunch', sub: 'Refined Seasonal Service' },
    { id: 'beverage', label: 'Cellar & Cocktails', sub: 'Wines, Cocktails & Zero-Proof' },
  ];

  const handleDownloadPdf = () => {
    setDownloadNotice(true);
    setTimeout(() => {
      window.print();
      setDownloadNotice(false);
    }, 600);
  };

  return (
    <section id="menu-section" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#A67C52] font-medium block mb-2">
            Autumn Culinary Program
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1B1A] font-normal mb-4">
            Curated Menus
          </h2>
          <p className="font-sans text-sm text-[#7E7A73] font-light leading-relaxed">
            Our menus evolve with the micro-seasons of the Northeastern Atlantic and Hudson Valley.
            Dishes are subject to daily wild harvests and market freshness.
          </p>
        </div>

        {/* Menu Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`menu-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 text-left sm:text-center transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A] shadow-xs'
                    : 'bg-[#FAF8F5] text-[#59554E] border-[#E2DDD4] hover:border-[#A67C52]'
                }`}
              >
                <div className="text-xs sm:text-sm font-serif tracking-wider">{cat.label}</div>
                <div
                  className={`text-[10px] font-sans tracking-widest uppercase mt-0.5 ${
                    isActive ? 'text-[#C5A059]' : 'text-[#8C857B]'
                  }`}
                >
                  {cat.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dietary Filter & Tools */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 bg-[#F5F1EB] border border-[#E8E3DA] mb-12 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#7E7A73] uppercase tracking-wider text-[11px]">Filter Dietary:</span>
            {['all', 'GF', 'VG', 'DF'].map((d) => (
              <button
                key={d}
                onClick={() => setDietaryFilter(d)}
                className={`px-3 py-1 border text-[11px] font-sans transition-colors cursor-pointer ${
                  dietaryFilter === d
                    ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A]'
                    : 'bg-white text-[#68635B] border-[#D8D2C7] hover:border-[#A67C52]'
                }`}
              >
                {d === 'all' ? 'All Items' : d === 'GF' ? 'Gluten-Free' : d === 'VG' ? 'Vegetarian' : 'Dairy-Free'}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-[#68635B]">
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 hover:text-[#1C1B1A] transition-colors cursor-pointer"
              title="Print or save PDF menu"
            >
              <Download className="w-3.5 h-3.5 text-[#A67C52]" />
              <span>{downloadNotice ? 'Preparing...' : 'Print / Export PDF'}</span>
            </button>
            <span className="text-[#D5CFC4]">|</span>
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-1.5 text-[#A67C52] hover:text-[#8C6338] font-medium cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book This Service</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TASTING MENU */}
        {activeCategory === 'tasting' && (
          <div className="animate-fadeIn">
            {/* Prix Fixe Overview Card */}
            <div className="bg-[#F5F1EB] border border-[#E8E3DA] p-8 sm:p-10 mb-12 text-center max-w-3xl mx-auto">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A67C52] font-sans font-medium">
                Chef Soren Vance Presents
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1B1A] my-3">
                The Seven-Course Seasonal Arc
              </h3>
              <p className="text-xs sm:text-sm text-[#68635B] font-light max-w-xl mx-auto mb-6">
                A paced progression guided by early frost greens, Atlantic day-boat catches, open-fire roasted heritage meats, and rooftop honey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-6 border-t border-[#E5DFD4] text-center">
                <div>
                  <div className="font-serif text-2xl text-[#1C1B1A]">$185</div>
                  <div className="text-[11px] uppercase tracking-widest text-[#7E7A73]">Per Guest</div>
                </div>
                <div className="hidden sm:block w-[1px] h-8 bg-[#D5CFC4]" />
                <div>
                  <div className="font-serif text-2xl text-[#1C1B1A]">+$135</div>
                  <div className="text-[11px] uppercase tracking-widest text-[#7E7A73]">Sommelier Wine Pairing</div>
                </div>
                <div className="hidden sm:block w-[1px] h-8 bg-[#D5CFC4]" />
                <div>
                  <div className="font-serif text-2xl text-[#1C1B1A]">+$65</div>
                  <div className="text-[11px] uppercase tracking-widest text-[#7E7A73]">Zero-Proof Botanical Pairing</div>
                </div>
              </div>
            </div>

            {/* Courses List */}
            <div className="space-y-8 max-w-3xl mx-auto">
              {TASTING_COURSES.map((course) => {
                if (dietaryFilter !== 'all' && !course.dietary?.includes(dietaryFilter as any)) {
                  return null;
                }
                return (
                  <div
                    key={course.courseNumber}
                    className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#E8E3DA] hover:border-[#C5A059] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#A67C52] font-medium">
                        Course {course.courseNumber} · {course.title}
                      </span>
                      {course.dietary && (
                        <div className="flex gap-1.5">
                          {course.dietary.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] px-1.5 py-0.5 border border-[#D5CFC4] text-[#7E7A73] uppercase font-sans"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl text-[#1C1B1A] mb-2">
                      {course.dish}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#68635B] font-light leading-relaxed mb-4">
                      {course.description}
                    </p>

                    <div className="pt-3 border-t border-[#F0ECE4] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-1.5 text-[#4E4A44]">
                        <Wine className="w-3.5 h-3.5 text-[#A67C52]" />
                        <span className="text-[11px] font-sans font-light italic">
                          Pairing: {course.winePairing}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-[#8C857B]">
                        {course.origin}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: DINNER À LA CARTE */}
        {activeCategory === 'dinner' && (
          <div className="animate-fadeIn max-w-4xl mx-auto space-y-12">
            {/* Starters */}
            <div>
              <div className="border-b border-[#D5CFC4] pb-2 mb-6">
                <span className="font-serif text-2xl text-[#1C1B1A]">Starters & Crudo</span>
                <span className="text-xs uppercase tracking-widest text-[#7E7A73] ml-3">First Courses</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DINNER_ITEMS.filter((i) => i.courseCategory === 'starter').map((item) => (
                  <div
                    key={item.id}
                    className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between hover:border-[#C5A059] transition-colors"
                  >
                    <div>
                      <div className="flex justify-between items-baseline gap-2 mb-2">
                        <h4 className="font-serif text-lg text-[#1C1B1A]">{item.name}</h4>
                        <span className="font-serif text-lg text-[#1C1B1A] font-medium">{item.price}</span>
                      </div>
                      <p className="text-xs text-[#68635B] font-light leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-[10px] text-[#8C857B]">
                      <span>{item.provenance}</span>
                      {item.dietary && <span>{item.dietary.join(' · ')}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mains */}
            <div>
              <div className="border-b border-[#D5CFC4] pb-2 mb-6">
                <span className="font-serif text-2xl text-[#1C1B1A]">Wood-Fire & Heritage Mains</span>
                <span className="text-xs uppercase tracking-widest text-[#7E7A73] ml-3">Second Courses</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DINNER_ITEMS.filter((i) => i.courseCategory === 'main').map((item) => (
                  <div
                    key={item.id}
                    className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between hover:border-[#C5A059] transition-colors"
                  >
                    <div>
                      <div className="flex justify-between items-baseline gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-xl text-[#1C1B1A]">{item.name}</h4>
                          {item.recommended && (
                            <span className="px-2 py-0.5 bg-[#F5EFE6] border border-[#D5C6AC] text-[#8C6A3D] text-[9px] uppercase tracking-wider font-medium">
                              Signature
                            </span>
                          )}
                        </div>
                        <span className="font-serif text-xl text-[#1C1B1A] font-medium">{item.price}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#68635B] font-light leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-[10px] text-[#8C857B]">
                      <span>{item.provenance}</span>
                      {item.dietary && <span>{item.dietary.join(' · ')}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desserts */}
            <div>
              <div className="border-b border-[#D5CFC4] pb-2 mb-6">
                <span className="font-serif text-2xl text-[#1C1B1A]">Desserts & Confections</span>
                <span className="text-xs uppercase tracking-widest text-[#7E7A73] ml-3">Finales</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DINNER_ITEMS.filter((i) => i.courseCategory === 'dessert').map((item) => (
                  <div
                    key={item.id}
                    className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between hover:border-[#C5A059] transition-colors"
                  >
                    <div>
                      <div className="flex justify-between items-baseline gap-2 mb-2">
                        <h4 className="font-serif text-lg text-[#1C1B1A]">{item.name}</h4>
                        <span className="font-serif text-lg text-[#1C1B1A] font-medium">{item.price}</span>
                      </div>
                      <p className="text-xs text-[#68635B] font-light leading-relaxed mb-3">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-[10px] text-[#8C857B]">
                      <span>{item.provenance}</span>
                      {item.dietary && <span>{item.dietary.join(' · ')}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LUNCH */}
        {activeCategory === 'lunch' && (
          <div className="animate-fadeIn max-w-4xl mx-auto space-y-8">
            <div className="bg-[#F5F1EB] p-6 border border-[#E8E3DA] text-center mb-8">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#A67C52] font-medium block">
                Wednesday through Sunday · 12:00 PM – 2:30 PM
              </span>
              <p className="font-serif text-2xl text-[#1C1B1A] mt-1">
                Midday Hospitality in the Cast-Iron Solarium
              </p>
              <p className="text-xs text-[#68635B] mt-2 font-light">
                Prix-fixe two-course option available at $55 per guest, or selected à la carte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LUNCH_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between hover:border-[#C5A059] transition-colors"
                >
                  <div>
                    <div className="flex justify-between items-baseline gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-xl text-[#1C1B1A]">{item.name}</h4>
                        {item.recommended && (
                          <span className="px-2 py-0.5 bg-[#F5EFE6] text-[#8C6A3D] text-[9px] uppercase tracking-wider font-medium">
                            Chef’s Choice
                          </span>
                        )}
                      </div>
                      <span className="font-serif text-xl text-[#1C1B1A] font-medium">{item.price}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#68635B] font-light leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-[10px] text-[#8C857B]">
                    <span>{item.provenance || 'Fresh Daily'}</span>
                    {item.dietary && <span>{item.dietary.join(' · ')}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BEVERAGE & CELLAR */}
        {activeCategory === 'beverage' && (
          <div className="animate-fadeIn max-w-4xl mx-auto space-y-12">
            <div className="bg-[#F5F1EB] p-8 border border-[#E8E3DA] text-center">
              <Wine className="w-6 h-6 text-[#A67C52] mx-auto mb-2" />
              <h3 className="font-serif text-3xl text-[#1C1B1A]">The One Ten Cellar</h3>
              <p className="text-xs sm:text-sm text-[#68635B] font-light max-w-xl mx-auto mt-2 leading-relaxed">
                Curated by Sommelier Hélène Laurent, our program honors biodynamic, low-intervention,
                and historical growers spanning old-world classics to emerging volcanic terroirs.
              </p>
            </div>

            {/* Cocktails & Zero-Proof */}
            <div>
              <div className="border-b border-[#D5CFC4] pb-2 mb-6">
                <span className="font-serif text-2xl text-[#1C1B1A]">Artisanal Cocktails & Botanical Elixirs</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BEVERAGE_ITEMS.filter((b) => b.courseCategory === 'cocktail').map((cocktail) => (
                  <div
                    key={cocktail.id}
                    className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between hover:border-[#C5A059] transition-colors"
                  >
                    <div>
                      <div className="flex justify-between items-baseline gap-2 mb-2">
                        <h4 className="font-serif text-xl text-[#1C1B1A]">{cocktail.name}</h4>
                        <span className="font-serif text-lg text-[#1C1B1A] font-medium">{cocktail.price}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#68635B] font-light leading-relaxed">
                        {cocktail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wines by the Glass & Flights */}
            <div>
              <div className="border-b border-[#D5CFC4] pb-2 mb-6">
                <span className="font-serif text-2xl text-[#1C1B1A]">Sommelier Selections by the Glass</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BEVERAGE_ITEMS.filter((b) => b.courseCategory === 'wine').map((wine) => (
                  <div
                    key={wine.id}
                    className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between hover:border-[#C5A059] transition-colors"
                  >
                    <div>
                      <div className="flex justify-between items-baseline gap-2 mb-2">
                        <h4 className="font-serif text-xl text-[#1C1B1A]">{wine.name}</h4>
                        <span className="font-serif text-sm text-[#1C1B1A] font-medium text-right">{wine.price}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#68635B] font-light leading-relaxed">
                        {wine.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Dietary Policy Note */}
        <div className="mt-16 text-center text-xs text-[#8C857B] max-w-xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#A67C52] shrink-0" />
          <span>
            We gladly accommodate allergies and vegetarian preferences with 48 hours advance notice.
            A 20% gratuity is included on parties of six or more.
          </span>
        </div>
      </div>
    </section>
  );
};
