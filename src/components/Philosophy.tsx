import React from 'react';
import { Sparkles, Utensils, HeartHandshake } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy-section" className="py-20 md:py-28 bg-[#F5F1EB] border-y border-[#E8E3DA]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial statement */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#A67C52] font-medium block mb-3">
            The Philosophy of One Ten
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1B1A] font-normal leading-snug">
            Restraint is the highest expression of culinary craft.
          </h2>
          <div className="w-12 h-[1px] bg-[#A67C52] mx-auto my-6" />
          <p className="font-sans text-sm sm:text-base text-[#68635B] leading-relaxed font-light">
            We believe that true luxury is not defined by excess, but by intention.
            Every vegetable, line-caught fish, and single-vineyard wine served at One Ten
            carries an honest story of the soil, water, and hands that brought it to life.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Pillar 1 */}
          <div className="bg-[#FAF8F5] p-8 sm:p-10 border border-[#E8E3DA] flex flex-col justify-between transition-all hover:border-[#C5A059] duration-300">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F5F1EB] flex items-center justify-center text-[#A67C52] mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif text-[#A67C52] tracking-widest block mb-1">01 / PROVENANCE</span>
              <h3 className="font-serif text-2xl text-[#1C1B1A] mb-3">Hyper-Local Sourcing</h3>
              <p className="font-sans text-sm text-[#68635B] leading-relaxed font-light">
                Our kitchen partners exclusively with small independent family farms in the Hudson Valley and day-boat fishermen off Montauk Point. Produce arrives harvested within hours.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE5DC] text-[11px] uppercase tracking-wider text-[#8C857B]">
              Daily Market Ingress
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#FAF8F5] p-8 sm:p-10 border border-[#E8E3DA] flex flex-col justify-between transition-all hover:border-[#C5A059] duration-300">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F5F1EB] flex items-center justify-center text-[#A67C52] mb-6">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif text-[#A67C52] tracking-widest block mb-1">02 / TECHNIQUE</span>
              <h3 className="font-serif text-2xl text-[#1C1B1A] mb-3">Embers & Fermentation</h3>
              <p className="font-sans text-sm text-[#68635B] leading-relaxed font-light">
                Cooking over native birch and applewood coals, paired with seasonal garums, vinegars, and koji developed in our on-site micro-fermentation cellar.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE5DC] text-[11px] uppercase tracking-wider text-[#8C857B]">
              Ancient Methods, Modern Precision
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#FAF8F5] p-8 sm:p-10 border border-[#E8E3DA] flex flex-col justify-between transition-all hover:border-[#C5A059] duration-300">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#F5F1EB] flex items-center justify-center text-[#A67C52] mb-6">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif text-[#A67C52] tracking-widest block mb-1">03 / HOSPITALITY</span>
              <h3 className="font-serif text-2xl text-[#1C1B1A] mb-3">Unpretentious Grace</h3>
              <p className="font-sans text-sm text-[#68635B] leading-relaxed font-light">
                Fine dining without stiff ceremony. Our dining room is designed as an intimate sanctuary where warmth, acoustics, lighting, and pacing are tailored to your evening.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE5DC] text-[11px] uppercase tracking-wider text-[#8C857B]">
              Attentive & Intuitive Care
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
