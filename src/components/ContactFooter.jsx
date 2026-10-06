import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowUp,
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';

export const ContactFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08120b] border-t-2 border-[#d4af37]/30 text-gray-300 relative pt-16 pb-24 sm:pb-16">
      
      {/* Top Banner: Visit Our Farm */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="green-card-glass rounded-3xl p-8 sm:p-12 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-[#0c1810]">
                Physical Farm Inspections Welcome
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-['Outfit']">
                Visit Us in Githunguri, Kiambu County
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We are located just 42 minutes from Nairobi CBD via Kiambu Road / Ruiru-Githunguri Road. Come witness high-yielding dairy cows, inspect modern cowshed layouts, and speak with John Ndege in person.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/254722000123?text=Hello%20John%20Ndege%20Farm,%20I%20would%20like%20directions%20and%20to%20schedule%20a%20visit%20to%20your%20farm%20in%20Githunguri."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Google Maps Pin via WhatsApp</span>
              </a>

              <a
                href="tel:+254722000123"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#142a1b] hover:bg-[#1a3622] text-[#f3cf65] border border-[#d4af37]/50 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Gate Office</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/15 text-xs">
        
        {/* Col 1: About & Logo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a3622] border-2 border-[#d4af37] flex items-center justify-center font-black text-xl text-[#d4af37]">
              JN
            </div>
            <div>
              <span className="font-extrabold text-base text-white tracking-tight font-['Outfit'] block">
                JOHN NDEGE <span className="text-[#d4af37]">FARM</span>
              </span>
              <span className="text-[10px] text-[#f3cf65] uppercase font-semibold">
                Githunguri, Kiambu County
              </span>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed">
            East Africa's premier commercial dairy consultancy, pedigree livestock breeder, and modern zero-grazing cowshed construction firm.
          </p>

          <div className="pt-2 text-gray-300 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>KLBO Registered Breeder No. 2024-HF</span>
            </div>
            <div className="text-[11px] text-gray-400">
              Official Till Number: <strong className="text-[#f3cf65] font-mono">8472910</strong>
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">
            Core Services
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#catalog" className="hover:text-[#f3cf65] transition-colors flex items-center gap-1.5">
                <span>›</span> Available Dairy Cattle (Friesian / Ayrshire / Jersey)
              </a>
            </li>
            <li>
              <a href="#estimator" className="hover:text-[#f3cf65] transition-colors flex items-center gap-1.5">
                <span>›</span> Zero-Grazing Cowshed Cost Estimator
              </a>
            </li>
            <li>
              <a href="#academy" className="hover:text-[#f3cf65] transition-colors flex items-center gap-1.5">
                <span>›</span> Practical Dairy Academy & Silage Masterclass
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-[#f3cf65] transition-colors flex items-center gap-1.5">
                <span>›</span> 500+ Constructed Cowshed Portfolio
              </a>
            </li>
            <li>
              <a href="#roi-calc" className="hover:text-[#f3cf65] transition-colors flex items-center gap-1.5">
                <span>›</span> Dairy Herd Cashflow & Feed ROI Calculator
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-[#f3cf65] transition-colors flex items-center gap-1.5">
                <span>›</span> Verified Google Client Reviews (4.9★)
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Contact Information */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">
            Contact & Location
          </h4>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Githunguri Dairy Hub, Next to Fresha Dairies, Kiambu County, Kenya</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Hotline: +254 722 000 123 / +254 733 999 456</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>WhatsApp: +254 722 000 123 (Active Daily)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>info@johnndegefarm.co.ke</span>
            </div>
          </div>
        </div>

        {/* Col 4: Visiting Hours */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#d4af37]">
            Visiting Hours
          </h4>
          <div className="p-4 rounded-2xl bg-[#102417] border border-[#d4af37]/25 space-y-2">
            <div className="flex justify-between items-center text-gray-200">
              <span className="font-semibold">Monday – Friday:</span>
              <span className="text-[#f3cf65]">8:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center text-gray-200">
              <span className="font-semibold">Saturday:</span>
              <span className="text-[#f3cf65]">8:30 AM – 4:30 PM (Masterclass)</span>
            </div>
            <div className="flex justify-between items-center text-gray-400">
              <span>Sunday:</span>
              <span>Closed (Rest & Routine Herd Care)</span>
            </div>
          </div>
          <p className="text-[11px] text-gray-400">
            *Prior booking recommended for biosecurity and livestock viewing protocol.
          </p>
        </div>

      </div>

      {/* Bottom Legal & Back to Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
        <div>
          © {new Date().getFullYear()} John Ndege Farm Ltd. All Rights Reserved. East Africa's Agribusiness Leader.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#142a1b] hover:bg-[#1a3622] text-[#f3cf65] border border-[#d4af37]/30 transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </footer>
  );
};
