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
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle,
  Coins,
  ChevronRight
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
    <section id="academy" className="py-10 sm:py-16 bg-[#0c1810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Compact */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-[11px] font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Dairy Academy • Practical Masterclasses</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Farm Visits & <span className="gold-gradient-text">Practical Masterclasses</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-base text-gray-300 max-w-2xl mx-auto">
            Hands-on silage bunker packing, TMR ration balancing, automated parlour milking, and cow comfort in Githunguri.
          </p>
        </div>

        {/* Feature Banner - Compact & Horizontal on Mobile */}
        <div className="rounded-2xl overflow-hidden border border-[#d4af37]/30 mb-6 sm:mb-8 green-card-glass shadow-xl">
          <div className="flex flex-col sm:flex-row items-center">
            
            <div className="w-full sm:w-48 md:w-64 h-28 sm:h-auto sm:self-stretch relative shrink-0">
              <img
                src="/images/dairy-academy.jpg"
                alt="Practical Dairy Masterclass at John Ndege Farm Githunguri"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-[#0c1810]/70" />
              <div className="absolute top-2 left-2 bg-[#0c1810]/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-[#d4af37]/40 text-[10px] text-[#f3cf65] font-bold">
                📸 Githunguri Farm
              </div>
            </div>

            <div className="p-3.5 sm:p-5 flex-1 w-full flex flex-col justify-between">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[10px] font-bold text-[#f3cf65]">
                  <Sparkles className="w-3 h-3" />
                  <span>3,200+ Farmers Trained</span>
                </div>
                <span className="text-[11px] text-gray-300 hidden md:inline">22 Years Experience</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-200 font-semibold mb-2 line-clamp-2">
                "Learn how to produce <span className="text-[#f3cf65] font-bold">30–38 Litres daily</span> per cow using local silage & balanced TMR while reducing feed costs by 40%."
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-xs text-gray-300">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#d4af37] shrink-0" /> Silage Packing
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#d4af37] shrink-0" /> Lunch Included
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#d4af37] shrink-0" /> Dairy Handbook
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#d4af37] shrink-0" /> John Ndege Q&A
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Swipe Hint for Mobile */}
        <div className="flex md:hidden items-center justify-between text-[11px] text-gray-400 font-medium mb-2 px-1">
          <span className="flex items-center gap-1 text-[#f3cf65]">
            <span>⇄ Swipe programs horizontally</span>
          </span>
          <span>{ACADEMY_PROGRAMS.length} Options</span>
        </div>

        {/* Tiered Programs Selection - Horizontal Swipe on Mobile, 3 Cols on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-3 sm:gap-6 mb-6 sm:mb-8 no-scrollbar md:grid-cols-3 -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 md:pb-0">
          {ACADEMY_PROGRAMS.map(program => {
            const isSelected = selectedProgram.id === program.id;

            return (
              <div
                key={program.id}
                onClick={() => setSelectedProgram(program)}
                className={`w-[78vw] max-w-[290px] sm:max-w-none md:w-auto shrink-0 snap-center rounded-2xl p-4 sm:p-6 border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-[#1a3622] border-[#d4af37] shadow-lg shadow-[#d4af37]/20 scale-[1.01]'
                    : 'bg-[#102417] border-white/10 hover:border-[#d4af37]/40 hover:bg-[#142a1b]'
                }`}
              >
                {program.badge && (
                  <span className={`absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                    program.popular
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] shadow-sm'
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {program.badge}
                  </span>
                )}

                <div>
                  <div className="text-[10px] text-gray-400 font-semibold mb-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    {program.duration}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 font-['Outfit'] leading-snug">
                    {program.title}
                  </h4>

                  <p className="text-[11px] text-gray-300 mb-3 leading-relaxed line-clamp-2">
                    {program.tagline}
                  </p>

                  <div className="bg-[#0c1810] p-2.5 sm:p-3 rounded-xl border border-[#d4af37]/20 mb-3 flex items-center justify-between">
                    <span className="text-[9px] text-gray-400 uppercase tracking-wider">Fee / Person</span>
                    <div className="text-lg sm:text-xl font-black text-[#f3cf65] font-['Outfit']">
                      {formatPrice(program.priceKES, program.priceUSD)}
                    </div>
                  </div>

                  {/* Syllabus Points - Compact */}
                  <div className="space-y-1.5 mb-3">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#d4af37] block">
                      Includes:
                    </span>
                    {program.includes.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight line-clamp-1">{inc}</span>
                      </div>
                    ))}
                    {program.includes.length > 3 && (
                      <div className="text-[10px] text-gray-400 italic pl-4.5">
                        +{program.includes.length - 3} more modules included
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  className={`w-full py-2 sm:py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider transition-all mt-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] shadow-md'
                      : 'border border-[#d4af37]/40 text-[#f3cf65] hover:bg-[#1a3622]'
                  }`}
                >
                  {isSelected ? '✓ Selected' : 'Select Program'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Booking Module: Compact Horizontal Layout */}
        <div className="green-card-glass rounded-2xl p-4 sm:p-6 border border-[#d4af37]/40 shadow-xl">
          <form onSubmit={handleBooking} className="space-y-4">
            
            {/* Step 1: Horizontal Scrollable Date Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Choose Masterclass Date</span>
                </div>
                <span className="text-[10px] text-gray-400 md:hidden">⇄ Swipe dates</span>
              </div>

              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 snap-x -mx-1 px-1">
                {UPCOMING_DATES.map((item, idx) => {
                  const isDateSelected = selectedDate.date === item.date;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedDate(item)}
                      className={`shrink-0 w-36 sm:w-44 p-2 sm:p-2.5 rounded-xl border cursor-pointer transition-all snap-start flex flex-col justify-between ${
                        isDateSelected
                          ? 'border-[#d4af37] bg-[#1a3622] text-white shadow-md'
                          : 'border-white/10 bg-[#102417] text-gray-300 hover:border-[#d4af37]/40'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-[11px] leading-tight text-white">{item.date}</div>
                        <div className="text-[9px] text-gray-400 mt-0.5">{item.label}</div>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between">
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          item.slotsLeft <= 4 
                            ? 'bg-red-500/20 text-red-400 border border-red-500/40' 
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {item.slotsLeft} slots
                        </span>
                        {isDateSelected && <span className="text-[#f3cf65] text-[10px] font-bold">✓</span>}
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-1.5">
                <MapPin className="w-3 h-3 text-[#d4af37] shrink-0" />
                Venue: John Ndege Model Farm, Githunguri, Kiambu County
              </p>
            </div>

            {/* Step 2: Attendee & Contact Details - Compact Grid */}
            <div className="bg-[#102417] p-3.5 sm:p-5 rounded-xl border border-[#d4af37]/25 space-y-3">
              
              {/* Summary Header & Attendee Selector in One Line */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-2.5 border-b border-[#d4af37]/15">
                <div className="text-xs">
                  <span className="text-gray-400 text-[10px] uppercase block">Selected Program:</span>
                  <strong className="text-[#f3cf65] font-semibold">{selectedProgram.title}</strong>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-300 font-semibold">Attendees:</span>
                  <div className="flex items-center bg-[#0c1810] border border-[#d4af37]/30 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setAttendees(Math.max(1, attendees - 1))}
                      className="px-2.5 py-0.5 text-xs font-bold text-gray-300 hover:text-white hover:bg-[#1a3622]"
                    >
                      -
                    </button>
                    <span className="px-2 py-0.5 text-xs font-bold text-white min-w-[24px] text-center">
                      {attendees}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAttendees(attendees + 1)}
                      className="px-2.5 py-0.5 text-xs font-bold text-gray-300 hover:text-white hover:bg-[#1a3622]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Input Fields Side-by-Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Samuel Kariuki"
                    className="w-full px-3 py-2 rounded-lg bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                    M-Pesa Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0712 345 678"
                    className="w-full px-3 py-2 rounded-lg bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Fee Bar & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                <div className="flex items-center justify-between sm:justify-start gap-3 bg-[#0c1810] px-3 py-2 rounded-lg border border-[#d4af37]/20">
                  <div>
                    <span className="text-[9px] text-gray-400 uppercase tracking-wider block">Total Reservation</span>
                    <span className="text-[10px] text-gray-300">{attendees} Ticket{attendees > 1 ? 's' : ''} ({selectedDate.date.split(',')[1] || selectedDate.date})</span>
                  </div>
                  <div className="text-lg font-black text-[#f3cf65] font-['Outfit'] sm:ml-4">
                    {formatPrice(totalPriceKES, totalPriceUSD)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 flex-1 sm:max-w-md">
                  <button
                    type="submit"
                    className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-[11px] uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Coins className="w-3.5 h-3.5 text-[#0c1810]" />
                    <span>Pay M-Pesa</span>
                  </button>

                  <a
                    href={`https://wa.me/254722000123?text=${encodeURIComponent(
                      `Hello John Ndege Farm, I want to book ${attendees} spot(s) for the ${selectedProgram.title} on ${selectedDate.date}. My name is ${name || 'Farmer'} (${phone || 'Phone'}). Please confirm our registration.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5 text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1 pt-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Instant SMS & WhatsApp confirmation sent immediately upon booking.</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
