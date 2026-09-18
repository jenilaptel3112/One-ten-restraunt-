import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Clock, Check, Sparkles, AlertCircle, Phone, Mail, ArrowRight, X } from 'lucide-react';
import { ReservationData } from '../types';

interface ReservationSectionProps {
  onSuccessNotice?: (msg: string) => void;
}

interface DiningSpace {
  id: ReservationData['experience'];
  title: string;
  badge: string;
  description: string;
  capacity: string;
  minNotice?: string;
}

const DINING_SPACES: DiningSpace[] = [
  {
    id: 'dining-room',
    title: 'The Main Dining Room',
    badge: 'Signature Experience',
    description: 'Crisp pressed Belgian linen, hand-thrown ceramics, and warm architectural lighting.',
    capacity: '1 – 8 Guests'
  },
  {
    id: 'solarium',
    title: 'The Cast-Iron Solarium',
    badge: 'Natural Light & Greenery',
    description: 'Sunlight and starlight beneath 1890s glass skylights, surrounded by potted Mediterranean olives.',
    capacity: '2 – 6 Guests'
  },
  {
    id: 'chefs-counter',
    title: 'The Chef’s Hearth Counter',
    badge: 'Immersive Culinary Pass',
    description: 'Eight soapstone high-chairs directly overlooking the birchwood grill and plating station.',
    capacity: '1 – 4 Guests'
  },
  {
    id: 'private-library',
    title: 'The Private Library Room',
    badge: 'Secluded Gathering',
    description: 'Dedicated sommelier service and private vinyl sound system for intimate parties.',
    capacity: '6 – 12 Guests'
  }
];

export const ReservationSection: React.FC<ReservationSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'book' | 'lookup'>('book');

  // Booking Form State
  const [selectedExperience, setSelectedExperience] = useState<ReservationData['experience']>('dining-room');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // default to tomorrow
    return today.toISOString().split('T')[0];
  });
  const [serviceType, setServiceType] = useState<'dinner' | 'lunch'>('dinner');
  const [selectedTime, setSelectedTime] = useState<string>('18:30');
  
  // Guest Details
  const [guestName, setGuestName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('Dinner');
  const [dietary, setDietary] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Confirmation State
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Lookup Existing Booking State
  const [lookupCode, setLookupCode] = useState<string>('');
  const [lookupResult, setLookupResult] = useState<ReservationData | null>(null);
  const [lookupError, setLookupError] = useState<string | null>(null);

  // Demo seeded reservation
  const [storedReservations, setStoredReservations] = useState<ReservationData[]>([
    {
      id: 'OT-48192',
      experience: 'dining-room',
      guests: 2,
      date: '2026-09-24',
      time: '19:30',
      guestName: 'Eleanor Vance',
      email: 'eleanor.vance@example.com',
      phone: '+1 (212) 555-8910',
      occasion: 'Anniversary',
      dietaryRestrictions: 'Pescatarian',
      specialRequests: 'Quiet corner table preferred',
      status: 'confirmed',
      createdAt: '2026-09-17'
    }
  ]);

  const dinnerTimes = ['17:30', '18:00', '18:30', '19:00', '19:30', '20:15', '21:00', '21:30'];
  const lunchTimes = ['12:00', '12:30', '13:00', '13:30', '14:00'];
  const availableTimes = serviceType === 'dinner' ? dinnerTimes : lunchTimes;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !email || !phone) {
      alert('Please fill in your name, email, and contact phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newBooking: ReservationData = {
        id: `OT-${Math.floor(10000 + Math.random() * 90000)}`,
        experience: selectedExperience,
        guests: guestCount,
        date: selectedDate,
        time: selectedTime,
        guestName,
        email,
        phone,
        occasion,
        dietaryRestrictions: dietary,
        specialRequests,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };

      setStoredReservations(prev => [newBooking, ...prev]);
      setConfirmedReservation(newBooking);
      setIsSubmitting(false);
    }, 600);
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError(null);
    const found = storedReservations.find(
      r => r.id.toLowerCase() === lookupCode.trim().toLowerCase() ||
           r.email.toLowerCase() === lookupCode.trim().toLowerCase()
    );

    if (found) {
      setLookupResult(found);
    } else {
      setLookupError('No reservation found matching this reference code or email address. Try demo code "OT-48192".');
    }
  };

  const handleCancelBooking = (id: string) => {
    if (confirm('Are you sure you wish to cancel this reservation?')) {
      setStoredReservations(prev =>
        prev.map(r => (r.id === id ? { ...r, status: 'cancelled' } : r))
      );
      if (lookupResult?.id === id) {
        setLookupResult({ ...lookupResult, status: 'cancelled' });
      }
      if (confirmedReservation?.id === id) {
        setConfirmedReservation({ ...confirmedReservation, status: 'cancelled' });
      }
    }
  };

  const handleDownloadCalendarIcs = (res: ReservationData) => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//One Ten Restaurant//Reservations//EN
