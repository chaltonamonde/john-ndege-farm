import React, { useState } from 'react';
import { 
  Building2, 
  Calculator, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  ArrowRight, 
  Download, 
  MessageCircle, 
  CheckCircle2, 
  ShieldAlert, 
  Layers, 
  MapPin, 
  Clock, 
  Coins, 
  TrendingUp,
  FileCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

const HERD_SIZES = [
  { id: "5-10", label: "Smallholder Unit (5 - 10 Cows)", cows: 8, baseCostKES: 680000, weeks: "2 - 3 Weeks" },
  { id: "12-25", label: "Commercial Unit (12 - 25 Cows)", cows: 20, baseCostKES: 1650000, weeks: "4 - 5 Weeks", popular: true },
  { id: "26-50", label: "Mid-Sized Dairy Farm (26 - 50 Cows)", cows: 38, baseCostKES: 3100000, weeks: "6 - 7 Weeks" },
  { id: "50-100+", label: "Commercial Agro-Complex (50 - 100+ Cows)", cows: 75, baseCostKES: 5800000, weeks: "8 - 10 Weeks" }
];

const FLOORING_OPTIONS = [
  { id: "grooved-concrete", label: "Grooved Non-Slip Concrete Flooring", desc: "Engineered 1:50 drainage slope, diamond tread grooving to prevent cow hoof slipping and injuries.", extraKES: 0 },
  { id: "concrete-plus-rubber", label: "Grooved Concrete + 30mm Vulcanized Cow Rubber Mats", desc: "Premium cow comfort mats for free stalls. Clinically proven to reduce mastitis by 90% and increase rest time to 14 hrs/day.", extraKES: 240000, recommended: true }
];

const ROOFING_OPTIONS = [
  { id: "timber-boxprofile", label: "Treated Heavy Timber + Gauge 28 Box-Profile Sheets", desc: "Treated Eucalyptus poles, anti-rot bitumen base, high-clearance ridge ventilation.", extraKES: 0 },
  { id: "galvanized-steel", label: "Industrial Hot-Dip Galvanized Steel Trusses", desc: "Ultra-durable lifetime steel construction, zero termite issues, open-span without central poles.", extraKES: 450000, recommended: true }
];

const ADDONS = [
  { id: "biogas", label: "Continuous Bio-Digester System (18m³ Slurry Plant)", costKES: 220000, desc: "Converts daily cow manure into free kitchen gas & electricity flare plus bio-fertilizer." },
  { id: "milking-parlour", label: "Integrated Milking Parlour & Milk Cooling Room", costKES: 380000, desc: "Dedicated clean hygiene bay with automated piping hooks and non-porous tiled walls." },
  { id: "auto-drinkers", label: "Automated Push-Paddle Stainless Steel Water Drinkers", costKES: 95000, desc: "Ensures 24/7 fresh pressurized water. Essential for producing 35+ liters of milk daily." },
  { id: "silage-bunker", label: "50-Ton Heavy Masonry Silage Bunker Pit", costKES: 160000, desc: "Reinforced retaining walls for airtight fodder preservation and zero silage spoilage." }
];

const COUNTIES = [
  "Kiambu County",
  "Nakuru County",
  "Nyandarua County",
  "Uasin Gishu / Eldoret",
  "Nyeri County",
  "Murang'a County",
  "Machakos County",
  "Kirinyaga County",
  "Meru / Embu",
  "Nandi / Kericho",
  "Kisii / Western Kenya",
  "Diaspora / Uganda / Rwanda"
];

export const CowshedEstimator = ({ currency }) => {
  const [step, setStep] = useState(1);
  const [herdSize, setHerdSize] = useState(HERD_SIZES[1]);
  const [flooring, setFlooring] = useState(FLOORING_OPTIONS[1]);
  const [roofing, setRoofing] = useState(ROOFING_OPTIONS[1]);
  const [selectedAddons, setSelectedAddons] = useState(["biogas", "auto-drinkers"]);
  const [county, setCounty] = useState("Kiambu County");
  
  // Lead info
  const [farmerName, setFarmerName] = useState("");
  const [farmerPhone, setFarmerPhone] = useState("");
  const [targetDate, setTargetDate] = useState("Within 30 Days");
  const [quoteGenerated, setQuoteGenerated] = useState(false);

  // Toggle addon
  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const addonsCost = selectedAddons.reduce((acc, id) => {
    const item = ADDONS.find(a => a.id === id);
    return acc + (item ? item.costKES : 0);
  }, 0);

  const totalMinKES = herdSize.baseCostKES + flooring.extraKES + roofing.extraKES + addonsCost;
  const totalMaxKES = Math.round(totalMinKES * 1.15); // +15% upper bound for site-specific variations

  const convertPrice = (kes) => {
    if (currency === 'USD') {
      return `$${Math.round(kes / 130).toLocaleString()}`;
    }
    return `KES ${kes.toLocaleString()}`;
  };

  const handleGenerateQuote = (e) => {
    e.preventDefault();
    if (!farmerName || !farmerPhone) {
      alert("Please enter your name and phone number to receive your formal quotation.");
      return;
    }
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setQuoteGenerated(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello John Ndege Farm,
I just calculated a Cowshed Construction Estimate on your website:
- Farmer Name: ${farmerName}
- Phone: ${farmerPhone}
- Location: ${county}
- Herd Capacity: ${herdSize.label}
- Flooring: ${flooring.label}
- Roofing/Truss: ${roofing.label}
- Selected Add-ons: ${selectedAddons.map(id => ADDONS.find(a => a.id === id)?.label).join(", ")}
- Estimated Budget Range: ${convertPrice(totalMinKES)} - ${convertPrice(totalMaxKES)}
- Target Construction Date: ${targetDate}

Please confirm contractor availability and schedule a site survey in ${county}.`;
    return `https://wa.me/254722000123?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="estimator" className="py-20 bg-[#0f2015] relative overflow-hidden">
      
      {/* Decorative background grid and lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a3622]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>500+ Sheds Built • Instant Cost Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Interactive Zero-Grazing <span className="gold-gradient-text">Cowshed Estimator</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">
            Configure your dream dairy shed in 4 quick steps. Receive a transparent bill of quantities breakdown based on real current construction rates in Kenya.
          </p>
        </div>

        {/* Multi-step Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Step Configuration (7 Cols) */}
          <div className="lg:col-span-7 green-card-glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#d4af37]/30">
            
            {/* Step Progress Tracker */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#d4af37]/20">
              <div className="flex items-center gap-2 sm:gap-3">
                {[1, 2, 3, 4].map(s => (
                  <button
                    key={s}
                    onClick={() => setStep(s)}
                    className={`w-9 h-9 rounded-full font-bold text-xs flex items-center justify-center transition-all ${
                      step === s
                        ? 'bg-[#d4af37] text-[#0c1810] shadow-md font-extrabold scale-110'
                        : step > s
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#102417] text-gray-400 border border-[#d4af37]/20'
                    }`}
                  >
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </button>
                ))}
              </div>

              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold block">
                  Step {step} of 4
                </span>
                <span className="text-xs font-bold text-white">
                  {step === 1 && "Herd Capacity"}
                  {step === 2 && "Flooring & Bedding"}
                  {step === 3 && "Roof & Framework"}
                  {step === 4 && "Add-on Features"}
                </span>
              </div>
            </div>

            {/* STEP 1: HERD CAPACITY */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>How many cows do you plan to house?</span>
                </h3>
                <p className="text-xs text-gray-300">
                  Includes cubicles, feeding barrier length, milking area, and calf pens proportioned to your herd size.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {HERD_SIZES.map(item => (
                    <div
                      key={item.id}
                      onClick={() => setHerdSize(item)}
                      className={`p-4 rounded-2xl cursor-pointer border-2 transition-all relative ${
                        herdSize.id === item.id
                          ? 'border-[#d4af37] bg-[#1a3622] shadow-lg shadow-[#d4af37]/10'
                          : 'border-white/10 bg-[#102417] hover:border-[#d4af37]/40 hover:bg-[#142a1b]'
                      }`}
                    >
                      {item.popular && (
                        <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#d4af37] text-[#0c1810]">
                          Most Requested
                        </span>
                      )}
                      <div className="font-bold text-white text-sm mb-1">{item.label}</div>
                      <div className="text-xs text-gray-400">Estimated duration: <strong className="text-emerald-400">{item.weeks}</strong></div>
                      <div className="mt-2 text-xs font-semibold text-[#f3cf65]">
                        Base Civil Works: {convertPrice(item.baseCostKES)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: FLOORING & CUBICLES */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Select Flooring & Cow Rest Bedding</span>
                </h3>
                <p className="text-xs text-gray-300">
                  Crucial for hoof health. 70% of dairy losses in Kenya stem from lameness and rough concrete abrasions.
                </p>

                <div className="space-y-3 pt-2">
                  {FLOORING_OPTIONS.map(item => (
                    <div
                      key={item.id}
                      onClick={() => setFlooring(item)}
                      className={`p-4 rounded-2xl cursor-pointer border-2 transition-all ${
                        flooring.id === item.id
                          ? 'border-[#d4af37] bg-[#1a3622] shadow-lg shadow-[#d4af37]/10'
                          : 'border-white/10 bg-[#102417] hover:border-[#d4af37]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-white text-sm">{item.label}</div>
                        {item.recommended && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                            Recommended for 30L+ Cows
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-300 mt-1">{item.desc}</p>
                      <div className="mt-2 text-xs font-semibold text-[#f3cf65]">
                        {item.extraKES === 0 ? "Included in Base" : `+ ${convertPrice(item.extraKES)} (All Free-Stall Cubicles)`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: ROOFING & FRAMEWORK */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Structural Framework & Roofing Specification</span>
                </h3>
                <p className="text-xs text-gray-300">
                  Heat stress reduces milk production by up to 25%. Our designs feature an open continuous central roof ridge for natural updraft ventilation.
                </p>

                <div className="space-y-3 pt-2">
                  {ROOFING_OPTIONS.map(item => (
                    <div
                      key={item.id}
                      onClick={() => setRoofing(item)}
                      className={`p-4 rounded-2xl cursor-pointer border-2 transition-all ${
                        roofing.id === item.id
                          ? 'border-[#d4af37] bg-[#1a3622] shadow-lg shadow-[#d4af37]/10'
                          : 'border-white/10 bg-[#102417] hover:border-[#d4af37]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-white text-sm">{item.label}</div>
                        {item.recommended && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#d4af37] text-[#0c1810]">
                            Lifetime Warranty
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-300 mt-1">{item.desc}</p>
                      <div className="mt-2 text-xs font-semibold text-[#f3cf65]">
                        {item.extraKES === 0 ? "Standard Spec Included" : `+ ${convertPrice(item.extraKES)} (Heavy Industrial Truss)`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: ADD-ON FEATURES */}
            {step === 4 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Add-on Infrastructure & Smart Automation</span>
                </h3>
                <p className="text-xs text-gray-300">
                  Select optional turn-key additions to enhance farm profitability and reduce labor.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {ADDONS.map(addon => {
                    const isSelected = selectedAddons.includes(addon.id);

                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#d4af37] bg-[#1a3622] shadow-md'
                            : 'border-white/10 bg-[#102417] hover:border-[#d4af37]/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-bold text-white text-xs leading-snug">{addon.label}</span>
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#d4af37] text-[#0c1810]' : 'border border-gray-500'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                          <p className="text-[11px] text-gray-300 mt-1.5 leading-relaxed">{addon.desc}</p>
                        </div>
                        <div className="mt-3 text-xs font-bold text-[#f3cf65]">
                          + {convertPrice(addon.costKES)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#d4af37]/20">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2.5 rounded-xl border border-[#d4af37]/40 text-gray-300 hover:text-white hover:bg-[#102417] text-xs font-bold flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous Step
                </button>
              ) : <div />}

              {step < 4 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
                >
                  Next: {step === 1 ? "Flooring" : step === 2 ? "Roofing" : "Add-ons"} <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    const el = document.getElementById("lead-form-anchor");
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  Proceed to Quote Summary <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Right: Dynamic Budget Breakdown & Lead Capture (5 Cols) */}
          <div id="lead-form-anchor" className="lg:col-span-5 bg-[#142a1b] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#d4af37]/50 relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/25 mb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d4af37]">
                  Instant Estimate Output
                </span>
                <h3 className="text-xl font-black text-white font-['Outfit']">
                  Investment Summary
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Turn-Key Handover
              </span>
            </div>

            {/* Total Budget Display */}
            <div className="bg-[#0c1810] p-4 rounded-2xl border border-[#d4af37]/30 mb-5 text-center">
              <span className="text-xs text-gray-400 block mb-1">Estimated Budget Range</span>
              <div className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] tracking-tight">
                {convertPrice(totalMinKES)} <span className="text-gray-400 text-lg font-normal">-</span> {convertPrice(totalMaxKES)}
              </div>
              <p className="text-[11px] text-[#f3cf65] mt-1 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" /> Construction Time: <strong>{herdSize.weeks}</strong>
              </p>
            </div>

            {/* Spec Breakdown List */}
            <div className="space-y-2 text-xs text-gray-300 pb-5 border-b border-[#d4af37]/20 mb-5">
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Unit Capacity:</span>
                <span className="font-semibold text-white">{herdSize.label}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Flooring / Bedding:</span>
                <span className="font-semibold text-white truncate max-w-[180px]">{flooring.label}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Truss / Roof:</span>
                <span className="font-semibold text-white truncate max-w-[180px]">{roofing.label}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Active Add-ons:</span>
                <span className="font-semibold text-[#f3cf65]">{selectedAddons.length} Selected</span>
              </div>
              <div className="flex justify-between py-1 text-emerald-400 font-semibold">
                <span>Projected Milk Gain:</span>
                <span>+6 to +9 L/Cow/Day</span>
              </div>
            </div>

            {/* Lead Capture Form */}
            {!quoteGenerated ? (
              <form onSubmit={handleGenerateQuote} className="space-y-3.5">
                <div>
                  <span className="text-xs font-bold text-white block mb-1">
                    Lock In This Estimate & Get Blueprint PDF
                  </span>
                  <p className="text-[11px] text-gray-300 mb-2">
                    Enter your details to generate your official PDF bill of quantities and WhatsApp quotation:
                  </p>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                    placeholder="e.g., Peter Karanja"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={farmerPhone}
                    onChange={(e) => setFarmerPhone(e.target.value)}
                    placeholder="e.g., 0722 000 123"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                      Farm County
                    </label>
                    <select
                      value={county}
                      onChange={(e) => setCounty(e.target.value)}
                      className="w-full px-2.5 py-2.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                    >
                      {COUNTIES.map(c => (
                        <option key={c} value={c} className="bg-[#0c1810] text-white">{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                      Target Start Date
                    </label>
                    <select
                      value={targetDate}
                      onChange={(e) => setTargetDate(e.target.value)}
                      className="w-full px-2.5 py-2.5 rounded-xl bg-[#0c1810] border border-[#d4af37]/30 text-white text-xs focus:border-[#d4af37] focus:outline-none"
                    >
                      <option value="Immediately (Within 2 Weeks)">Immediately (2 Wks)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="In 2 - 3 Months">In 2 - 3 Months</option>
                      <option value="Planning / Exploring">Planning Stage</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-102 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Sparkles className="w-4 h-4 text-[#0c1810]" />
                  <span>Generate Official Quotation</span>
                </button>
              </form>
            ) : (
              /* Success State with Instant WhatsApp and PDF Action */
              <div className="space-y-4 animate-in zoom-in-95 duration-200">
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="font-bold text-white text-sm">Quotation Generated for {farmerName}!</h4>
                  <p className="text-[11px] text-emerald-200 mt-1">
                    Your specification for {herdSize.label} in {county} has been compiled.
                  </p>
                </div>

                <a
                  href={constructWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-102 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to John Ndege on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    alert(`Downloading Official Quotation JNF-Q-${Math.floor(1000 + Math.random() * 9000)} for ${farmerName}... Estimate saved!`);
                  }}
                  className="w-full py-3 rounded-xl bg-[#0c1810] hover:bg-[#102417] border border-[#d4af37]/40 text-[#f3cf65] font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Detailed BoQ PDF Summary</span>
                </button>

                <button
                  onClick={() => setQuoteGenerated(false)}
                  className="text-center w-full text-[11px] text-gray-400 hover:text-white underline"
                >
                  Modify Configuration
                </button>
              </div>
            )}

            {/* Direct Engineering Assurance */}
            <div className="mt-5 pt-4 border-t border-[#d4af37]/15 flex items-center gap-2 text-[11px] text-gray-300">
              <ShieldAlert className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Constructed by certified agricultural engineers. Site survey available across Kenya.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
