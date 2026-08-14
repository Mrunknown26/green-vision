import React from 'react';
import { IMPACT_RESULTS } from '../data/portfolioData';
import { TrendingUp, Rocket, Layers, ShieldCheck, Eye } from 'lucide-react';

const icons = [Rocket, Layers, TrendingUp, ShieldCheck];

export default function ImpactResults() {
  return (
    <section id="impact" className="py-24 bg-[#090B0E] relative border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2">
              VOL. 01 • PROVEN RESULTS
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
              IMPACT & <span className="text-[#00FF66]">RESULTS</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono">
            Empirical business transformation delivered across ceramics, manufacturing, and consumer packaging industries.
          </p>
        </div>

        {/* 4 Impact Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_RESULTS.map((item, index) => {
            const IconComp = icons[index] || TrendingUp;
            return (
              <div
                key={item.number}
                className="bg-[#12151B] border border-[#202530] rounded-3xl p-8 hover:border-[#00FF66]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(0,255,102,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black font-mono text-[#00FF66]">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold uppercase text-white mb-2 group-hover:text-[#00FF66] transition-colors">
                    {item.highlight}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1C202B] mt-6 text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  METRIC {item.number} • VERIFIED
                </div>
              </div>
            );
          })}
        </div>

        {/* Eye Mark Banner from PDF Page 17 */}
        <div className="mt-16 bg-gradient-to-r from-[#12151C] via-[#1A202B] to-[#12151C] border border-[#202532] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#00FF66]/10 border border-[#00FF66]/40 flex items-center justify-center text-[#00FF66] shrink-0">
              <Eye className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-extrabold uppercase text-white">
                READY TO ELEVATE YOUR BRAND PRESENCE?
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Let's turn your vision into memorable visual impact across Rajkot, Surat, and beyond.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-[#00FF66] text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#00E65C] transition-all shrink-0 shadow-[0_0_20px_rgba(0,255,102,0.3)]"
          >
            START A PROJECT TODAY
          </a>
        </div>

      </div>
    </section>
  );
}
