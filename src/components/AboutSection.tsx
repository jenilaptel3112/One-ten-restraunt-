import React from 'react';
import { PARTNER_FARMS } from '../data/restaurantData';
import { MapPin, Award, Compass, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#A67C52] font-medium block mb-2">
            The Story of One Ten
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1B1A] font-normal mb-4">
            Quiet Luxury, Rooted in SoHo
          </h2>
          <p className="font-sans text-sm text-[#7E7A73] font-light leading-relaxed">
            Housed within the storied cast-iron bones of 110 Mercer Street, One Ten is an intimate sanctuary conceived around mindful seasonality, honest hospitality, and architectural stillness.
          </p>
        </div>

        {/* Narrative & Architectural Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-[#EFEAE1] overflow-hidden border border-[#E8E3DA]">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
                alt="One Ten Interior"
                className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Architecture note card */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-[#FAF8F5]/95 backdrop-blur-xs border border-[#D5CFC4] p-5 max-w-xs shadow-md hidden sm:block">
              <span className="text-[10px] uppercase tracking-widest text-[#A67C52] font-sans block mb-1">
                Historic Cast-Iron
              </span>
              <p className="font-serif text-sm text-[#1C1B1A]">
                Original 1890 skylights, lime-washed plaster walls, and hand-rubbed bronze accents.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A67C52] font-sans font-medium">
              A Sense of Place
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1B1A] font-normal leading-snug">
              Gastronomy that whispers rather than shouts.
            </h3>
            <p className="text-sm text-[#5C574F] font-light leading-relaxed font-sans">
              Founded in 2022, One Ten was born from a desire to strip away theatrical ornamentation and return to what truly endures: the purity of ingredients, the resonance of gentle conversation, and the warmth of genuine welcome.
            </p>
            <p className="text-sm text-[#5C574F] font-light leading-relaxed font-sans">
              Executive Chef Soren Vance orchestrates each service around wood-fire embers and micro-fermentations. Each dish reflects an intimate dialogue between regional agriculture and contemporary Scandinavian and Mediterranean sensibilities.
            </p>

            <div className="pt-6 border-t border-[#EAE5DC] grid grid-cols-2 gap-6">
              <div>
                <span className="font-serif text-2xl text-[#1C1B1A] block">1890</span>
                <span className="text-[11px] uppercase tracking-wider text-[#7E7A73]">Cast-Iron Heritage Building</span>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#1C1B1A] block">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#7E7A73]">Wild, Organic & Biodynamic Sourced</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Duo */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#A67C52] font-medium block mb-2">
              Culinary Leadership
            </span>
            <h3 className="font-serif text-3xl text-[#1C1B1A]">Craft in Devoted Hands</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chef */}
            <div className="p-8 bg-[#F5F1EB] border border-[#E8E3DA] flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif text-2xl text-[#1C1B1A]">Soren Vance</h4>
                  <span className="text-[11px] uppercase tracking-widest text-[#A67C52] font-sans">
                    Executive Chef & Co-Founder
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#68635B] font-light leading-relaxed mt-3">
                  Trained across three-starred institutions in Copenhagen, Paris, and Manhattan, Chef Soren leads One Ten with an insistence on ingredient honesty. His culinary style highlights the raw integrity of produce touched only by smoke, brine, and seasonal fermentation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5DFD4] text-[11px] text-[#8C857B] italic font-serif">
                “When an ingredient has been cultivated with patience, our only responsibility as cooks is to not stand in its way.”
              </div>
            </div>

            {/* Sommelier */}
            <div className="p-8 bg-[#F5F1EB] border border-[#E8E3DA] flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-serif text-2xl text-[#1C1B1A]">Hélène Laurent</h4>
                  <span className="text-[11px] uppercase tracking-widest text-[#A67C52] font-sans">
                    Beverage Director & Master Sommelier
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#68635B] font-light leading-relaxed mt-3">
                  Born in the Loire Valley, Hélène oversees a 1,400-reference cellar emphasizing low-intervention viticulture, historic biodynamic crus, and emerging artisanal distillers. Her beverage pairings champion regional micro-terroirs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E5DFD4] text-[11px] text-[#8C857B] italic font-serif">
                “Wine is living history in a glass. It should speak of its limestone, rain, and the winemaker’s soul.”
              </div>
            </div>
          </div>
        </div>

        {/* Hyper-Local Farm Partnerships */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#A67C52] font-medium block mb-2">
              Provenance & Terroir
            </span>
            <h3 className="font-serif text-3xl text-[#1C1B1A]">Our Partner Producers</h3>
            <p className="text-xs text-[#7E7A73] font-light mt-2">
              We work in direct communion with independent growers, millers, and coastal fishermen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_FARMS.map((farm, index) => (
              <div
                key={index}
                className="p-6 bg-[#FAF8F5] border border-[#E8E3DA] flex flex-col justify-between hover:border-[#C5A059] transition-colors"
              >
                <div>
                  <div className="text-[10px] uppercase font-sans tracking-widest text-[#A67C52] mb-1">
                    {farm.specialty}
                  </div>
                  <h4 className="font-serif text-xl text-[#1C1B1A] mb-1">{farm.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#8C857B] mb-3">
                    <MapPin className="w-3 h-3 text-[#A67C52]" />
                    <span>{farm.location}</span>
                  </div>
                  <p className="text-xs text-[#68635B] font-light leading-relaxed">
                    {farm.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
