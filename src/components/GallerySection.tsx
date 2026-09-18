import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { X, ZoomIn, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'cuisine', label: 'Culinary Craft' },
    { id: 'ambiance', label: 'Atmosphere & Architecture' },
    { id: 'cellar', label: 'Cellar & Spirits' },
    { id: 'craft', label: 'Hearth & Service' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery-section" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#F5F1EB] border-t border-[#E8E3DA]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#A67C52] font-medium block mb-2">
            Visual Vignettes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1B1A] font-normal mb-4">
            Atmosphere & Craft
          </h2>
          <p className="font-sans text-sm text-[#7E7A73] font-light leading-relaxed">
            Glimpses into our cast-iron dining room, wood-fire kitchen, subterranean wine cellar, and seasonal plates.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-sans transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A]'
                  : 'bg-[#FAF8F5] text-[#68635B] border-[#DCD6CC] hover:border-[#A67C52]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-[#FAF8F5] border border-[#E8E3DA] overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-square overflow-hidden bg-[#EFEAE1]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1C1B1A]/0 group-hover:bg-[#1C1B1A]/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5]/90 text-[#1C1B1A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100 duration-300">
                    <ZoomIn className="w-4 h-4 text-[#A67C52]" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5]">
                <span className="text-[9px] uppercase tracking-widest text-[#A67C52] font-sans block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg text-[#1C1B1A] mb-1 group-hover:text-[#A67C52] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#7E7A73] font-light line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-[#1C1B1A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#FAF8F5] border border-[#E8E3DA] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] text-[#1C1B1A] rounded-full transition-colors cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
                <div className="md:col-span-8 bg-[#000] flex items-center justify-center">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                </div>

                <div className="md:col-span-4 p-8 flex flex-col justify-between bg-[#FAF8F5]">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#A67C52] font-sans font-medium block mb-2">
                      {activeItem.category} · One Ten Vignette
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] mb-4">
                      {activeItem.title}
                    </h3>
                    <div className="w-8 h-[1px] bg-[#A67C52] mb-4" />
                    <p className="text-xs sm:text-sm text-[#68635B] font-light leading-relaxed">
                      {activeItem.caption}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#8C857B]">
                    <span>110 Mercer Street, SoHo</span>
                    <button
                      onClick={() => setActiveItem(null)}
                      className="text-[#1C1B1A] uppercase tracking-wider hover:text-[#A67C52] cursor-pointer"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
