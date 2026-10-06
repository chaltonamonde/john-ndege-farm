import React, { useState } from 'react';
import { 
  LIVESTOCK_INVENTORY, 
  BREED_OPTIONS, 
  STAGE_OPTIONS 
} from '../data/cattleData';
import { 
  ShieldCheck, 
  Check, 
  Award, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  FileText, 
  Filter, 
  X, 
  Info,
  Calendar,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export const LivestockCatalog = ({ currency, onSelectCowForMpesa }) => {
  const [selectedBreed, setSelectedBreed] = useState("All Breeds");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [activeCowDetail, setActiveCowDetail] = useState(null);

  // Filter logic
  const filteredCattle = LIVESTOCK_INVENTORY.filter(cow => {
    const breedMatch = selectedBreed === "All Breeds" || cow.breed.toLowerCase().includes(selectedBreed.toLowerCase());
    const stageMatch = selectedStage === "All Stages" || cow.stage.toLowerCase().includes(selectedStage.toLowerCase().replace(" heifers", ""));
    return breedMatch && stageMatch;
  });

  const formatPrice = (cow) => {
    if (currency === 'USD') {
      return `$${cow.priceUSD.toLocaleString()}`;
    }
    return `KES ${cow.priceKES.toLocaleString()}`;
  };

  const formatDeposit = (cow) => {
    if (currency === 'USD') {
      return `$${Math.round(cow.depositKES / 130)}`;
    }
    return `KES ${cow.depositKES.toLocaleString()}`;
  };

  return (
    <section id="catalog" className="py-20 bg-[#0c1810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Direct From Githunguri Nucleus Farm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Verified Pedigree <span className="gold-gradient-text">Dairy Livestock</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Every heifer and cow is officially registered with the Kenya Livestock Breeding Organization (KLBO). Fully vaccinated, screened for Brucellosis, and backed by verifiable dam lactation sheets.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-[#142a1b] rounded-2xl p-4 sm:p-6 border border-[#d4af37]/25 mb-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            {/* Breed Filter */}
            <div className="w-full md:w-auto">
              <label className="text-xs uppercase font-bold text-[#d4af37] block mb-2 tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5" /> Filter by Breed
              </label>
              <div className="flex flex-wrap gap-2">
                {BREED_OPTIONS.map(breed => (
                  <button
                    key={breed}
                    onClick={() => setSelectedBreed(breed)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedBreed === breed
                        ? 'bg-[#d4af37] text-[#0c1810] shadow-md font-bold scale-105'
                        : 'bg-[#102417] text-gray-300 hover:text-white border border-[#d4af37]/20 hover:border-[#d4af37]/50'
                    }`}
                  >
                    {breed}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Filter */}
            <div className="w-full md:w-auto">
              <label className="text-xs uppercase font-bold text-[#d4af37] block mb-2 tracking-wider">
                Filter by Production Stage
              </label>
              <div className="flex flex-wrap gap-2">
                {STAGE_OPTIONS.map(stage => (
                  <button
                    key={stage}
                    onClick={() => setSelectedStage(stage)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedStage === stage
                        ? 'bg-[#d4af37] text-[#0c1810] shadow-md font-bold scale-105'
                        : 'bg-[#102417] text-gray-300 hover:text-white border border-[#d4af37]/20 hover:border-[#d4af37]/50'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

          </div>
          
          <div className="mt-4 pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-xs text-gray-400">
            <span>Showing <strong className="text-[#f3cf65]">{filteredCattle.length}</strong> verified pedigree cattle available for inspection</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Farm Viewing Daily 8am - 5pm
            </span>
          </div>
        </div>

        {/* Cattle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCattle.map(cow => {
            const isReserved = cow.status === 'Reserved';

            return (
              <div
                key={cow.id}
                className="green-card-glass rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/60 flex flex-col justify-between group"
              >
                <div>
                  {/* Image & Status Badge */}
                  <div className="relative h-64 overflow-hidden bg-black">
                    <img
                      src={cow.image}
                      alt={`${cow.tag} - ${cow.breed}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-[#0c1810] shadow-md">
                        {cow.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-black/75 text-white backdrop-blur-sm border border-white/20">
                        {cow.breed}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md ${
                        isReserved 
                          ? 'bg-red-500/90 text-white' 
                          : 'bg-emerald-500/90 text-black'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        {cow.status}
                      </span>
                    </div>

                    {/* Bottom overlay with expected yield */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0c1810] via-[#0c1810]/80 to-transparent p-4 flex items-end justify-between">
                      <div>
                        <div className="text-[11px] text-[#f3cf65] font-bold uppercase">Expected Yield</div>
                        <div className="text-lg font-extrabold text-white">{cow.lactationExpected}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-gray-400">Dam's Record</div>
                        <div className="text-xs font-semibold text-gray-200">{cow.damYield.split(' ')[0]} L/Day</div>
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#f3cf65] transition-colors font-['Outfit']">
                          {cow.tag}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{cow.stage} • {cow.age}</p>
                    </div>

                    {/* Pedigree & Sire Info */}
                    <div className="bg-[#0f2015] rounded-xl p-3 border border-[#d4af37]/20 space-y-1.5 text-xs">
                      <div className="flex justify-between text-gray-300">
                        <span className="text-gray-400">Sire Lineage:</span>
                        <strong className="text-[#f3cf65] font-semibold">{cow.sire}</strong>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span className="text-gray-400">Gestation Stage:</span>
                        <span className="text-white font-medium">{cow.gestation}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span className="text-gray-400">KLBO Reg:</span>
                        <span className="text-emerald-400 font-mono text-[11px] font-bold">{cow.klboNo}</span>
                      </div>
                    </div>

                    {/* Verified Health Badge */}
                    <div className="flex items-start gap-2 text-xs text-emerald-300 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-500/30">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight text-[11px]">{cow.healthStatus}</span>
                    </div>

                    {/* Trait Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {cow.traits.map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#1a3622] text-gray-300 border border-[#d4af37]/20">
                          ✓ {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & Action Footer */}
                <div className="p-5 pt-0 border-t border-[#d4af37]/15 mt-3 space-y-3">
                  <div className="flex items-baseline justify-between pt-3">
                    <div>
                      <div className="text-[11px] text-gray-400">Full Purchase Price</div>
                      <div className="text-2xl font-black text-white font-['Outfit']">
                        {formatPrice(cow)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#d4af37] font-semibold">Reserve Deposit</div>
                      <div className="text-xs font-bold text-gray-300">
                        {formatDeposit(cow)}
                      </div>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectCowForMpesa(cow)}
                      disabled={isReserved}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all ${
                        isReserved
                          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] hover:scale-102 shadow-[#d4af37]/20'
                      }`}
                    >
                      <span>{isReserved ? 'Reserved' : 'Reserve (M-Pesa)'}</span>
                    </button>

                    <a
                      href={`https://wa.me/254722000123?text=${encodeURIComponent(
                        `Hello John Ndege Farm, I want to inquire about purchasing ${cow.tag} (${cow.breed}, ${cow.stage}, Price: ${formatPrice(cow)}). Is this heifer still available for viewing in Githunguri?`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-102"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Certificate Modal Trigger */}
                  <button
                    onClick={() => setActiveCowDetail(cow)}
                    className="w-full text-center text-[11px] text-[#f3cf65] hover:text-white underline underline-offset-2 flex items-center justify-center gap-1 pt-1"
                  >
                    <FileText className="w-3 h-3" /> View Lineage & Vet Certificate
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {activeCowDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#102417] border border-[#d4af37] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveCowDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1a3622] text-gray-300 hover:text-white border border-[#d4af37]/30"
            >
              <X className="w-5 h-5 text-[#d4af37]" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#1a3622] border border-[#d4af37]">
                <Award className="w-8 h-8 text-[#d4af37]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-[#f3cf65] tracking-widest">
                  Kenya Livestock Breeding Organization
                </span>
                <h3 className="text-2xl font-black text-white font-['Outfit']">
                  {activeCowDetail.tag}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-xs">
              <div className="bg-[#0c1810] p-4 rounded-xl border border-[#d4af37]/20">
                <span className="text-gray-400 block mb-1">Breed & Category:</span>
                <strong className="text-white text-sm">{activeCowDetail.breed} ({activeCowDetail.stage})</strong>
              </div>

              <div className="bg-[#0c1810] p-4 rounded-xl border border-[#d4af37]/20">
                <span className="text-gray-400 block mb-1">KLBO Certificate Number:</span>
                <strong className="text-emerald-400 font-mono text-sm">{activeCowDetail.klboNo}</strong>
              </div>

              <div className="bg-[#0c1810] p-4 rounded-xl border border-[#d4af37]/20">
                <span className="text-gray-400 block mb-1">Foundation Dam Yield:</span>
                <strong className="text-[#f3cf65] text-sm">{activeCowDetail.damYield}</strong>
              </div>

              <div className="bg-[#0c1810] p-4 rounded-xl border border-[#d4af37]/20">
                <span className="text-gray-400 block mb-1">Sire Genetics:</span>
                <strong className="text-white text-sm">{activeCowDetail.sire}</strong>
              </div>
            </div>

            <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl mb-6">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Veterinary Health Clearance</span>
              </div>
              <p className="text-xs text-gray-200">
                Screened Negative for Brucellosis, East Coast Fever (ECF) ITM immunized, Anthrax & Blackquarter up-to-date, and treated with regular pour-on acaricide at John Ndege Farm, Githunguri.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const cow = activeCowDetail;
                  setActiveCowDetail(null);
                  onSelectCowForMpesa(cow);
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-xs uppercase tracking-wider shadow-lg"
              >
                Reserve with M-Pesa Deposit ({formatDeposit(activeCowDetail)})
              </button>
              <a
                href={`https://wa.me/254722000123?text=${encodeURIComponent(
                  `Hello John Ndege Farm, I am inquiring regarding the certificate and purchase of ${activeCowDetail.tag} (${activeCowDetail.breed}). Please send me the video and full records.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
