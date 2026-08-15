'use client';

import { useState } from 'react';
import { creativeProcessSteps } from '@/data/processData';
import { Compass, Search, Lightbulb, PenTool, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Compass,
  Search,
  Lightbulb,
  PenTool,
  MessageSquare,
  CheckCircle,
};

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-zinc-950/80 border-t border-white/10 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-lime/5 blur-[150px] rounded-full pointer-events-none" />

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
                METHODOLOGY
              </span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal leading-tight">
              Our 6-Stage <br />
              <span className="italic text-zinc-300">Creative Process</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400">
            A battle-tested methodology transforming raw ideas into high-converting brand identities, 3D assets, and market-ready packaging.
          </p>
        </motion.div>

        {/* 6 Step Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeProcessSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Lightbulb;
            const isCurrent = activeStep === idx;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-8 rounded-3xl transition-all duration-300 border flex flex-col justify-between relative overflow-hidden group cursor-pointer ${isCurrent
                  ? 'bg-zinc-900 border-brand-lime/50 shadow-xl shadow-brand-lime/10 -translate-y-1'
                  : 'bg-zinc-900/40 hover:bg-zinc-900/80 border-white/5 hover:border-white/20'
                  }`}
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${isCurrent
                    ? 'bg-brand-lime text-brand-dark shadow-md shadow-brand-lime/30'
                    : 'bg-zinc-800 border border-white/10 text-zinc-300 group-hover:text-brand-lime group-hover:border-brand-lime/40'
                    }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-3xl sm:text-4xl font-serif-heading font-normal text-zinc-600 group-hover:text-brand-lime transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/20">
                      {step.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-heading text-white font-normal group-hover:text-brand-lime transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-medium">
                    {step.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
