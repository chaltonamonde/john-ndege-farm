import React, { useState } from 'react';
import { VIDEO_TESTIMONIALS } from '../data/reviewsData';
import { 
  Play, 
  X, 
  TrendingUp, 
  Volume2, 
  MessageCircle,
  Video
} from 'lucide-react';

export const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-10 sm:py-16 bg-[#0c1810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Compact */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Video className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Unfiltered Video Evidence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Hear From <span className="gold-gradient-text">Our Dairy Clients</span>
          </h2>
          <p className="mt-1 text-xs sm:text-base text-gray-300 max-w-2xl mx-auto">
            Watch real farm owners discuss their milk yields and zero-grazing experience with John Ndege Farm.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-[11px] text-gray-400 font-medium mb-2 px-1">
          <span className="flex items-center gap-1 text-[#f3cf65]">
            <span>⇄ Swipe videos horizontally</span>
          </span>
          <span>{VIDEO_TESTIMONIALS.length} Videos</span>
        </div>

        {/* Video Cards: Horizontal Swipeable on Mobile, 3 Cols on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-3 sm:gap-6 pb-2 md:pb-0 no-scrollbar md:grid-cols-3 -mx-4 px-4 sm:mx-0 sm:px-0">
          {VIDEO_TESTIMONIALS.map(vid => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="w-[78vw] max-w-[290px] sm:max-w-none md:w-auto shrink-0 snap-center green-card-glass rounded-2xl overflow-hidden shadow-xl border border-[#d4af37]/30 cursor-pointer group hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail with Play Button - Compact on Mobile */}
              <div className="relative h-36 sm:h-52 bg-black overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 opacity-80 group-hover:opacity-95 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1810] via-black/25 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/50">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono">
                  {vid.duration}
                </div>

                {/* Top Metric Tag */}
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#102417]/90 border border-[#d4af37]/40 text-[#f3cf65] text-[10px] font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span>{vid.metric}</span>
                </div>
              </div>

              {/* Text Info - Compact */}
              <div className="p-3 sm:p-5">
                <div className="text-[11px] text-emerald-400 font-semibold mb-0.5">
                  {vid.farmer} • {vid.farm}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#f3cf65] transition-colors leading-snug mb-1.5 font-['Outfit'] line-clamp-1">
                  {vid.title}
                </h3>
                <p className="text-[11px] text-gray-300 line-clamp-2 leading-relaxed">
                  {vid.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="bg-[#102417] border border-[#d4af37] rounded-2xl max-w-2xl w-full p-4 sm:p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-3 -right-3 p-1.5 rounded-full bg-[#d4af37] text-[#0c1810] font-bold hover:scale-110 transition-transform shadow-lg"
            >
              <X className="w-4 h-4 stroke-[3]" />
            </button>

            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-[#d4af37]/30 mb-4">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/90 text-[#0c1810] flex items-center justify-center shadow-xl mb-3 animate-pulse">
                  <Volume2 className="w-7 h-7" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1 font-['Outfit']">
                  {activeVideo.title}
                </h4>
                <p className="text-xs text-gray-200 max-w-md mb-2">
                  Recorded on site at {activeVideo.farm}.
                </p>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/40">
                  Verified Farmer: {activeVideo.farmer}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-gray-300 text-center sm:text-left">
                Want to visit this farm or see similar cowshed designs?
              </div>
              <a
                href={`https://wa.me/254722000123?text=${encodeURIComponent(
                  `Hello John Ndege Farm, I watched the video of ${activeVideo.farmer} (${activeVideo.farm}). Can I schedule a visit to see a similar cowshed setup?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with John Ndege</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
