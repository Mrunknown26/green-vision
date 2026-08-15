'use client';

import { useState } from 'react';
import { clientsList, clientStats } from '@/data/clientsData';
import { testimonialsList } from '@/data/testimonialsData';
import { Star, ChevronLeft, ChevronRight, Quote, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClienteleSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="clientele" className="py-24 sm:py-32 relative bg-brand-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-lime/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
            ENTERPRISE CLIENTELE
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal leading-tight mb-4">
            We Will Help Your Brand to <br />
            <span className="italic text-brand-lime">Flourish Your Business.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Trusted by industry-defining ceramic manufacturers, industrial leaders, and forward-thinking enterprises across India and global export markets.
          </p>
        </motion.div>

        {/* Client Logos Grid (20 Brands from PDF) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20"
        >
          {clientsList.map((client, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-brand-lime/40 transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-default hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-white/10 group-hover:border-brand-lime/40 flex items-center justify-center text-zinc-400 group-hover:text-brand-lime transition-colors mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white font-display tracking-tight">
                {client.name}
              </h4>
              <span className="text-[10px] font-mono text-zinc-500 group-hover:text-brand-lime mt-1 transition-colors">
                {client.tag}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-zinc-950/80 border border-white/10 mb-20"
        >
          <div className="text-center p-4">
            <p className="text-3xl sm:text-5xl font-serif-heading text-brand-lime font-bold">20+</p>
            <p className="text-xs text-zinc-400 font-mono uppercase mt-1">Enterprise Clients</p>
          </div>
          <div className="text-center p-4 border-l border-white/10">
            <p className="text-3xl sm:text-5xl font-serif-heading text-white font-bold">100+</p>
            <p className="text-xs text-zinc-400 font-mono uppercase mt-1">Visual Assets Delivered</p>
          </div>
          <div className="text-center p-4 border-l border-white/10">
            <p className="text-3xl sm:text-5xl font-serif-heading text-brand-lime font-bold">40%</p>
            <p className="text-xs text-zinc-400 font-mono uppercase mt-1">Avg. Engagement Lift</p>
          </div>
          <div className="text-center p-4 border-l border-white/10">
            <p className="text-3xl sm:text-5xl font-serif-heading text-white font-bold">99.4%</p>
            <p className="text-xs text-zinc-400 font-mono uppercase mt-1">Client Satisfaction</p>
          </div>
        </motion.div>

        {/* Client Reviews Section (nobrainer style) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-zinc-900/60 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono text-brand-lime uppercase tracking-wider block mb-1">
                TESTIMONIALS & REPUTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-heading text-white font-normal">
                Don’t just take our word for it
              </h3>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-brand-lime hover:text-brand-dark text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-zinc-400 px-2">
                0{currentReview + 1} / 0{testimonialsList.length}
              </span>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-brand-lime hover:text-brand-dark text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Slide */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-brand-lime">
                {[...Array(testimonialsList[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-lime" />
                ))}
              </div>

              <p className="text-lg sm:text-2xl text-zinc-200 font-serif-heading font-normal leading-relaxed italic">
                "{testimonialsList[currentReview].text}"
              </p>

              <div>
                <h4 className="text-base font-bold text-white font-display">
                  {testimonialsList[currentReview].name}
                </h4>
                <p className="text-xs sm:text-sm text-brand-lime font-mono">
                  {testimonialsList[currentReview].role} • {testimonialsList[currentReview].company}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
              <div className="p-6 rounded-2xl bg-zinc-950/80 border border-brand-lime/30 text-center w-full max-w-xs space-y-2">
                <Quote className="w-8 h-8 text-brand-lime mx-auto opacity-70" />
                <p className="text-xs font-mono text-zinc-400 uppercase">Verified Client Feedback</p>
                <span className="inline-block text-[11px] px-2.5 py-1 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/20">
                  {testimonialsList[currentReview].tag}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
