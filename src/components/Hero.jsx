import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { ArrowDownRight, Sparkles, Award, Eye, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [eyeHovered, setEyeHovered] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00FF66]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Edition Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-[#202530] pb-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
            <span className="text-white font-bold tracking-widest">BRANDING AGENCY</span>
            <span className="text-slate-600">|</span>
            <span>WORK ARCHIVE</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#00FF66] font-semibold">{STUDIO_INFO.edition}</span>
            <span className="text-white font-semibold">{STUDIO_INFO.locations}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{STUDIO_INFO.tagline}</span>
            </div>

            {/* Massive Kinetic Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] uppercase">
              GREEN <span className="text-[#00FF66]">VISION</span>
              <span className="block text-2xl sm:text-4xl md:text-5xl text-slate-300 font-bold mt-2">
                BRANDING & ADVERTISING AGENCY
              </span>
            </h1>

            {/* Quote Subtitle from PDF */}
            <p className="text-lg md:text-xl text-slate-300 font-light italic font-serif max-w-2xl border-l-2 border-[#00FF66] pl-4 py-1">
              "{STUDIO_INFO.quote}"
            </p>

            <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              We craft high-converting brand identities, photorealistic 3D tile renderings, high-impact outdoor hoardings, mascot engineering, and social media campaigns for market-leading ceramic, industrial, and consumer brands across Rajkot, Surat, and nationwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#works"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#00FF66] text-black font-extrabold text-sm tracking-wider uppercase hover:bg-[#00E65C] transition-all transform hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(0,255,102,0.3)]"
              >
                <span>EXPLORE SELECTED WORKS</span>
                <ArrowDownRight className="w-5 h-5" />
              </a>

              <a
                href="#estimator"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#12151B] border border-[#202530] text-white font-bold text-sm tracking-wider uppercase hover:border-[#00FF66] hover:text-[#00FF66] transition-all"
              >
                <span>PROJECT ESTIMATOR</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#202530]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">20+</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Top Brand Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00FF66]">100+</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Social Campaigns</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">+40%</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Engagement Lift</div>
              </div>
            </div>

          </div>

          {/* Right Interactive Eye Symbol Card (Matching PDF Page 1 & 4) */}
          <div className="lg:col-span-4 flex justify-center">
            <div 
              onMouseEnter={() => setEyeHovered(true)}
              onMouseLeave={() => setEyeHovered(false)}
              className="relative w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-b from-[#141820] to-[#0D0F13] border border-[#202530] p-8 flex flex-col justify-between items-center group hover:border-[#00FF66]/60 transition-all duration-500 shadow-2xl cursor-pointer"
            >
              <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-[#00FF66] font-bold">VOL. 01</span>
                <span>EYE MARK</span>
              </div>

              {/* PDF Iconic Eye Graphics */}
              <div className="relative w-48 h-32 my-auto flex items-center justify-center">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  {/* Outer Eye Outline */}
                  <path 
                    d="M 5 30 C 25 5, 75 5, 95 30 C 75 55, 25 55, 5 30 Z" 
                    fill="none" 
                    stroke={eyeHovered ? "#00FF66" : "#FFFFFF"} 
                    strokeWidth="3"
                    className="transition-colors duration-300"
                  />
                  {/* Cross lines inside eye matching PDF page 4 */}
                  <line x1="50" y1="8" x2="50" y2="52" stroke={eyeHovered ? "#00FF66" : "#334155"} strokeWidth="1.5" />
                  <line x1="18" y1="30" x2="82" y2="30" stroke={eyeHovered ? "#00FF66" : "#334155"} strokeWidth="1.5" />
                  
                  {/* Glowing Iris / Pupil */}
                  <circle 
                    cx="50" 
                    cy="30" 
                    r={eyeHovered ? "14" : "10"} 
                    fill="#00FF66" 
                    className="transition-all duration-300 shadow-[0_0_15px_#00FF66]"
                  />
                  {/* Inner Diamond Star pupil */}
                  <path 
                    d="M 50 20 Q 50 30 60 30 Q 50 30 50 40 Q 50 30 40 30 Q 50 30 50 20 Z" 
                    fill="#090B0E" 
                  />
                </svg>
              </div>

              <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 border-t border-[#1F2430] pt-4">
                <span className="flex items-center gap-1.5 text-white">
                  <Eye className="w-4 h-4 text-[#00FF66]" />
                  VISION MEETS IMPACT
                </span>
                <span className="text-[#00FF66]">RAJKOT/SURAT</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
