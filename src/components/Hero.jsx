'use client';

import { useState } from 'react';
import Link from 'next/link';
import EyeLogo from './EyeLogo';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2, Play } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Hero() {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient decorative shapes & radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Edition & Location Badge Pills matching PDF Cover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8"
        >
          <span className="px-3.5 py-1 rounded-full bg-brand-lime/10 dark:bg-brand-lime/10 border border-brand-lime/30 text-[#6E9B00] dark:text-brand-lime text-xs font-mono tracking-wider uppercase shadow-sm font-bold">
            GREEN VISION BRANDING STUDIO
          </span>
          <span className="px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-300 text-xs font-mono tracking-wider uppercase shadow-sm">
            RAJKOT • SURAT • GUJARAT
          </span>
          <span className="px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-white/10 text-zinc-700 dark:text-zinc-300 text-xs font-mono tracking-wider uppercase hidden md:inline-block shadow-sm">
            GRAPHIC DESIGN & 3D VISUALIZATION
          </span>
        </motion.div>

        {/* Central Kinetic Headline with nobrainer.co.nz Style Instrument Serif */}
        <div className="text-center max-w-5xl mx-auto relative">
          {/* Floating Sticker: Established 2021 Circular Stamp (top left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block absolute -top-8 -left-6 z-20 animate-spin-slow pointer-events-none"
          >
            <div className="relative w-24 h-24 rounded-full border border-brand-lime/40 bg-white/80 dark:bg-zinc-950/70 backdrop-blur-md flex items-center justify-center p-2 shadow-xl shadow-brand-lime/10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-500 dark:text-zinc-400 font-mono text-[9px] uppercase tracking-widest fill-current">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text>
                  <textPath href="#circlePath" startOffset="0%">
                    • GREEN VISION STUDIO • EST 2021 •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[#6E9B00] dark:text-brand-lime text-xs font-bold font-mono">
                GV
              </div>
            </div>
          </motion.div>

          {/* Massive Kinetic Serif Title */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-heading leading-[1.04] text-zinc-900 dark:text-white tracking-tight"
          >
            Where Vision Meets <br className="hidden sm:inline" />
            <span className="italic font-normal text-gradient-accent relative inline-block">
              Impact.
              {/* Green Vision signature neon underline */}
              <span className="absolute -bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-brand-lime to-brand-green rounded-full opacity-80" />
            </span>
          </motion.h1>

          {/* Subheading Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            <strong className="text-zinc-900 dark:text-white font-semibold">Green Vision</strong> is Gujarat’s premier <span className="text-zinc-900 dark:text-white font-medium">Branding, Graphic Design & 3D Advertising Studio</span> based in Rajkot & Surat. Specializing in high-recall visual identities, 3D character mascots, commercial packaging architectures, and monumental highway outdoor hoardings.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <Link
              href="#work"
              className="group relative inline-flex items-center gap-3 bg-brand-lime hover:bg-brand-lime-light text-brand-dark px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-brand-lime/25 hover:scale-105 active:scale-95"
            >
              <span>Explore Selected Works</span>
              <div className="w-7 h-7 rounded-full bg-brand-dark text-brand-lime flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white hover:text-[#6E9B00] dark:hover:text-brand-lime border border-zinc-300 dark:border-white/15 hover:border-brand-lime/40 px-7 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 backdrop-blur-md hover:scale-105 shadow-sm"
            >
              <span>Start a Project</span>
              <Sparkles className="w-4 h-4 text-brand-lime" />
            </Link>

            <Link
              href="#estimator"
              className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <span>Get Instant Quote</span>
              <span className="text-[#6E9B00] dark:text-brand-lime">→</span>
            </Link>
          </motion.div>

          {/* Key Value Points / Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
              <span>20+ Top Enterprise Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
              <span>3D Mascot & Packaging Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
              <span>Production-Ready Print Dielines</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
              <span>Fast Turnaround & Revisions</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="text-center mt-12">
        <Link
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-zinc-500 hover:text-brand-lime transition-colors group text-xs font-mono tracking-widest uppercase"
        >
          <span>Scroll to Explore</span>
          <div className="w-8 h-8 rounded-full border border-zinc-700 group-hover:border-brand-lime flex items-center justify-center transition-all animate-bounce">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>
    </section>
  );
}