BEGIN:VEVENT
UID:${res.id}@onetenrestaurant.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${res.date.replace(/-/g, '')}T${res.time.replace(':', '')}00
SUMMARY:Dinner at One Ten (${res.experience})
DESCRIPTION:Reservation #${res.id} for ${res.guests} guests at One Ten, 110 Mercer Street, New York, NY 10012.
LOCATION:110 Mercer Street, New York, NY 10012
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `One-Ten-Reservation-${res.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="reservations-section" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#F5F1EB] border-t border-[#E8E3DA]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#A67C52] font-medium block mb-2">
            Table Reservations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1B1A] font-normal mb-4">
            Book Your Table
          </h2>
          <p className="font-sans text-sm text-[#7E7A73] font-light leading-relaxed">
            Reservations are released 30 days in advance at 10:00 AM EST.
            For private parties of 7 or more, please contact our private dining concierge.
          </p>

          {/* Toggle between Reserve and Lookup */}
          <div className="inline-flex p-1 bg-[#FAF8F5] border border-[#E0DBD0] mt-6">
            <button
              onClick={() => {
                setActiveTab('book');
                setConfirmedReservation(null);
              }}
              className={`px-6 py-2 text-xs uppercase tracking-widest font-medium cursor-pointer transition-colors ${
                activeTab === 'book'
                  ? 'bg-[#1C1B1A] text-[#FAF8F5]'
                  : 'text-[#68635B] hover:text-[#1C1B1A]'
              }`}
            >
              Reserve a Table
            </button>
            <button
              onClick={() => setActiveTab('lookup')}
              className={`px-6 py-2 text-xs uppercase tracking-widest font-medium cursor-pointer transition-colors ${
                activeTab === 'lookup'
                  ? 'bg-[#1C1B1A] text-[#FAF8F5]'
                  : 'text-[#68635B] hover:text-[#1C1B1A]'
              }`}
            >
              Manage Booking
            </button>
          </div>
        </div>

        {/* TAB 1: NEW RESERVATION FLOW */}
        {activeTab === 'book' && (
          <div>
            {/* Confirmation View */}
            {confirmedReservation ? (
              <div className="bg-[#FAF8F5] border border-[#C5A059] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#F5EFE6] border border-[#C5A059] flex items-center justify-center text-[#A67C52] mx-auto mb-6">
                  <Check className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#A67C52] font-semibold block mb-1">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1B1A] mb-2">
                  We look forward to welcoming you
                </h3>
                <p className="text-xs sm:text-sm text-[#7E7A73] mb-8 font-light">
                  A confirmation has been recorded under reference{' '}
                  <span className="font-mono font-medium text-[#1C1B1A]">{confirmedReservation.id}</span>.
                </p>

                {/* Details Card */}
                <div className="bg-[#F5F1EB] border border-[#E8E3DA] p-6 text-left space-y-3 mb-8 text-xs font-sans">
                  <div className="flex justify-between py-1 border-b border-[#E5DFD4]">
                    <span className="text-[#7E7A73] uppercase tracking-wider">Guest Name</span>
                    <span className="font-medium text-[#1C1B1A]">{confirmedReservation.guestName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E5DFD4]">
                    <span className="text-[#7E7A73] uppercase tracking-wider">Seating Area</span>
                    <span className="font-medium text-[#1C1B1A]">
                      {DINING_SPACES.find(s => s.id === confirmedReservation.experience)?.title}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E5DFD4]">
                    <span className="text-[#7E7A73] uppercase tracking-wider">Date & Time</span>
                    <span className="font-medium text-[#1C1B1A]">
                      {confirmedReservation.date} at {confirmedReservation.time}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E5DFD4]">
                    <span className="text-[#7E7A73] uppercase tracking-wider">Party Size</span>
                    <span className="font-medium text-[#1C1B1A]">{confirmedReservation.guests} Guests</span>
                  </div>
                  {confirmedReservation.occasion && (
                    <div className="flex justify-between py-1 border-b border-[#E5DFD4]">
                      <span className="text-[#7E7A73] uppercase tracking-wider">Occasion</span>
                      <span className="font-medium text-[#1C1B1A]">{confirmedReservation.occasion}</span>
                    </div>
                  )}
                  {confirmedReservation.dietaryRestrictions && (
                    <div className="flex justify-between py-1">
                      <span className="text-[#7E7A73] uppercase tracking-wider">Dietary Notes</span>
                      <span className="font-medium text-[#1C1B1A]">{confirmedReservation.dietaryRestrictions}</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => handleDownloadCalendarIcs(confirmedReservation)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#1C1B1A] text-[#FAF8F5] hover:bg-[#A67C52] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Add to Calendar (.ics)
                  </button>
                  <button
                    onClick={() => setConfirmedReservation(null)}
                    className="w-full sm:w-auto px-6 py-3 border border-[#1C1B1A] text-[#1C1B1A] hover:bg-[#1C1B1A] hover:text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Book Another Table
                  </button>
                </div>

                <div className="mt-8 text-[11px] text-[#8C857B] leading-relaxed">
                  Notice: Please inform us of any cancellations at least 24 hours prior to your seating.
                  Arrival address: 110 Mercer Street, SoHo.
                </div>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleSubmitBooking} className="bg-[#FAF8F5] border border-[#E8E3DA] p-6 sm:p-10 shadow-xs">
                {/* Step 1: Dining Space Selection */}
                <div className="mb-10">
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#7E7A73] font-medium mb-3">
                    01. Select Seating Atmosphere
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {DINING_SPACES.map((space) => {
                      const isSelected = selectedExperience === space.id;
                      return (
                        <div
                          key={space.id}
                          onClick={() => setSelectedExperience(space.id)}
                          className={`p-5 border text-left cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'border-[#1C1B1A] bg-[#F5F1EB] shadow-xs ring-1 ring-[#1C1B1A]'
                              : 'border-[#E5DFD4] bg-white hover:border-[#A67C52]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-serif text-lg text-[#1C1B1A] font-medium">
                              {space.title}
                            </span>
                            <span className="text-[10px] uppercase font-sans tracking-widest text-[#A67C52]">
                              {space.capacity}
                            </span>
                          </div>
                          <span className="inline-block text-[10px] uppercase tracking-wider text-[#7E7A73] bg-[#EAE4D9] px-2 py-0.5 mb-2">
                            {space.badge}
                          </span>
                          <p className="text-xs text-[#68635B] font-light leading-relaxed">
                            {space.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Party Size, Date & Service */}
                <div className="mb-10 pt-8 border-t border-[#EAE5DC]">
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#7E7A73] font-medium mb-4">
                    02. Party Size & Service Date
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Party size */}
                    <div>
                      <span className="text-xs text-[#59554E] block mb-2 font-medium">Number of Guests</span>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <button
                            type="button"
                            key={num}
                            onClick={() => setGuestCount(num)}
                            className={`flex-1 py-2 text-xs font-sans transition-colors cursor-pointer border ${
                              guestCount === num
                                ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A]'
                                : 'bg-white text-[#68635B] border-[#D8D2C7] hover:border-[#A67C52]'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                      <span className="text-[10px] text-[#8C857B] block mt-1.5">
                        For parties of 9 or larger, please submit a Private Dining Inquiry below.
                      </span>
                    </div>

                    {/* Date Picker */}
                    <div>
                      <span className="text-xs text-[#59554E] block mb-2 font-medium">Reservation Date</span>
                      <div className="relative">
                        <input
                          type="date"
                          value={selectedDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full px-4 py-2 bg-white border border-[#D8D2C7] text-[#1C1B1A] text-xs font-sans focus:outline-hidden focus:border-[#A67C52]"
                          required
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <span className="text-xs text-[#59554E] block mb-2 font-medium">Dining Service</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setServiceType('dinner')}
                          className={`flex-1 py-2 text-xs uppercase tracking-wider font-sans transition-colors cursor-pointer border ${
                            serviceType === 'dinner'
                              ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A]'
                              : 'bg-white text-[#68635B] border-[#D8D2C7]'
                          }`}
                        >
                          Dinner (5:30 PM+)
                        </button>
                        <button
                          type="button"
                          onClick={() => setServiceType('lunch')}
                          className={`flex-1 py-2 text-xs uppercase tracking-wider font-sans transition-colors cursor-pointer border ${
                            serviceType === 'lunch'
                              ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A]'
                              : 'bg-white text-[#68635B] border-[#D8D2C7]'
                          }`}
                        >
                          Lunch (12:00 PM+)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="mt-6">
                    <span className="text-xs text-[#59554E] block mb-2 font-medium">Available Seating Times</span>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                      {availableTimes.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-1 text-center text-xs font-sans transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-[#1C1B1A] text-[#FAF8F5] border-[#1C1B1A] font-medium'
                                : 'bg-white text-[#4A4742] border-[#D8D2C7] hover:border-[#A67C52]'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 3: Guest & Contact Information */}
                <div className="mb-10 pt-8 border-t border-[#EAE5DC]">
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#7E7A73] font-medium mb-4">
                    03. Guest Details & Preferences
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <span className="text-xs text-[#59554E] block mb-1.5 font-medium">Full Name *</span>
                      <input
                        type="text"
                        placeholder="e.g. Julian Montgomery"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                        required
                      />
                    </div>

                    <div>
                      <span className="text-xs text-[#59554E] block mb-1.5 font-medium">Email Address *</span>
                      <input
                        type="email"
                        placeholder="julian@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                        required
                      />
                    </div>

                    <div>
                      <span className="text-xs text-[#59554E] block mb-1.5 font-medium">Mobile Phone *</span>
                      <input
                        type="tel"
                        placeholder="+1 (212) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <span className="text-xs text-[#59554E] block mb-1.5 font-medium">Special Occasion</span>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                      >
                        <option value="Dinner">Standard Dinner / Gathering</option>
                        <option value="Anniversary">Anniversary Celebration</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Date Night">Date Night</option>
                        <option value="Business">Business Entertainment</option>
                        <option value="Tasting Experience">Chef’s Tasting Focus</option>
                      </select>
                    </div>

                    <div>
                      <span className="text-xs text-[#59554E] block mb-1.5 font-medium">Allergies & Dietary Notes</span>
                      <input
                        type="text"
                        placeholder="e.g. Shellfish allergy, vegetarian, gluten-free"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="text-xs text-[#59554E] block mb-1.5 font-medium">Special Requests or Seating Preferences</span>
                    <input
                      type="text"
                      placeholder="e.g. Quiet area, booth seating if available"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                    />
                  </div>
                </div>

                {/* Submit button & policy */}
                <div className="pt-6 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-[#8C857B] font-light leading-snug">
                    By reserving, you agree to our 24-hour cancellation policy and smart casual attire guidelines.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 bg-[#1C1B1A] text-[#FAF8F5] hover:bg-[#A67C52] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Confirming Table...' : 'Confirm Reservation'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: MANAGE / LOOKUP RESERVATION */}
        {activeTab === 'lookup' && (
          <div className="bg-[#FAF8F5] border border-[#E8E3DA] p-8 sm:p-10 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] mb-2 text-center">
              Retrieve Your Reservation
            </h3>
            <p className="text-xs text-[#7E7A73] text-center font-light mb-6">
              Enter your booking reference code (e.g. <span className="font-mono text-[#1C1B1A]">OT-48192</span>) or the email address used during booking.
            </p>

            <form onSubmit={handleLookup} className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Reservation Code or Email"
                value={lookupCode}
                onChange={(e) => setLookupCode(e.target.value)}
                className="flex-1 px-4 py-3 bg-white border border-[#D8D2C7] text-xs font-sans text-[#1C1B1A] focus:outline-hidden focus:border-[#A67C52]"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#1C1B1A] text-[#FAF8F5] hover:bg-[#A67C52] text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
              >
                Lookup
              </button>
            </form>

            {lookupError && (
              <div className="p-4 bg-[#FFF5F5] border border-[#FED7D7] text-red-800 text-xs flex items-center gap-2 mb-6">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{lookupError}</span>
              </div>
            )}

            {lookupResult && (
              <div className="bg-[#F5F1EB] border border-[#E8E3DA] p-6 text-xs font-sans space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD4]">
                  <span className="font-serif text-lg text-[#1C1B1A]">
                    Reservation #{lookupResult.id}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium ${
                      lookupResult.status === 'confirmed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {lookupResult.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[#4E4A44]">
                  <div><strong>Guest:</strong> {lookupResult.guestName}</div>
                  <div><strong>Party:</strong> {lookupResult.guests} Guests</div>
                  <div><strong>Date:</strong> {lookupResult.date}</div>
                  <div><strong>Time:</strong> {lookupResult.time}</div>
                  <div><strong>Space:</strong> {lookupResult.experience}</div>
                  <div><strong>Occasion:</strong> {lookupResult.occasion || 'Dining'}</div>
                </div>

                {lookupResult.dietaryRestrictions && (
                  <div className="pt-2 text-[#68635B]">
                    <strong>Dietary Notes:</strong> {lookupResult.dietaryRestrictions}
                  </div>
                )}

                {lookupResult.status === 'confirmed' && (
                  <div className="pt-4 border-t border-[#E5DFD4] flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => handleDownloadCalendarIcs(lookupResult)}
                      className="text-[#A67C52] hover:underline cursor-pointer"
                    >
                      Download Calendar Invite
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCancelBooking(lookupResult.id)}
                      className="text-red-700 hover:underline cursor-pointer"
                    >
                      Cancel Reservation
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
