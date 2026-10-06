import React from 'react';
import { Phone, MessageCircle, Building2, Award } from 'lucide-react';

export const MobileStickyBar = ({ onOpenEstimator, onOpenCatalog }) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0c1810]/95 backdrop-blur-md border-t border-[#d4af37]/30 px-3 py-2 flex items-center justify-around shadow-2xl">
      
      {/* Call */}
      <a
        href="tel:+254722000123"
        className="flex flex-col items-center justify-center text-gray-300 hover:text-[#f3cf65] transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-[#1a3622] flex items-center justify-center text-[#d4af37] border border-[#d4af37]/40 mb-0.5">
          <Phone className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold">Call Farm</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/254722000123"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-0.5 shadow-md">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
        <span className="text-[10px] font-bold">WhatsApp</span>
      </a>

      {/* Cowshed Estimator */}
      <a
        href="#estimator"
        onClick={onOpenEstimator}
        className="flex flex-col items-center justify-center text-gray-300 hover:text-[#f3cf65] transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-[#1a3622] flex items-center justify-center text-[#d4af37] border border-[#d4af37]/40 mb-0.5">
          <Building2 className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold">Estimator</span>
      </a>

      {/* Cattle Catalog */}
      <a
        href="#catalog"
        onClick={onOpenCatalog}
        className="flex flex-col items-center justify-center text-[#f3cf65] hover:text-white transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] flex items-center justify-center mb-0.5 shadow-md">
          <Award className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-bold">Cattle</span>
      </a>

    </div>
  );
};
