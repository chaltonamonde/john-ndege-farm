import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Building2,
  Calendar,
  Compass
} from 'lucide-react';

export const AboutJohnNdege = () => {
  return (
    <section id="about" className="py-20 bg-[#0f2015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo & Credentials (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#d4af37] shadow-2xl group">
              <img
                src="/images/john-ndege.jpg"
                alt="John Ndege - Founder & Lead Dairy Consultant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1810] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 inset-x-6 bg-[#0c1810]/90 backdrop-blur-md p-4 rounded-2xl border border-[#d4af37]/40">
                <div className="flex items-center gap-2 text-xs font-bold text-[#f3cf65] uppercase">
                  <Award className="w-4 h-4 text-[#d4af37]" />
                  <span>22+ Years in East African Agribusiness</span>
                </div>
                <div className="text-xl font-black text-white font-['Outfit'] mt-0.5">
                  John Ndege
                </div>
                <p className="text-xs text-gray-300">
                  Principal Breeder & Agricultural Civil Consultant • Githunguri, Kiambu
                </p>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-[#142a1b] border-2 border-[#d4af37] p-3.5 rounded-2xl shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37] text-[#0c1810] font-black flex items-center justify-center text-lg">
                500+
              </div>
              <div className="text-xs">
                <span className="font-extrabold text-white block">Cowsheds Built</span>
                <span className="text-[#f3cf65] font-semibold">Across East Africa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Ethos (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>The John Ndege Legacy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight leading-tight">
              Pioneering Modern Dairy Farming from the <span className="gold-gradient-text">Heart of Githunguri.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              For over two decades, John Ndege Farm has operated at the epicenter of Kenya's most productive dairy belt in Githunguri, Kiambu County. We witnessed hardworking farmers pour millions of shillings into cows that underperformed simply because of substandard housing, rough concrete, and unverified crossbreeds.
            </p>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              We changed that equation by combining 
              <strong className="text-white"> certified world-class genetics (KLBO registered)</strong> with 
              <strong className="text-[#f3cf65]"> precision zero-grazing engineering</strong>. Every cowshed we build is calibrated for ventilation, cow comfort cubicles, and seamless slurry drainage that turns waste into bio-gas wealth.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#142a1b] border border-[#d4af37]/25">
                <h4 className="font-bold text-white text-sm mb-1">1. Genetic Purity</h4>
                <p className="text-xs text-gray-300">
                  Direct US & Dutch sire semen lines. Pedigrees verified with KLBO registration numbers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#142a1b] border border-[#d4af37]/25">
                <h4 className="font-bold text-white text-sm mb-1">2. Cow Comfort</h4>
                <p className="text-xs text-gray-300">
                  Vulcanized rubber bedding and non-slip grooved flooring that eliminates lameness and mastitis.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#142a1b] border border-[#d4af37]/25">
                <h4 className="font-bold text-white text-sm mb-1">3. Fodder Science</h4>
                <p className="text-xs text-gray-300">
                  Practical hands-on silage preservation techniques that keep milk yields stable all year round.
                </p>
              </div>
            </div>

            {/* Direct Farm Access & Action */}
            <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://wa.me/254722000123"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Direct with John Ndege</span>
              </a>

              <a
                href="#academy"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#142a1b] hover:bg-[#1a3622] text-[#f3cf65] border border-[#d4af37]/50 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                <span>Book a Farm Visit</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
