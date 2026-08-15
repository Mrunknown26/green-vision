'use client';

import { useState } from 'react';
import { servicesList } from '@/data/servicesData';
import { ArrowUpRight, Check, Sparkles, Clock, Layers, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl, buildGmailUrl } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(servicesList[0]);

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-brand-dark overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-lime/5 blur-[160px] rounded-full pointer-events-none" />

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
                OUR EXPERTISE // CAPABILITIES
              </span>
            </div>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal leading-tight">
              Design Disciplines <br />
              <span className="italic text-zinc-300">& Strategic Services</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400">
            Engineered for high recall, shelf dominance, and measurable commercial growth. Every solution is bespoke and production-ready.
          </p>
        </motion.div>

        {/* Interactive Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            {servicesList.map((service, idx) => {
              const isSelected = selectedService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between group ${isSelected
                    ? 'bg-zinc-900 border-brand-lime/60 shadow-xl shadow-brand-lime/10 translate-x-2'
                    : 'bg-zinc-950/60 hover:bg-zinc-900/60 border-white/5 hover:border-white/20'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs ${isSelected ? 'text-brand-lime font-bold' : 'text-zinc-500'}`}>
                      {service.number}
                    </span>
                    <div>
                      <h3 className={`text-base sm:text-lg font-display font-semibold transition-colors ${isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                        }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Active Service Deep Dive Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-brand-lime/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl font-serif-heading text-brand-lime">
                    {selectedService.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif-heading text-white font-normal">
                      {selectedService.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Turnaround: {selectedService.baseEstimateDays}
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono font-medium">
                  {selectedService.tag}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                {selectedService.longDesc}
              </p>

              {/* Key Deliverables & Features */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                  Key Scope & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-zinc-950/60 p-3.5 rounded-xl border border-white/5 text-xs sm:text-sm text-zinc-200">
                      <Check className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package Summary */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 text-xs text-zinc-400 mb-8 flex items-center justify-between gap-4">
                <div>
                  <span className="font-semibold text-zinc-200 block mb-0.5 font-mono">Final Output Package:</span>
                  <span>{selectedService.deliverables}</span>
                </div>
                <Clock className="w-5 h-5 text-brand-lime flex-shrink-0" />
              </div>

              {/* Service Actions */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={buildWhatsAppUrl(`Hi Green Vision, I want to discuss your service: ${selectedService.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all"
                >
                  Quick WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
