import React, { useState } from 'react';
import { RESTAURANT_INFO, FAQS } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Check, Car, Sparkles, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Private Dining Inquiry State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryPartySize, setInquiryPartySize] = useState('12');
  const [inquiryDate, setInquiryDate] = useState('');
  const [inquiryType, setInquiryType] = useState('Private Celebration');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setInquirySubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-section" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#A67C52] font-medium block mb-2">
            Location & Inquiries
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1B1A] font-normal mb-4">
            Visiting One Ten
          </h2>
          <p className="font-sans text-sm text-[#7E7A73] font-light leading-relaxed">
            Situated on cobblestone Mercer Street between Prince and Spring.
            We invite you to reach out for reservations, private dining, or press inquiries.
          </p>
        </div>

        {/* 3-Column Info Overview: Hours, Location, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Hours Card */}
          <div className="p-8 bg-[#F5F1EB] border border-[#E8E3DA] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#A67C52] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1B1A] mb-4">Hours of Service</h3>
              <div className="space-y-4 text-xs font-sans text-[#5C574F]">
                {RESTAURANT_INFO.hours.map((h, i) => (
                  <div key={i} className="pb-2 border-b border-[#EAE5DC] last:border-b-0">
                    <div className="font-medium text-[#1C1B1A]">{h.service}</div>
                    <div className="text-[#7E7A73] text-[11px]">{h.days}</div>
                    <div className="text-[#A67C52] font-mono mt-0.5">{h.hours}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 text-[10px] uppercase tracking-wider text-[#8C857B]">
              Kitchen last orders 45 min prior to closing
            </div>
          </div>

          {/* Location & Arrival Card */}
          <div className="p-8 bg-[#F5F1EB] border border-[#E8E3DA] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#A67C52] mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1B1A] mb-4">Location & Transit</h3>
              <div className="space-y-3 text-xs text-[#5C574F]">
                <p className="font-medium text-sm text-[#1C1B1A]">
                  {RESTAURANT_INFO.address}
                </p>
                <p className="text-[#7E7A73]">
                  {RESTAURANT_INFO.neighborhood}
                </p>
                <div className="pt-2 border-t border-[#EAE5DC] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#A67C52]" />
                    <span>Subway: Prince St (N, Q, R, W) — 2 min</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#A67C52]" />
                    <span>Subway: Spring St (6, C, E) — 4 min</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8C6A3D]">
                    <Car className="w-3.5 h-3.5 shrink-0" />
                    <span>Complimentary Valet from 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=110+Mercer+Street+New+York+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[#1C1B1A] hover:text-[#A67C52] font-medium transition-colors"
              >
                <span>Open in Google Maps</span>
                <span className="text-[#A67C52]">→</span>
              </a>
            </div>
          </div>

          {/* Direct Concierge Card */}
          <div className="p-8 bg-[#F5F1EB] border border-[#E8E3DA] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#A67C52] mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#1C1B1A] mb-4">Direct Contact</h3>
              <div className="space-y-4 text-xs font-sans text-[#5C574F]">
                <div>
                  <span className="text-[#7E7A73] uppercase tracking-wider block text-[10px]">
                    Dining Room Telephone
                  </span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="font-mono text-sm text-[#1C1B1A] hover:text-[#A67C52] transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[#7E7A73] uppercase tracking-wider block text-[10px]">
                    General & Reservations Email
                  </span>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-[#1C1B1A] hover:text-[#A67C52] transition-colors block truncate"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>

                <div>
                  <span className="text-[#7E7A73] uppercase tracking-wider block text-[10px]">
                    Private Events & Sommelier
                  </span>
                  <a
                    href={`mailto:${RESTAURANT_INFO.conciergeEmail}`}
                    className="text-[#1C1B1A] hover:text-[#A67C52] transition-colors block truncate"
                  >
                    {RESTAURANT_INFO.conciergeEmail}
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 text-[10px] uppercase tracking-wider text-[#8C857B]">
              Concierge desk responds daily 10am – 6pm
            </div>
          </div>
        </div>

        {/* Private Dining Inquiry & FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Private Dining Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F5F1EB] border border-[#E8E3DA] p-8 sm:p-10">
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A67C52] font-sans font-medium">
                Private Gatherings & Buyouts
              </span>
              <h3 className="font-serif text-3xl text-[#1C1B1A] mt-1 mb-2">
                Private Dining Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-[#68635B] font-light">
                For gatherings in The Private Library (up to 12 guests) or full architectural buyouts (up to 75 guests), our events team crafts custom tasting menus and cellar pairings.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="bg-[#FAF8F5] border border-[#C5A059] p-8 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] text-[#A67C52] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-[#1C1B1A] mb-2">
                  Inquiry Received with Appreciation
                </h4>
                <p className="text-xs text-[#68635B] font-light max-w-md mx-auto mb-6">
                  Our private dining director will review your event details and contact you within 24 hours with custom menu proposals and room availability.
                </p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="px-6 py-2.5 border border-[#1C1B1A] text-[#1C1B1A] text-xs uppercase tracking-widest hover:bg-[#1C1B1A] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] text-[#59554E] block mb-1 font-medium">Your Name *</span>
                    <input
                      type="text"
                      placeholder="Julian Montgomery"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                      required
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#59554E] block mb-1 font-medium">Email Address *</span>
                    <input
                      type="email"
                      placeholder="julian@company.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[11px] text-[#59554E] block mb-1 font-medium">Phone *</span>
                    <input
                      type="tel"
                      placeholder="+1 (212) 555-0199"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                      required
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#59554E] block mb-1 font-medium">Estimated Guests</span>
                    <input
                      type="number"
                      min="6"
                      max="80"
                      value={inquiryPartySize}
                      onChange={(e) => setInquiryPartySize(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#59554E] block mb-1 font-medium">Target Date</span>
                    <input
                      type="date"
                      value={inquiryDate}
                      onChange={(e) => setInquiryDate(e.target.value)}
                      className="w-full px-4 py-2 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-[#59554E] block mb-1 font-medium">Nature of Event</span>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                  >
                    <option value="Private Celebration">Private Milestone / Celebration</option>
                    <option value="Corporate Dinner">Executive Board / Corporate Dinner</option>
                    <option value="Intimate Wedding">Intimate Wedding Dinner</option>
                    <option value="Sommelier Tasting">Sommelier Cellar Masterclass</option>
                    <option value="Full Buyout">Full Restaurant Buyout</option>
                  </select>
                </div>

                <div>
                  <span className="text-[11px] text-[#59554E] block mb-1 font-medium">Event Details & Specific Wishes</span>
                  <textarea
                    rows={3}
                    placeholder="Provide any dietary notes, preferred flow, or specific wine requirements..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#1C1B1A] text-[#FAF8F5] hover:bg-[#A67C52] text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Transmitting Details...' : 'Submit Private Dining Request'}</span>
                </button>
              </form>
            )}
          </div>

          {/* FAQs Accordion (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A67C52] font-sans font-medium block mb-1">
                Guest Guidance
              </span>
              <h3 className="font-serif text-3xl text-[#1C1B1A] mb-6">
                Frequently Inquired
              </h3>

              <div className="space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-[#E8E3DA] bg-[#FAF8F5] transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs font-serif font-medium text-[#1C1B1A] cursor-pointer hover:text-[#A67C52] transition-colors"
                      >
                        <span className="text-sm">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#A67C52] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#8C857B] shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-[#68635B] font-light leading-relaxed font-sans border-t border-[#F0EBE2]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Note box */}
            <div className="mt-8 p-4 bg-[#FAF8F5] border border-[#E8E3DA] text-[11px] text-[#7E7A73] leading-relaxed">
              Have a special inquiry not covered above? Please contact our hospitality host at{' '}
              <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#A67C52] hover:underline">
                {RESTAURANT_INFO.email}
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
