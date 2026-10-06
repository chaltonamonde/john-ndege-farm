import React, { useState } from 'react';
import { VIDEO_TESTIMONIALS } from '../data/reviewsData';
import { 
  Play, 
  X, 
  Sparkles, 
  TrendingUp, 
  Volume2, 
  ShieldCheck, 
  MessageCircle,
  Video
} from 'lucide-react';

export const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 bg-[#0c1810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Unfiltered Video Evidence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Hear Directly From <span className="gold-gradient-text">Our Dairy Clients</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">
            Watch actual farm owners walk through their zero-grazing units, discuss milk collection volumes, and share their experience with John Ndege Farm.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map(vid => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="green-card-glass rounded-3xl overflow-hidden shadow-xl border border-[#d4af37]/30 cursor-pointer group hover:border-[#d4af37] hover:scale-102 transition-all duration-300"
            >
              {/* Thumbnail with Play Button */}
              <div className="relative h-56 bg-black overflow-hidden">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-110 opacity-75 group-hover:opacity-90 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1810] via-black/30 to-transparent" />
                
                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3cf65] text-[#0c1810] flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform duration-300 border-2 border-white/50">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono">
                  {vid.duration}
                </div>

                {/* Top Metric Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#102417]/90 border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{vid.metric}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6">
                <div className="text-xs text-emerald-400 font-semibold mb-1">
                  {vid.farmer} • {vid.farm}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#f3cf65] transition-colors leading-snug mb-3 font-['Outfit']">
                  {vid.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {vid.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player Simulator */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="bg-[#102417] border border-[#d4af37] rounded-3xl max-w-3xl w-full p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-4 -right-4 p-2 rounded-full bg-[#d4af37] text-[#0c1810] font-bold hover:scale-110 transition-transform shadow-lg"
            >
              <X className="w-5 h-5 stroke-[3]" />
            </button>

            {/* Simulated Video Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-[#d4af37]/30 mb-5">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-[#d4af37]/90 text-[#0c1810] flex items-center justify-center shadow-2xl mb-4 animate-pulse">
                  <Volume2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                  {activeVideo.title}
                </h4>
                <p className="text-xs text-gray-200 max-w-lg mb-4">
                  Recorded on site at {activeVideo.farm}. Demonstrating high yield gains and zero-grazing engineering.
                </p>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                  Verified Farmer: {activeVideo.farmer}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-300">
                Want to visit this farm or see similar cowshed designs in person?
              </div>
              <a
                href={`https://wa.me/254722000123?text=${encodeURIComponent(
                  `Hello John Ndege Farm, I watched the video of ${activeVideo.farmer} (${activeVideo.farm}). Can I schedule a visit to see a similar cowshed setup?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
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
