import React from 'react';
import { CORE_SKILLS } from '../data/portfolioData';
import { ShieldCheck, Compass, Layers, Share2, Box, Maximize, Smile, ArrowUpRight } from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Compass,
  Layers,
  Share2,
  Box,
  Maximize,
  Smile
};

export default function CoreSkills() {
  return (
    <section id="skills" className="py-24 bg-[#090B0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 border-b border-[#202530] pb-8">
          <div>
            <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2">
              VOL. 01 • CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
              CORE <span className="text-[#00FF66]">SKILLS</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono">
            Specialized studio design solutions for ceramic tiles, architectural products, FMCG, and high-growth brands.
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SKILLS.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || ShieldCheck;
            return (
              <div
                key={skill.id}
                className="group relative bg-[#12151B] border border-[#202530] rounded-3xl p-8 hover:border-[#00FF66]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,255,102,0.15)]"
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold uppercase text-white mb-3 group-hover:text-[#00FF66] transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Skill tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1C202B]">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full bg-[#181D26] text-slate-300 text-[11px] font-mono group-hover:bg-[#00FF66]/10 group-hover:text-[#00FF66] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Corner Accent Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-[#00FF66]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
