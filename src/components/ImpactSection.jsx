'use client';

import { impactStats } from '@/data/processData';
import EyeLogo from './EyeLogo';
import { ArrowUpRight, TrendingUp, Rocket, Layout, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const statIcons = [Rocket, Layout, TrendingUp, Award];

export default function ImpactSection() {
  return (
    <section className="py-24 sm:py-32 relative bg-zinc-950/90 border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-lime/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
                BUSINESS OUTCOMES
              </span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal leading-tight">
              Impact & <br />
              <span className="italic text-brand-lime">Measurable Results</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <EyeLogo className="w-12 h-8 text-brand-lime" glowing={true} />
            <p className="max-w-xs text-xs sm:text-sm text-zinc-400 font-mono">
              REAL COMMERCIAL VALUE DELIVERED TO ENTERPRISE BRANDS.
            </p>
          </div>
        </motion.div>

        {/* 4 Glowing Metric Cards from PDF Page 17 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impactStats.map((stat, idx) => {
            const Icon = statIcons[idx] || TrendingUp;
            return (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-brand-lime/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-brand-lime/10"
              >
                {/* Background accent number */}
                <span className="absolute -top-4 -right-4 text-7xl sm:text-9xl font-serif-heading font-bold text-white/[0.03] group-hover:text-brand-lime/[0.08] transition-colors pointer-events-none select-none">
                  {stat.number}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/10 group-hover:border-brand-lime/50 flex items-center justify-center text-zinc-300 group-hover:text-brand-lime transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/20 font-semibold">
                        {stat.highlight}
                      </span>
                      <span className="text-lg font-serif-heading text-zinc-500 font-bold">
                        {stat.number}
                      </span>
                    </div>
                  </div>

                  <p className="text-4xl sm:text-6xl font-serif-heading font-bold text-white group-hover:text-brand-lime transition-colors mb-3">
                    {stat.value}
                  </p>

                  <h3 className="text-lg sm:text-xl font-display font-semibold text-zinc-100 mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  <span>Verified Case Archive</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
