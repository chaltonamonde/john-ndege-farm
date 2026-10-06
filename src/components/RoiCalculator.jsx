import React, { useState } from 'react';
import { 
  Calculator, 
  Coins, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  Percent, 
  AlertCircle,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export const RoiCalculator = ({ currency }) => {
  const [cows, setCows] = useState(10);
  const [yieldPerCow, setYieldPerCow] = useState(28);
  const [milkPriceKES, setMilkPriceKES] = useState(60);
  const [feedCostKES, setFeedCostKES] = useState(380);

  // Calculations
  const dailyLiters = cows * yieldPerCow;
  const monthlyLiters = dailyLiters * 30;
  
  const dailyGrossKES = dailyLiters * milkPriceKES;
  const monthlyGrossKES = dailyGrossKES * 30;

  const dailyFeedKES = cows * feedCostKES;
  const monthlyFeedKES = dailyFeedKES * 30;

  const monthlyNetKES = monthlyGrossKES - monthlyFeedKES;
  const annualNetKES = monthlyNetKES * 12;

  // Comparison with ordinary 14L/day local crossbreed cow
  const baselineYield = 15;
  const baselineMonthlyLiters = cows * baselineYield * 30;
  const baselineMonthlyNetKES = (baselineMonthlyLiters * milkPriceKES) - (cows * 320 * 30);
  const extraProfitMonthlyKES = Math.max(0, monthlyNetKES - baselineMonthlyNetKES);

  const formatMoney = (kes) => {
    if (currency === 'USD') {
      return `$${Math.round(kes / 130).toLocaleString()}`;
    }
    return `KES ${kes.toLocaleString()}`;
  };

  return (
    <section id="roi-calc" className="py-20 bg-[#0c1810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold uppercase tracking-wider mb-3">
            <Coins className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Farm Financial Feasibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Dairy Herd <span className="gold-gradient-text">Profitability Calculator</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">
            See the raw cashflow difference that high-grade pedigree genetics and zero-grazing housing create on your monthly bank balance.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Panel (7 Cols) */}
          <div className="lg:col-span-7 green-card-glass rounded-3xl p-6 sm:p-8 border border-[#d4af37]/30 shadow-2xl space-y-6">
            
            {/* Slider 1: Herd Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                  Number of Milking Cows
                </label>
                <span className="text-lg font-black text-[#f3cf65] font-['Outfit']">
                  {cows} Cows
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={cows}
                onChange={(e) => setCows(Number(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>1 Cow</span>
                <span>25 Cows</span>
                <span>50 Cows</span>
              </div>
            </div>

            {/* Slider 2: Average Daily Yield */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                  Average Milk Yield Per Cow / Day
                </label>
                <span className="text-lg font-black text-emerald-400 font-['Outfit']">
                  {yieldPerCow} Litres / Day
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="45"
                value={yieldPerCow}
                onChange={(e) => setYieldPerCow(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>12L (Local Low-Grade)</span>
                <span>28L (Good Zero-Grazing)</span>
                <span>45L (Elite Pedigree)</span>
              </div>
            </div>

            {/* Slider 3: Milk Sale Price */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                  Milk Selling Price / Litre
                </label>
                <span className="text-lg font-black text-[#f3cf65] font-['Outfit']">
                  {formatMoney(milkPriceKES)} / L
                </span>
              </div>
              <input
                type="range"
                min="48"
                max="95"
                value={milkPriceKES}
                onChange={(e) => setMilkPriceKES(Number(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>Ksh 48 (Factory Off-taker)</span>
                <span>Ksh 65 (Co-operative / Githunguri)</span>
                <span>Ksh 95 (Direct Retail / Hotels)</span>
              </div>
            </div>

            {/* Slider 4: Feed & Labor Cost */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-gray-300 font-bold">
                  Daily Feed & Labor Cost / Cow
                </label>
                <span className="text-lg font-black text-red-400 font-['Outfit']">
                  {formatMoney(feedCostKES)} / Day
                </span>
              </div>
              <input
                type="range"
                min="250"
                max="700"
                step="10"
                value={feedCostKES}
                onChange={(e) => setFeedCostKES(Number(e.target.value))}
                className="w-full accent-red-400 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>Ksh 250 (Conserved Silage + TMR)</span>
                <span>Ksh 500 (Mixed)</span>
                <span>Ksh 700 (High Commercial Feeds)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c1810] border border-[#d4af37]/20 flex items-start gap-3 text-xs text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>PRO TIP:</strong> Farmers using John Ndege Farm bunker silage techniques save an average of KES 180 per cow daily while gaining +6 Litres more milk.
              </span>
            </div>

          </div>

          {/* Results Display Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-[#142a1b] rounded-3xl p-6 sm:p-8 border-2 border-[#d4af37] shadow-2xl space-y-6">
            
            <div>
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest block">
                Monthly Net Cashflow
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] mt-1">
                {formatMoney(monthlyNetKES)}
              </div>
              <p className="text-xs text-emerald-400 mt-1 font-semibold">
                Estimated Annual Net: {formatMoney(annualNetKES)}
              </p>
            </div>

            {/* Production Stats Breakdown */}
            <div className="space-y-3 pt-4 border-t border-[#d4af37]/20 text-xs">
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Daily Milk Volume:</span>
                <strong className="text-white text-sm">{dailyLiters.toLocaleString()} Litres / Day</strong>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-gray-400">Monthly Gross Revenue:</span>
                <strong className="text-[#f3cf65] text-sm">{formatMoney(monthlyGrossKES)}</strong>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-gray-400">Monthly Total Feed Overhead:</span>
                <strong className="text-red-400 text-sm">- {formatMoney(monthlyFeedKES)}</strong>
              </div>
            </div>

            {/* Extra Value Badge */}
            <div className="p-4 rounded-2xl bg-[#102417] border border-emerald-500/40">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                Advantage vs Low-Yield Cows (15L/day):
              </span>
              <div className="text-xl font-black text-emerald-400 font-['Outfit'] mt-0.5">
                + {formatMoney(extraProfitMonthlyKES)} Extra / Month
              </div>
              <p className="text-[11px] text-gray-300 mt-1">
                By investing in high-grade genetics, your herd pays for itself within 7 months of first calving.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-2">
              <a
                href="#catalog"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-102 transition-all text-center"
              >
                <span>Select High-Yield Cattle Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
