import React, { useState } from 'react';
import { SELECTED_WORKS, STUDIO_INFO } from '../data/portfolioData';
import { ExternalLink, X, Check, Sparkles, Eye, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedWorkModal, setSelectedWorkModal] = useState(null);

  const categories = [
    'All',
    'Outdoor Visibility',
    'Brand Mascot',
    'Product Packaging',
    'Social Media',
    '3D Visualization',
    'Branding & Print',
    'Sample Kits'
  ];

  const filteredWorks = activeCategory === 'All'
    ? SELECTED_WORKS
    : SELECTED_WORKS.filter((item) => item.category === activeCategory);

  return (
    <section id="works" className="py-24 bg-[#0D0F14] border-t border-[#1C202B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2">
              VOL. 01 • PORTFOLIO ARCHIVE
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
              SELECTED <span className="text-[#00FF66]">WORKS</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Click on any case study to open the interactive project spotlight, specifications, and design breakdown.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                activeCategory === cat
                  ? 'bg-[#00FF66] text-black font-extrabold border-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                  : 'bg-[#12151B] text-slate-300 border-[#202530] hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWorkModal(work)}
              className="group bg-[#12151C] border border-[#202530] rounded-3xl overflow-hidden hover:border-[#00FF66]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,255,102,0.1)]"
            >
              {/* Card Visual Banner Header */}
              <div className={`relative h-60 ${work.imageBg} p-6 flex flex-col justify-between overflow-hidden border-b border-[#202530]`}>
                {/* Decorative Pattern & Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00FF66]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-[#00FF66] border border-[#00FF66]/30 uppercase font-semibold">
                    {work.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Title & Client Spotlight inside Visual Banner */}
                <div className="relative z-10 space-y-1">
                  <div className="text-[11px] font-mono text-slate-300 font-bold uppercase tracking-wider">
                    {work.client}
                  </div>
                  <h3 className="text-xl font-extrabold uppercase text-white leading-tight group-hover:text-[#00FF66] transition-colors line-clamp-2">
                    {work.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {work.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#1F2430]">
                  <div className="text-[11px] font-mono text-[#00FF66] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{work.stats}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {work.features.slice(0, 3).map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2 py-0.5 rounded bg-[#181D26] text-slate-300 text-[10px] font-mono"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Project Modal Popup */}
      {selectedWorkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#12151C] border border-[#202530] w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className={`p-8 ${selectedWorkModal.imageBg} border-b border-[#202530] relative`}>
              <button
                onClick={() => setSelectedWorkModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/40 text-xs font-mono uppercase font-bold">
                {selectedWorkModal.category} • {selectedWorkModal.badge}
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold uppercase text-white mt-3">
                {selectedWorkModal.title}
              </h3>
              
              <p className="text-slate-300 font-mono text-xs uppercase mt-1">
                CLIENT: <span className="text-[#00FF66] font-bold">{selectedWorkModal.client}</span>
              </p>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-8 space-y-6 overflow-y-auto">
              <div>
                <h4 className="text-xs font-mono text-[#00FF66] uppercase tracking-wider mb-2 font-bold">
                  PROJECT OVERVIEW & STRATEGY
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedWorkModal.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#00FF66] uppercase tracking-wider mb-3 font-bold">
                  KEY DELIVERABLES & HIGHLIGHTS
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedWorkModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-[#181D26] p-3 rounded-xl border border-[#202530] text-xs font-medium text-slate-200">
                      <Check className="w-4 h-4 text-[#00FF66]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#202530] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-slate-400">
                  IMPACT: <span className="text-white font-bold">{selectedWorkModal.stats}</span>
                </div>

                <a
                  href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=Hi%20Green%20Vision%20Studio,%20I'm%20interested%20in%20a%20similar%20project%20like%20"${encodeURIComponent(selectedWorkModal.title)}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00FF66] text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#00E65C] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>INQUIRE FOR SIMILAR PROJECT</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
