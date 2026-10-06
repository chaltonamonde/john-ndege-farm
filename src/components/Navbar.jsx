import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin, Sparkles, DollarSign } from 'lucide-react';

export const Navbar = ({ currency, setCurrency, onOpenMpesa }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Agribusiness Announcement Bar */}
      <div className="bg-[#102417] border-b border-[#d4af37]/20 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#d4af37]/20 text-[#f3cf65] border border-[#d4af37]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-ping"></span>
              LIVE GITHUNGURI STATUS
            </span>
            <span className="text-gray-300">
              ⚡ 6 Pedigree Heifers Available | Next Masterclass: <strong className="text-[#f3cf65]">Saturday, 18 Oct</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <div className="flex items-center gap-1.5 text-xs text-[#d4af37]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Githunguri, Kiambu County, Kenya</span>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center bg-[#0c1810] rounded-full p-0.5 border border-[#d4af37]/30 text-[11px]">
              <button
                onClick={() => setCurrency('KES')}
                className={`px-2 py-0.5 rounded-full transition-all font-semibold ${
                  currency === 'KES'
                    ? 'bg-[#d4af37] text-[#0c1810] shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                KES (Ksh)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 rounded-full transition-all font-semibold ${
                  currency === 'USD'
                    ? 'bg-[#d4af37] text-[#0c1810] shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-[#0c1810]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a3622] to-[#0f2015] border-2 border-[#d4af37] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-[#d4af37] font-black text-2xl tracking-tighter">JN</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#f3cf65] transition-colors font-['Outfit']">
                  JOHN NDEGE <span className="text-[#d4af37]">FARM</span>
                </span>
                <span className="text-[11px] tracking-widest text-[#d4af37]/90 uppercase font-semibold">
                  Dairy Genetics • Cowsheds • Academy
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
              <a href="#catalog" className="hover:text-[#f3cf65] transition-colors py-1 relative hover:border-b-2 hover:border-[#d4af37]">
                Livestock Catalog
              </a>
              <a href="#estimator" className="hover:text-[#f3cf65] transition-colors py-1 relative hover:border-b-2 hover:border-[#d4af37]">
                Cowshed Estimator
              </a>
              <a href="#academy" className="hover:text-[#f3cf65] transition-colors py-1 relative hover:border-b-2 hover:border-[#d4af37]">
                Dairy Academy
              </a>
              <a href="#portfolio" className="hover:text-[#f3cf65] transition-colors py-1 relative hover:border-b-2 hover:border-[#d4af37]">
                500+ Built Sheds
              </a>
              <a href="#reviews" className="hover:text-[#f3cf65] transition-colors py-1 relative hover:border-b-2 hover:border-[#d4af37]">
                Reviews (4.9★)
              </a>
              <a href="#roi-calc" className="hover:text-[#f3cf65] transition-colors py-1 relative hover:border-b-2 hover:border-[#d4af37]">
                ROI Calculator
              </a>
              <a href="#about" className="hover:text-[#f3cf65] transition-colors py-1 relative hover:border-b-2 hover:border-[#d4af37]">
                About John
              </a>
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/254722000123?text=Hello%20John%20Ndege%20Farm,%20I%20am%20interested%20in%20your%20dairy%20cattle%20and%20cowshed%20construction%20services."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="#estimator"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Cowshed Quote</span>
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#1a3622] border border-[#d4af37]/30"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6 text-[#d4af37]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#102417] border-b border-[#d4af37]/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#d4af37]/20">
              <span className="text-xs text-gray-300 font-semibold">Select Currency:</span>
              <div className="flex items-center bg-[#0c1810] rounded-full p-0.5 border border-[#d4af37]/40 text-xs">
                <button
                  onClick={() => setCurrency('KES')}
                  className={`px-3 py-1 rounded-full font-bold ${
                    currency === 'KES' ? 'bg-[#d4af37] text-[#0c1810]' : 'text-gray-400'
                  }`}
                >
                  KES
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-full font-bold ${
                    currency === 'USD' ? 'bg-[#d4af37] text-[#0c1810]' : 'text-gray-400'
                  }`}
                >
                  USD
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-2 text-base font-medium text-gray-200">
              <a
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#1a3622] hover:text-[#f3cf65] transition-colors"
              >
                🐄 Available Dairy Cattle
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#1a3622] hover:text-[#f3cf65] transition-colors"
              >
                🏗️ Cowshed Cost Estimator
              </a>
              <a
                href="#academy"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#1a3622] hover:text-[#f3cf65] transition-colors"
              >
                🎓 Dairy Academy & Farm Visits
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#1a3622] hover:text-[#f3cf65] transition-colors"
              >
                🏛️ Constructed Sheds (500+ Built)
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#1a3622] hover:text-[#f3cf65] transition-colors"
              >
                ⭐ Verified Reviews (4.9★)
              </a>
              <a
                href="#roi-calc"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#1a3622] hover:text-[#f3cf65] transition-colors"
              >
                📊 Milk Profitability Calculator
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#1a3622] hover:text-[#f3cf65] transition-colors"
              >
                👨‍🌾 About John Ndege
              </a>
            </nav>

            <div className="pt-3 border-t border-[#d4af37]/20 flex flex-col gap-2">
              <a
                href="https://wa.me/254722000123"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with John Ndege on WhatsApp
              </a>
              <a
                href="tel:+254722000123"
                className="w-full text-center py-2.5 rounded-lg border border-[#d4af37]/50 text-[#f3cf65] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#1a3622]"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                Call Farm Office: +254 722 000 123
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
