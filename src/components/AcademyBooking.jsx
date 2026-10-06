import React, { useState } from 'react';
import { 
  ACADEMY_PROGRAMS, 
  UPCOMING_DATES 
} from '../data/academyPrograms';
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Users, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Phone,
  MessageCircle,
  Coins
} from 'lucide-react';

export const AcademyBooking = ({ currency, onOpenMpesaWithDetails }) => {
  const [selectedProgram, setSelectedProgram] = useState(ACADEMY_PROGRAMS[0]);
  const [selectedDate, setSelectedDate] = useState(UPCOMING_DATES[0]);
  const [attendees, setAttendees] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const formatPrice = (kes, usd) => {
    if (currency === 'USD') {
      return `$${usd}`;
    }
    return `KES ${kes.toLocaleString()}`;
  };

  const totalPriceKES = selectedProgram.priceKES * attendees;
  const totalPriceUSD = selectedProgram.priceUSD * attendees;

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and phone number to reserve your Academy seats.");
      return;
    }

    onOpenMpesaWithDetails({
      title: `${selectedProgram.title} (${attendees} ${attendees === 1 ? 'Attendee' : 'Attendees'})`,
      amountKES: totalPriceKES,
      amountUSD: totalPriceUSD,
      date: selectedDate.date,
      customerName: name,
      customerPhone: phone
    });
  };

  return (
    <section id="academy" className="py-20 bg-[#0c1810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>John Ndege Dairy Academy • Practical Knowledge That Pays</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Farm Visits & <span className="gold-gradient-text">Practical Masterclasses</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">
            Learn directly from 22 years of zero-grazing experience in Githunguri. Hands-on silage bunker packing, TMR ration balancing, automated parlour milking, and cow comfort engineering.
          </p>
        </div>

        {/* Feature Hero Card with Training Photo */}
        <div className="rounded-3xl overflow-hidden border border-[#d4af37]/30 mb-14 relative green-card-glass shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[340px]">
              <img
                src="/images/dairy-academy.jpg"
                alt="Practical Dairy Masterclass at John Ndege Farm Githunguri"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1810] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#0c1810]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#d4af37]/40 text-xs text-[#f3cf65] font-bold">
                📸 Actual Masterclass Session in Githunguri
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-xs font-bold text-[#f3cf65]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>3,200+ Farmers Trained Across East Africa</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] leading-tight">
                "90% of Dairy Failure in Kenya is Caused by Poor Feeding & Housing."
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                In our Githunguri practical workshops, we teach you how to achieve 
                <strong className="text-white"> 30 - 38 Litres daily</strong> per cow using locally available Napier grass, maize silage, and custom TMR blending — cutting your feed costs by up to 40%.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Hands-on Silage Pit Packing</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Buffet Lunch & Farm Milking Included</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Printed Dairy Handbook</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Direct Q&A with John Ndege</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tiered Programs Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ACADEMY_PROGRAMS.map(program => {
            const isSelected = selectedProgram.id === program.id;

            return (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className={`rounded-3xl p-6 sm:p-7 border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-[#1a3622] border-[#d4af37] shadow-xl shadow-[#d4af37]/15 scale-102'
                    : 'bg-[#102417] border-white/10 hover:border-[#d4af37]/40 hover:bg-[#142a1b]'
                }`}
              >
                {program.badge && (
                  <span className={`absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    program.popular
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] shadow-md'
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {program.badge}
                  </span>
                )}

                <div>
                  <div className="text-xs text-gray-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    {program.duration}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                    {program.title}
                  </h4>

                  <p className="text-xs text-gray-300 mb-5 leading-relaxed">
                    {program.tagline}
                  </p>

                  <div className="bg-[#0c1810] p-4 rounded-2xl border border-[#d4af37]/20 mb-5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Investment / Person</span>
                    <div className="text-2xl font-black text-[#f3cf65] font-['Outfit']">
                      {formatPrice(program.priceKES, program.priceUSD)}
                    </div>
                  </div>

                  {/* Syllabus Points */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#d4af37] block">
                      What's Included:
                    </span>
                    {program.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] shadow-md'
                      : 'border border-[#d4af37]/40 text-[#f3cf65] hover:bg-[#1a3622]'
                  }`}
                >
                  {isSelected ? 'Selected Program' : 'Select This Program'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Booking Module: Date + Attendees + M-Pesa Checkout */}
        <div className="green-card-glass rounded-3xl p-6 sm:p-10 border-2 border-[#d4af37]/40 shadow-2xl">
          <form onSubmit={handleBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step 1: Date Selector (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#d4af37]" />
                <h4 className="text-lg font-bold text-white">Select Your Session Date</h4>
              </div>

              <div className="space-y-2">
                {UPCOMING_DATES.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedDate(item)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      selectedDate.date === item.date
                        ? 'border-[#d4af37] bg-[#1a3622] text-white shadow-md'
                        : 'border-white/10 bg-[#102417] text-gray-300 hover:border-[#d4af37]/40'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">{item.date}</div>
                      <div className="text-[10px] text-gray-400">{item.label}</div>
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      item.slotsLeft <= 4 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/40' 
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {item.slotsLeft} Slots Left
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-gray-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                Venue: John Ndege Model Farm, Githunguri, Kiambu County
              </p>
            </div>

            {/* Step 2: Attendee info & Total (7 Cols) */}
            <div className="lg:col-span-7 bg-[#102417] p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#d4af37]/20">
                <div>
                  <h4 className="font-bold text-white text-base">Booking Summary</h4>
                  <span className="text-xs text-[#f3cf65]">{selectedProgram.title}</span>
                </div>

                {/* Attendee Counter */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-300 font-semibold">Attendees:</span>
                  <div className="flex items-center bg-[#0c1810] border border-[#d4af37]/30 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setAttendees(Math.max(1, attendees - 1))}
                      className="px-3 py-1 text-sm font-bold text-gray-300 hover:text-white hover:bg-[#1a3622]"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-white min-w-[28px] text-center">
                      {attendees}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAttendees(attendees + 1)}
                      className="px-3 py-1 text-sm font-bold text-gray-300 hover:text-white hover:bg-[#1a3622]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Samuel Kariuki"
                    className="w-full px-3 py-2 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                    M-Pesa Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., 0712 345 678"
                    className="w-full px-3 py-2 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Total Display */}
              <div className="flex items-center justify-between p-3.5 bg-[#0c1810] rounded-xl border border-[#d4af37]/30">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Total Reservation Fee</span>
                  <span className="text-xs text-gray-300">({attendees} Ticket{attendees > 1 ? 's' : ''} on {selectedDate.date.split(',')[1]})</span>
                </div>
                <div className="text-2xl font-black text-[#f3cf65] font-['Outfit']">
                  {formatPrice(totalPriceKES, totalPriceUSD)}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-xs uppercase tracking-wider shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2"
                >
                  <Coins className="w-4 h-4 text-[#0c1810]" />
                  <span>Pay / Reserve via M-Pesa</span>
                </button>

                <a
                  href={`https://wa.me/254722000123?text=${encodeURIComponent(
                    `Hello John Ndege Farm, I want to book ${attendees} spot(s) for the ${selectedProgram.title} on ${selectedDate.date}. My name is ${name || 'Farmer'} (${phone || 'Phone'}). Please confirm our registration.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>

              <div className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant SMS & WhatsApp confirmation sent immediately upon payment.</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
