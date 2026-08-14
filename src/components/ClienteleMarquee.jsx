import React from 'react';
import { CLIENTELE } from '../data/portfolioData';
import { Building2, Sparkles } from 'lucide-react';

export default function ClienteleMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...CLIENTELE, ...CLIENTELE];

  return (
    <section id="clients" className="py-20 bg-[#090B0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2">
              VOL. 01 • OUR TRUSTED PARTNERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              ESTEEMED <span className="text-[#00FF66]">CLIENTELE</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#00FF66] font-mono text-sm uppercase tracking-wider font-semibold">
              WE WILL HELP YOUR BRAND TO FLOURISH YOUR BUSINESS
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden py-4 bg-[#0D1016] border-y border-[#202530]">
        
        {/* Gradient Fades on Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#090B0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#090B0E] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-6 px-4">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 bg-[#14171E] border border-[#202530] rounded-2xl px-6 py-4 flex items-center gap-4 hover:border-[#00FF66] transition-colors group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center font-extrabold text-sm group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                {client.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-extrabold tracking-wide uppercase text-white group-hover:text-[#00FF66] transition-colors">
                  {client.name}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {client.category} • {client.tagline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid view of featured corporate partners */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {CLIENTELE.slice(0, 10).map((c, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#12151C] border border-[#202530] text-center hover:border-slate-500 transition-all"
            >
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block truncate">
                {c.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 block mt-0.5">
                {c.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
