'use client';

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Video from 'yet-another-react-lightbox/plugins/video';

import {
  portfolio2026Info,
  portfolio2026Items,
} from '@/data/portfolio2026Data';
import PortfolioVideoPlayer from '@/components/PortfolioVideoPlayer';

export default function PortfolioShowcase2026() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const videoElementsMap = useRef(new Map());
  const isClosingFromPopstate = useRef(false);

  // Synchronize browser back button navigation with lightbox
  useEffect(() => {
    if (lightboxIndex >= 0) {
      // Push history state when lightbox opens
      window.history.pushState({ lightboxOpen: true }, '');

      const handlePopState = () => {
        // User pressed browser back button or performed back swipe gesture
        isClosingFromPopstate.current = true;
        setLightboxIndex(-1);
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [lightboxIndex]);

  // Handle closing lightbox from UI (X button, backdrop click, Escape key)
  const handleCloseLightbox = useCallback(() => {
    if (lightboxIndex >= 0) {
      if (!isClosingFromPopstate.current) {
        // Revert history state to keep browser history stack clean
        window.history.back();
      }
      isClosingFromPopstate.current = false;
      setLightboxIndex(-1);
    }
  }, [lightboxIndex]);

  // All portfolio items (editorial layout with images and high-def videos)
  const allItems = portfolio2026Items;

  // Track and coordinate single video playback across the page
  const handleVideoPlay = useCallback((id, videoEl) => {
    // Pause any other video playing
    videoElementsMap.current.forEach((el, otherId) => {
      if (otherId !== id && el && !el.paused) {
        el.pause();
      }
    });
    if (videoEl) {
      videoElementsMap.current.set(id, videoEl);
    }
    setActiveVideoId(id);
  }, []);

  const handleVideoPause = useCallback((id) => {
    setActiveVideoId((prev) => (prev === id ? null : prev));
  }, []);

  // Open Lightbox and ensure all inline videos are stopped
  const handleOpenLightbox = useCallback((idx) => {
    videoElementsMap.current.forEach((el) => {
      if (el && !el.paused) {
        el.pause();
      }
    });
    setActiveVideoId(null);
    setLightboxIndex(idx);
  }, []);

  // Format slides for Yet Another React Lightbox (supporting images, videos, and native SVG)
  const lightboxSlides = useMemo(() => {
    return allItems.map((item) => {
      if (item.type === 'video') {
        return {
          type: 'video',
          width: item.width || 1920,
          height: item.height || 1080,
          poster: item.thumbSrc,
          sources: [
            {
              src: item.src,
              type: 'video/mp4',
            },
          ],
        };
      }
      if (item.type === 'svg' || item.src.endsWith('.svg')) {
        return {
          type: 'svg',
          src: item.src,
          alt: item.alt,
          aspectRatio: item.aspectRatio || 1.4138459273,
          download: `${item.title.replace(/\s+/g, '_')}_Portfolio_2026.svg`,
        };
      }
      return {
        src: item.fullSrc,
        alt: item.alt,
        download: `${item.title.replace(/\s+/g, '_')}_Portfolio_2026.png`,
      };
    });
  }, [allItems]);

  return (
    <section id="portfolio-2026" className="relative w-full pt-20 sm:pt-24 overflow-hidden">
      {/* Hidden semantic H1 for Googlebot and Screen Readers */}
      <h1 className="sr-only">Green Vision — Branding, Graphic Design & 3D Advertising Studio • Rajkot & Surat</h1>
      <div className="w-full bg-zinc-950">
        <div className="space-y-0 w-full">
          {allItems.map((item, idx) => {
            const isVideo = item.type === 'video';
            const isSvg = item.type === 'svg' || item.src.endsWith('.svg');

            return (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5 }}
                className="relative w-full"
              >
                {isVideo ? (
                  <PortfolioVideoPlayer
                    item={item}
                    index={idx}
                    isActive={activeVideoId === item.id}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onExpandLightbox={handleOpenLightbox}
                  />
                ) : isSvg ? (
                  <div
                    className="relative w-full h-full bg-zinc-950 overflow-hidden cursor-pointer"
                    style={{ aspectRatio: `${item.aspectRatio || (16 / 9)}` }}
                    onClick={() => handleOpenLightbox(idx)}
                  >
                    <object
                      data={item.src}
                      type="image/svg+xml"
                      className="w-full h-full block pointer-events-auto"
                      aria-label={item.alt}
                    >
                      {/* High-res fallback image */}
                      <Image
                        src="/images/newportfolio-2026/page_27.jpg"
                        alt={item.alt}
                        fill
                        sizes="100vw"
                        className="object-cover w-full h-full"
                      />
                    </object>
                  </div>
                ) : (
                  <div
                    className="relative w-full bg-zinc-950 cursor-pointer h-full"
                    // style={{ aspectRatio: `${item.aspectRatio || (16 / 9)}` }}
                    onClick={() => handleOpenLightbox(idx)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      // style={{ aspectRatio: `${item.aspectRatio || (16 / 9)}` }}
                      fill
                      sizes="100vw"
                      className="object-cover !relative w-full h-full"
                      priority={idx < 3}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          YET ANOTHER REACT LIGHTBOX (WITH NATIVE SVG + VIDEO + ZOOM + FULLSCREEN)
          ===================================================================== */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={handleCloseLightbox}
        index={lightboxIndex}
        slides={lightboxSlides}
        render={{
          slide: ({ slide, rect }) => {
            if (slide.type === 'svg') {
              return (
                <div
                  className="relative flex items-center justify-center w-full h-full max-w-full max-h-full p-2 sm:p-6 select-none pointer-events-none"
                  style={{ width: rect ? rect.width : '100%', height: rect ? rect.height : '100%' }}
                >
                  <object
                    data={slide.src}
                    type="image/svg+xml"
                    className="max-w-full max-h-full object-contain pointer-events-auto shadow-2xl"
                    style={{
                      aspectRatio: `${slide.aspectRatio || 1.4138459273}`,
                      width: 'auto',
                      height: '100%',
                      maxHeight: rect ? rect.height * 0.95 : '90vh',
                      maxWidth: rect ? rect.width * 0.95 : '90vw',
                    }}
                    aria-label={slide.alt || 'SVG View'}
                  >
                    <img
                      src="/images/newportfolio-2026/page_27.jpg"
                      alt={slide.alt || 'SVG View'}
                      className="max-w-full max-h-full object-contain"
                    />
                  </object>
                </div>
              );
            }
            return undefined;
          },
        }}
        plugins={[
          Zoom,
          Fullscreen,
          Video,
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
