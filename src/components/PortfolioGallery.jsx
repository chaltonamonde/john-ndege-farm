import React, { useState } from 'react';
import { COWSHED_PORTFOLIO } from '../data/cowshedProjects';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Sparkles,
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
    <section id="portfolio" className="py-20 bg-[#0f2015] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3622] border border-[#d4af37]/40 text-[#f3cf65] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>520+ Proven Structures Across Kenya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Engineered Zero-Grazing <span className="gold-gradient-text">Portfolio</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">
            Real farms. Real data. Discover how our cowshed civil engineering elevates daily milk yields, eliminates hoof lameness, and transforms farm profitability.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Constructed Sheds" },
            { id: "smallholder", label: "Smallholder Units (5 - 12 Cows)" },
            { id: "medium", label: "Medium Commercial (15 - 30 Cows)" },
            { id: "commercial", label: "Industrial Mega Dairies (40 - 100+ Cows)" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#d4af37] text-[#0c1810] shadow-lg scale-105'
                  : 'bg-[#142a1b] text-gray-300 hover:text-white border border-[#d4af37]/20 hover:border-[#d4af37]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="green-card-glass rounded-3xl overflow-hidden shadow-2xl border border-[#d4af37]/30 flex flex-col justify-between group hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#d4af37] text-[#0c1810] shadow-md">
                      {project.capacity}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0c1810]/80 text-[#f3cf65] border border-[#d4af37]/40 backdrop-blur-md">
                      {project.costRangeKES}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0c1810] via-[#0c1810]/80 to-transparent p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#f3cf65] font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-black text-white font-['Outfit']">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-0.5">Client: <strong className="text-white">{project.client}</strong></p>
                  </div>
                </div>

                {/* Performance Metrics Row */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#0c1810] border border-[#d4af37]/20 mb-5">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Production Boost</span>
                      <strong className="text-emerald-400 text-sm font-extrabold flex items-center gap-1 mt-0.5">
                        <TrendingUp className="w-4 h-4" /> {project.stats.yieldIncrease}
                      </strong>
                    </div>

                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Health Impact</span>
                      <strong className="text-[#f3cf65] text-sm font-extrabold flex items-center gap-1 mt-0.5">
                        <ShieldCheck className="w-4 h-4" /> {project.stats.mastitisReduction}
                      </strong>
                    </div>
                  </div>

                  {/* Farmer Testimonial Quote */}
                  <blockquote className="text-xs text-gray-300 italic bg-[#102417] p-4 rounded-xl border-l-4 border-[#d4af37] mb-5 leading-relaxed">
                    "{project.quote}"
                  </blockquote>

                  {/* Key Features Checklist */}
                  <div className="space-y-1.5 mb-2">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex-1 py-3 rounded-xl bg-[#142a1b] hover:bg-[#1a3622] text-[#f3cf65] border border-[#d4af37]/40 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Project Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/254722000123?text=${encodeURIComponent(
                    `Hello John Ndege Farm, I saw your constructed shed project "${project.title}" in ${project.location}. Can you build something similar on my farm?`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
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
          <div className="bg-[#102417] border border-[#d4af37] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1a3622] text-gray-300 hover:text-white border border-[#d4af37]/30"
            >
              <X className="w-5 h-5 text-[#d4af37]" />
            </button>

            <span className="text-xs font-bold text-[#f3cf65] uppercase tracking-widest block mb-1">
              Case Study & Engineering Specs
            </span>
            <h3 className="text-2xl font-black text-white font-['Outfit'] mb-2">
              {activeProject.title}
            </h3>
            <p className="text-xs text-gray-300 mb-6">
              Location: <strong>{activeProject.location}</strong> • Capacity: <strong>{activeProject.capacity}</strong>
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-[#0c1810] p-4 rounded-xl border border-[#d4af37]/20">
                <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                  Structural Engineering Highlights:
                </h4>
                <ul className="space-y-2 text-xs text-gray-200">
                  {activeProject.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#0c1810] p-3 rounded-xl border border-[#d4af37]/20">
                  <span className="text-gray-400 block mb-0.5">Construction Period:</span>
                  <strong className="text-white">{activeProject.stats.buildTime}</strong>
                </div>
                <div className="bg-[#0c1810] p-3 rounded-xl border border-[#d4af37]/20">
                  <span className="text-gray-400 block mb-0.5">Energy & Bio-Fertilizer:</span>
                  <strong className="text-[#f3cf65]">{activeProject.stats.manureValue}</strong>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/254722000123?text=${encodeURIComponent(
                `Hello John Ndege Farm, I want a site survey and quotation to build a cowshed modeled after ${activeProject.title}. Please contact me.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3cf65] to-[#d4af37] text-[#0c1810] font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#0c1810]" />
              <span>Request Site Survey for This Design</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
