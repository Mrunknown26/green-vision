'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

import {
  portfolio2026Info,
  portfolio2026Items,
} from '@/data/portfolio2026Data';

export default function PortfolioShowcase2026() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // All items — no filtering needed for this clean editorial layout
  const allItems = portfolio2026Items;

  // Format slides for Yet Another React Lightbox
  const lightboxSlides = useMemo(() => {
    return allItems.map((item) => ({
      src: item.fullSrc,
      alt: item.alt,
      download: `${item.title.replace(/\s+/g, '_')}_Portfolio_2026.png`,
    }));
  }, [allItems]);

  return (
    <section id="portfolio-2026" className="relative overflow-hidden" style={{ position: "absolute", width: "80%", left: "50%", transform: "translateX(-50%)", top: "9%" }}>
      {/* Hidden semantic H1 for Googlebot and Screen Readers */}
      <h1 className="sr-only">Green Vision — Branding, Graphic Design & 3D Advertising Studio • Rajkot & Surat</h1>
      <div className="bg-zinc-950">
        <div className="space-y-1">
          {allItems.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="relative w-full cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              <div className="relative w-full aspect-[16/9] bg-zinc-950">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="object-contain sm:object-cover"
                  priority={idx < 3}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =====================================================================
          4. YET ANOTHER REACT LIGHTBOX
          ===================================================================== */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={lightboxSlides}
        plugins={[
          Zoom,
          Fullscreen,
        ]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          scrollToZoom: true,
        }}
        slideshow={{
          autoplay: false,
          delay: 4000,
        }}
        animation={{
          fade: 250,
          swipe: 350,
        }}
        styles={{
          container: { backgroundColor: "rgba(4, 6, 4, 0.97)" },
        }}
      />
    </section>
  );
}
