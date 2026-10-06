import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Award, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  PhoneCall,
  Play
} from 'lucide-react';

export const Hero = ({ onOpenEstimator, onOpenCatalog, onWatchVideo }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0c1810]">
      {/* Background Image with Video-Feel Parallax & Ambient Grain */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-farm.jpg"
          alt="John Ndege Farm aerial view in Githunguri Kiambu"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms] opacity-45 transform"
        />
        {/* Multi-layered Vignette & Dark Green Wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1810] via-[#0c1810]/75 to-[#0c1810]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0c1810]/40 to-[#0c1810]" />
        {/* Subtle Gold Shimmer Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center lg:text-left flex flex-col justify-center">
        
        {/* Location & Trust Tag */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a3622]/90 border border-[#d4af37]/50 shadow-md backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-bold text-[#f3cf65] tracking-wide uppercase">
              Githunguri, Kiambu County • East Africa's Dairy Capital
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0c1810]/80 border border-[#d4af37]/30 text-xs text-gray-300">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>KLBO Registered Pedigree Breeder</span>
          </div>
        </div>

        {/* High-Impact Main Headline */}
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-['Outfit']">
            Build High-Yielding Dairy Farms That <span className="gold-gradient-text">Print Consistent Cashflow.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Stop losing money on poor cattle genetics and damp cowsheds. We breed 
            <strong className="text-white"> certified 35L+/day pedigree dairy heifers</strong> and construct 
            <strong className="text-[#f3cf65]"> precision zero-grazing cowsheds</strong> engineered for zero mastitis and lifelong cow comfort.
          </p>
        </div>

        {/* Trust Points Checklist */}
        <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>520+ Proven Cowsheds Built in Kenya</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>DNA & Milk Yield Lineage Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
            <span>M-Pesa Escrow / Till Reservation Guaranteed</span>
          </div>
        </div>

        {/* The Two Prominent Gold Conversion CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          
          {/* Primary CTA 1: Browse Cattle */}
          <a
            href="#catalog"
            onClick={onOpenCatalog}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 border border-[#f3cf65]"
          >
            <span>Browse Available Cattle (6 Ready)</span>
            <ArrowRight className="w-5 h-5 text-[#0c1810]" />
          </a>

          {/* Primary CTA 2: Calculate Cowshed Cost */}
          <a
            href="#estimator"
            onClick={onOpenEstimator}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#142a1b]/90 hover:bg-[#1a3622] text-[#f3cf65] border-2 border-[#d4af37] font-bold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-3"
          >
            <Building2 className="w-5 h-5 text-[#d4af37]" />
            <span>Calculate Cowshed Cost</span>
          </a>

          {/* Video Walkthrough CTA */}
          <button
            onClick={onWatchVideo}
            className="w-full sm:w-auto px-5 py-4 rounded-xl bg-black/40 hover:bg-black/60 text-gray-200 border border-white/20 text-xs font-semibold flex items-center justify-center gap-2.5 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-[#d4af37] text-[#0c1810] flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Watch Farm Tour Video (4 Min)</span>
          </button>
        </div>

        {/* Live Real-World Agribusiness Ticker Bar */}
        <div className="mt-14 pt-8 border-t border-[#d4af37]/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-4 rounded-xl bg-[#102417]/80 border border-[#d4af37]/25 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Cowsheds Built</span>
              <Building2 className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">520+</div>
            <p className="text-[11px] text-[#f3cf65] mt-0.5">Across 22 Kenyan Counties</p>
          </div>

          <div className="p-4 rounded-xl bg-[#102417]/80 border border-[#d4af37]/25 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Pedigree Cattle Sold</span>
              <Award className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">1,450+</div>
            <p className="text-[11px] text-[#f3cf65] mt-0.5">100% KLBO Lineage Certified</p>
          </div>

          <div className="p-4 rounded-xl bg-[#102417]/80 border border-[#d4af37]/25 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Academy Alumni</span>
              <Users className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">3,200+</div>
            <p className="text-[11px] text-[#f3cf65] mt-0.5">Practical Masterclasses</p>
          </div>

          <div className="p-4 rounded-xl bg-[#102417]/80 border border-[#d4af37]/25 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Average Daily Milk</span>
              <TrendingUp className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">35 - 42L</div>
            <p className="text-[11px] text-emerald-400 mt-0.5">+8.5L Gain with Our Sheds</p>
          </div>

        </div>

      </div>
    </section>
  );
};
