import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Target, Lightbulb, Zap, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const pillars = [
    {
      icon: Target,
      title: "Strategic Vision",
      desc: "Branding that bridges imagination and identity, giving your company a formidable market stance."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      desc: "From 3D product renders to brand mascot engineering, we turn abstract ideas into tangible impact."
    },
    {
      icon: Zap,
      title: "Precision Execution",
      desc: "Pixel-perfect graphics, industrial-grade print files, and high-engagement social media campaigns."
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Partnership",
      desc: "Whether a high-growth startup or established conglomerate, we elevate your offline and online presence."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0F14] relative border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00FF66] mb-2">
              VOL. 01 • ABOUT GREEN VISION
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              CREATIVE BY NATURE.<br />
              <span className="text-[#00FF66]">STRATEGIC BY MIND.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-slate-400 text-sm leading-relaxed">
              Green Vision is not just a design studio. It’s a creative ecosystem where ideas turn into high-conversion business impact.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Story Container (PDF Page 3 Text) */}
          <div className="lg:col-span-7 bg-[#12151C] rounded-3xl p-8 sm:p-10 border border-[#202532] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR PHILOSOPHY</span>
              </div>
              
              <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                "At <strong className="text-[#00FF66]">Green Vision Branding Studio</strong>, we believe powerful branding is more than just visuals—it's the bridge between imagination and identity."
              </p>

              {STUDIO_INFO.aboutText.slice(1).map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Checklist items */}
            <div className="grid sm:grid-cols-2 gap-3 pt-6 border-t border-[#202532] text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                <span>Ceramic & Industrial Design Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                <span>3D Tile & Space CGI Rendering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                <span>Large Format Outdoor Hoardings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00FF66]" />
                <span>Rajkot & Surat Regional Hubs</span>
              </div>
            </div>

          </div>

          {/* Pillars Cards Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#12151C] p-6 rounded-2xl border border-[#202532] hover:border-[#00FF66]/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00FF66] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
