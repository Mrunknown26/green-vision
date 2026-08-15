'use client';

import Link from 'next/link';
import EyeLogo from './EyeLogo';
import { ArrowUp, Mail, Phone, MapPin, Instagram, Linkedin, Dribbble, Sparkles } from 'lucide-react';
import { STUDIO_PHONE, STUDIO_EMAIL, STUDIO_LOCATIONS, buildWhatsAppUrl } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EDF3ED] dark:bg-black border-t border-zinc-200 dark:border-brand-border/30 pt-20 pb-12 relative overflow-hidden select-none transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant Logo & Statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between pb-16 border-b border-zinc-200 dark:border-white/10 gap-10"
        >
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <EyeLogo className="w-14 h-8 text-brand-lime" glowing={true} />
              <span className="font-display font-black text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
                GREEN VISION
              </span>
            </div>
            <p className="font-serif-heading text-2xl sm:text-3xl text-zinc-700 dark:text-zinc-300 font-normal leading-snug">
              "Where vision meets impact—crafting brands that resonate."
            </p>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              RAJKOT & SURAT • 2021-2026 ARCHIVE
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-zinc-900 hover:bg-brand-lime hover:text-brand-dark text-zinc-800 dark:text-white border border-zinc-300 dark:border-white/10 text-xs font-mono font-bold transition-all group shadow-sm"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
            <span className="text-[11px] font-mono text-zinc-500">
              Crafted for high-conversion & global design standards
            </span>
          </div>
        </motion.div>

        {/* Links Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 border-b border-zinc-200 dark:border-white/10 text-xs">
          {/* Col 1: Studio */}
          <div className="space-y-3">
            <h4 className="font-mono text-[#6A9400] dark:text-brand-lime uppercase tracking-wider font-semibold">
              Green Vision Studio
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Premier Branding & Advertising Studio delivering bespoke brand identities, 3D character mascots, high-impact hoardings, and packaging systems.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-[#6A9400] dark:text-brand-lime uppercase tracking-wider font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 font-medium">
              <li><Link href="#about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Design Disciplines</Link></li>
              <li><Link href="#work" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Selected Case Studies</Link></li>
              <li><Link href="#process" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Creative Process</Link></li>
              <li><Link href="#clientele" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Client Roster (20+)</Link></li>
              <li><Link href="#estimator" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Quote Estimator</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="font-mono text-[#6A9400] dark:text-brand-lime uppercase tracking-wider font-semibold">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Branding & Identity Design</li>
              <li>3D Mascot & Character Design</li>
              <li>Product Packaging & Sacks</li>
              <li>Hoarding & Outdoor Billboards</li>
              <li>Social Media Creative Strategy</li>
              <li>Luxury Sample Presentation Kits</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-[#6A9400] dark:text-brand-lime uppercase tracking-wider font-semibold">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#6A9400] dark:text-brand-lime" />
                <a href={`tel:${STUDIO_PHONE.replace(/\s+/g, '')}`} className="hover:text-zinc-950 dark:hover:text-white">
                  {STUDIO_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#6A9400] dark:text-brand-lime" />
                <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-zinc-950 dark:hover:text-white break-all">
                  {STUDIO_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#6A9400] dark:text-brand-lime" />
                <span>{STUDIO_LOCATIONS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Green Vision Branding Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#6A9400] dark:hover:text-brand-lime transition-colors">
              WhatsApp
            </a>
            <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-[#6A9400] dark:hover:text-brand-lime transition-colors">
              Gmail Direct
            </a>
            <Link href="#contact" className="hover:text-[#6A9400] dark:hover:text-brand-lime transition-colors">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
