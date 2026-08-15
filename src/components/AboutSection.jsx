'use client';

import EyeLogo from './EyeLogo';
import { Sparkles, Layers, Palette, MonitorPlay, Box, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const coreSkills = [
    {
      title: "Branding & Identity Design",
      desc: "Creating timeless logos, brand marks, guidelines, and visual languages that command authority.",
      icon: Palette,
      badge: "Core Mastery"
    },
    {
      title: "Creative Direction",
      desc: "Holistic brand storytelling, art direction, and thematic campaigns that resonate emotionally.",
      icon: Sparkles,
      badge: "Strategic Vision"
    },
    {
      title: "Digital & Print Design",
      desc: "From tactile corporate catalogs and lookbooks to high-conversion modern websites.",
      icon: Layers,
      badge: "End-to-End"
    },
    {
      title: "Social Media Visuals",
      desc: "Curated Instagram grids, motion sequences, and marketing creatives that drive user engagement.",
      icon: MonitorPlay,
      badge: "+40% Growth"
    },
    {
      title: "3D Mascot & Visualization",
      desc: "Distinctive character mascots like 'Master Gruton' and photorealistic porcelain surfaces.",
      icon: Box,
      badge: "Photorealistic"
    },
    {
      title: "Packaging & Presentation Kits",
      desc: "Industrial bags, tubs, luxury sample briefcases, and retail-ready packaging systems.",
      icon: Award,
      badge: "Shelf Impact"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-brand-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-lime/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span className="text-xs font-mono tracking-widest text-brand-lime uppercase font-semibold">
                ABOUT GREEN VISION STUDIO
              </span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal leading-tight">
              Creative by Nature. <br />
              <span className="italic text-zinc-300">Strategic by Mind.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-handwritten text-xl sm:text-2xl text-brand-lime mb-2">
              "Where vision meets impact—crafting brands that resonate."
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              RAJKOT & SURAT BRANDING ECOSYSTEM • EST. 2021
            </p>
          </div>
        </motion.div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Studio Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed"
          >
            <p className="text-white text-lg sm:text-xl font-medium leading-relaxed border-l-2 border-brand-lime pl-4">
              At <strong className="text-brand-lime">Green Vision Branding Studio</strong>, we believe powerful branding is more than just visuals—it's the bridge between imagination and market dominance. In a world flooded with messages, Green Vision helps brands stand out, command authority, and connect meaningfully with their target audience.
            </p>
            <p className="text-zinc-300 text-sm sm:text-base">
              Founded with a passion for creative excellence and strategic execution, <strong className="text-white">Green Vision Graphics Design & Branding Studio</strong> brings companies to life through trademark logos, tactile packaging, photorealistic 3D product visuals, and unforgettable brand storytelling. We don't just design—we engineer visual assets that inspire, convert, and leave an enduring market impression.
            </p>
            <p className="text-zinc-300 text-sm sm:text-base">
              From corporate brand identities to monumental highway hoardings along national corridors, custom 3D character mascots (such as Master Gruton) to high-engagement social media campaigns, we deliver end-to-end creative solutions across <strong className="text-white">Rajkot, Surat, Morbi, and Gujarat</strong>. Our multidisciplinary team of graphic designers, 3D CGI artists, and brand strategists is driven by one unified mission: growing brands that people remember and choose.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-serif-heading text-white">5+ Years</p>
                <p className="text-xs text-zinc-400 font-mono uppercase">Design Mastery</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-serif-heading text-brand-lime">100%</p>
                <p className="text-xs text-zinc-400 font-mono uppercase">In-House Craft</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-serif-heading text-white">Rajkot & Surat</p>
                <p className="text-xs text-zinc-400 font-mono uppercase">Dual Hubs</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Creative Emblem Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#141d16] dark:to-[#0d120e] border border-zinc-200 dark:border-brand-border/40 shadow-xl dark:shadow-2xl overflow-hidden group">
              {/* Radial glow within card */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-brand-lime/20 rounded-full blur-3xl group-hover:bg-brand-lime/30 transition-all duration-500" />

              <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                <div className="w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-950/80 border border-brand-lime/40 flex items-center justify-center p-4 shadow-xl shadow-brand-lime/10">
                  <EyeLogo className="w-16 h-10 text-brand-lime" glowing={true} />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-serif-heading text-zinc-900 dark:text-white font-normal mb-1">
                    Green Vision Branding Studio
                  </h3>
                  <p className="text-xs font-mono text-[#6E9B00] dark:text-brand-lime uppercase tracking-widest font-semibold">
                    Creative Ecosystem
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                  "Green Vision is not just a design studio. It's a creative ecosystem where ideas turn into impact."
                </p>

                <div className="w-full pt-4 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <span>Rajkot / Surat HQ</span>
                  <span className="text-[#6E9B00] dark:text-brand-lime flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" /> Certified Studio
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Skills Interactive Grid (PDF Page 4) */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Studio Competencies</span>
              <h3 className="text-2xl sm:text-3xl font-serif-heading text-white font-normal mt-1">
                Core Capabilities & Disciplines
              </h3>
            </div>
            <Link
              href="#services"
              className="text-xs font-mono text-brand-lime hover:underline hidden sm:flex items-center gap-1"
            >
              View Full Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-6 sm:p-8 rounded-2xl group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-brand-lime/50 flex items-center justify-center text-zinc-300 group-hover:text-brand-lime transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:border-brand-lime/30 group-hover:text-brand-lime transition-colors">
                      {skill.badge}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-brand-lime transition-colors mb-2 font-display">
                    {skill.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
