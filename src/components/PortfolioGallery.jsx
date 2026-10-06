import React, { useState } from 'react';
import { COWSHED_PORTFOLIO } from '../data/cowshedProjects';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  X,
  MessageCircle
} from 'lucide-react';

export const PortfolioGallery = () => {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = COWSHED_PORTFOLIO.filter(p => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="portfolio" className="py-10 sm:py-16 bg-[#0f2015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Compact */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>520+ Proven Structures Across Kenya</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Engineered Zero-Grazing <span className="gold-gradient-text">Portfolio</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-base text-gray-300 max-w-2xl mx-auto">
            Real farms. Real data. Discover how our cowshed civil engineering elevates daily milk yields and eliminates hoof lameness.
          </p>
        </div>

        {/* Filter Buttons - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center mb-4 sm:mb-6">
          {[
            { id: "all", label: "All Sheds" },
            { id: "smallholder", label: "Smallholder (5–12 Cows)" },
            { id: "medium", label: "Medium (15–30 Cows)" },
            { id: "commercial", label: "Industrial (40–100+ Cows)" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#d4af37] text-[#0c1810] shadow-md scale-102'
                  : 'bg-[#142a1b] text-gray-300 hover:text-white border border-[#d4af37]/20 hover:border-[#d4af37]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-[11px] text-gray-400 font-medium mb-2 px-1">
          <span className="flex items-center gap-1 text-[#f3cf65]">
            <span>⇄ Swipe projects horizontally</span>
          </span>
          <span>{filteredProjects.length} Projects</span>
        </div>

        {/* Project Cards: Horizontal Swipeable on Mobile, 2 Cols on Desktop */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-3 sm:gap-6 pb-2 md:pb-0 no-scrollbar md:grid-cols-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="w-[82vw] max-w-[310px] sm:max-w-none md:w-auto shrink-0 snap-center green-card-glass rounded-2xl overflow-hidden shadow-xl border border-[#d4af37]/30 flex flex-col justify-between group hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <div>
                {/* Photo & Badges - Compact height on mobile */}
                <div className="relative h-36 sm:h-56 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#d4af37] text-[#0c1810] shadow-sm">
                      {project.capacity.split('(')[0].trim()}
                    </span>
                  </div>

                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#0c1810]/85 text-[#f3cf65] border border-[#d4af37]/40 backdrop-blur-md">
                      {project.costRangeKES}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0c1810] via-[#0c1810]/85 to-transparent p-3 sm:p-4">
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#f3cf65] font-semibold mb-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-black text-white font-['Outfit'] line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-300">Client: <strong className="text-white">{project.client}</strong></p>
                  </div>
                </div>

                {/* Performance Metrics Row - Compact */}
                <div className="p-3 sm:p-5">
                  <div className="grid grid-cols-2 gap-2 p-2 sm:p-3 rounded-xl bg-[#0c1810] border border-[#d4af37]/20 mb-3">
                    <div>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider block">Production</span>
                      <strong className="text-emerald-400 text-xs sm:text-sm font-extrabold flex items-center gap-1 mt-0.5">
                        <TrendingUp className="w-3 h-3" /> {project.stats.yieldIncrease}
                      </strong>
                    </div>

                    <div>
                      <span className="text-[9px] text-gray-400 uppercase tracking-wider block">Health Impact</span>
                      <strong className="text-[#f3cf65] text-xs sm:text-sm font-extrabold flex items-center gap-1 mt-0.5">
                        <ShieldCheck className="w-3 h-3" /> {project.stats.mastitisReduction}
                      </strong>
                    </div>
                  </div>

                  {/* Testimonial Quote - Compact clamp */}
                  <blockquote className="text-[11px] sm:text-xs text-gray-300 italic bg-[#102417] p-2.5 sm:p-3 rounded-lg border-l-2 border-[#d4af37] mb-3 leading-relaxed line-clamp-2">
                    "{project.quote}"
                  </blockquote>

                  {/* Key Features Checklist */}
                  <div className="space-y-1 mb-1">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[10px] sm:text-xs text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer - Compact */}
              <div className="p-3 sm:p-5 pt-0 flex gap-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex-1 py-2 sm:py-2.5 rounded-xl bg-[#142a1b] hover:bg-[#1a3622] text-[#f3cf65] border border-[#d4af37]/40 font-bold text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <a
                  href={`https://wa.me/254722000123?text=${encodeURIComponent(
                    `Hello John Ndege Farm, I saw your constructed shed project "${project.title}" in ${project.location}. Can you build something similar on my farm?`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Spec Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-[#102417] border border-[#d4af37] rounded-2xl max-w-lg w-full p-5 sm:p-7 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-[#1a3622] text-gray-300 hover:text-white border border-[#d4af37]/30"
            >
              <X className="w-4 h-4 text-[#d4af37]" />
            </button>

            <span className="text-[10px] font-bold text-[#f3cf65] uppercase tracking-widest block mb-0.5">
              Case Study & Specs
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white font-['Outfit'] mb-1">
              {activeProject.title}
            </h3>
            <p className="text-[11px] text-gray-300 mb-4">
              Location: <strong>{activeProject.location}</strong> • Capacity: <strong>{activeProject.capacity}</strong>
            </p>

            <div className="space-y-3 mb-5">
              <div className="bg-[#0c1810] p-3 rounded-xl border border-[#d4af37]/20">
                <h4 className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider mb-1.5">
                  Structural Highlights:
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-200">
                  {activeProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#0c1810] p-2.5 rounded-xl border border-[#d4af37]/20">
                  <span className="text-gray-400 text-[10px] block">Build Time:</span>
                  <strong className="text-white text-xs">{activeProject.stats.buildTime}</strong>
                </div>
                <div className="bg-[#0c1810] p-2.5 rounded-xl border border-[#d4af37]/20">
                  <span className="text-gray-400 text-[10px] block">Energy / Fertilizer:</span>
                  <strong className="text-[#f3cf65] text-xs">{activeProject.stats.manureValue}</strong>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/254722000123?text=${encodeURIComponent(
                `Hello John Ndege Farm, I want a site survey and quotation to build a cowshed modeled after ${activeProject.title}. Please contact me.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#0c1810]" />
              <span>Request Site Survey</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
