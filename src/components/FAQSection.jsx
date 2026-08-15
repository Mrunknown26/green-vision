'use client';

import { useState } from 'react';
import { faqList } from '@/data/testimonialsData';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 sm:py-32 relative bg-zinc-950/70 border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal leading-tight mb-4">
            Everything You Need <br />
            <span className="italic text-brand-lime">to Know Before Starting</span>
          </h2>
          <p className="text-sm text-zinc-400">
            Clear, transparent answers about our design process, deliverables, and production guarantees.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900 border-brand-lime/40 shadow-lg shadow-brand-lime/5'
                    : 'bg-zinc-950/60 border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand-lime text-black rotate-180' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Still have questions banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 rounded-2xl bg-zinc-900/60 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <h4 className="text-sm font-semibold text-white">Have a unique question or custom inquiry?</h4>
            <p className="text-xs text-zinc-400">Our studio team is available on WhatsApp and Gmail 6 days a week.</p>
          </div>
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-brand-lime text-brand-dark font-bold rounded-full text-xs hover:scale-105 transition-transform flex items-center gap-1.5"
          >
            <span>Ask Us Directly</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
