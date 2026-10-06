import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-[#102417] border border-[#d4af37] text-white p-3 rounded-2xl shadow-2xl max-w-xs relative animate-in fade-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 p-1 text-gray-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[11px] font-bold text-[#f3cf65]">John Ndege Farm Online</span>
          </div>
          <p className="text-xs text-gray-200">
            Need pedigree cattle or a cowshed estimate? Chat with us directly on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/254722000123?text=Hello%20John%20Ndege%20Farm,%20I%20am%20contacting%20you%20from%20your%20website%20regarding%20dairy%20cattle%20and%20cowshed%20construction."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with John Ndege on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-white/40 live-pulse group"
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
