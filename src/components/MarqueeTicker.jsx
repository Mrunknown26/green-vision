'use client';

import EyeLogo from './EyeLogo';

export default function MarqueeTicker() {
  const tickerItems = [
    "BRANDING & IDENTITY DESIGN",
    "3D PRODUCT VISUALIZATION",
    "MASCOT CREATION",
    "PRODUCT PACKAGING ARCHITECTURE",
    "HOARDING & OUTDOOR BILLBOARDS",
    "SOCIAL MEDIA ART DIRECTION",
    "LUXURY SAMPLE BOX KITS",
    "EDITORIAL CATALOG DESIGN"
  ];

  return (
    <section className="relative py-8 bg-zinc-950 border-y border-brand-border/30 overflow-hidden select-none">
      {/* Infinite Forward Marquee */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee items-center">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <div key={idx} className="flex items-center mx-6 group">
              <span className="font-serif-heading text-4xl sm:text-6xl text-zinc-400 font-normal tracking-tight group-hover:text-brand-lime transition-colors duration-300">
                {item}
              </span>
              <div className="ml-8 text-brand-lime/70 group-hover:text-brand-lime transition-transform group-hover:scale-125">
                <EyeLogo className="w-8 h-5" interactive={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
