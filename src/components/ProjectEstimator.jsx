'use client';

import { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { buildGmailUrl, buildWhatsAppUrl } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function ProjectEstimator() {
  const [serviceType, setServiceType] = useState('Full Branding & Identity');
  const [scopeAddons, setScopeAddons] = useState(['3D Mockups', 'Print Dielines']);
  const [timeline, setTimeline] = useState('Standard (2-3 Weeks)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const services = [
    { name: 'Full Branding & Identity', baseDays: '10-14 days', level: 'Comprehensive' },
    { name: '3D Mascot & Packaging Design', baseDays: '12-18 days', level: 'Industrial/FMCG' },
    { name: 'Hoarding & Outdoor Billboards', baseDays: '5-8 days', level: 'Large Format' },
    { name: 'Social Media Visual Campaign', baseDays: '7-10 days', level: 'Digital Grid' },
    { name: 'Editorial Lookbook & Catalog', baseDays: '10-15 days', level: 'Publication' },
  ];

  const addonsList = [
    { id: '3D Mockups', name: 'Photorealistic 3D Renders', time: '+2 Days' },
    { id: 'Print Dielines', name: 'Production-Ready Print Dielines', time: '+2 Days' },
    { id: 'Brand Mascot', name: 'Custom Character Mascot Poses', time: '+3 Days' },
    { id: 'Motion Graphics', name: 'Animated Social & Logo Stings', time: '+2 Days' },
    { id: 'Express Delivery', name: 'Priority VIP Rush Queue', time: '-40% Time' },
  ];

  const toggleAddon = (id) => {
    if (scopeAddons.includes(id)) {
      setScopeAddons(scopeAddons.filter((item) => item !== id));
    } else {
      setScopeAddons([...scopeAddons, id]);
    }
  };

  const getTurnaround = () => {
    if (timeline.includes('Rush')) return '5 - 8 Business Days (Priority)';
    return '10 - 15 Business Days (Standard)';
  };

  const formattedMessage = `Project Scope Inquiry from ${clientName || 'Client'}:\n` +
    `• Service: ${serviceType}\n` +
    `• Add-ons: ${scopeAddons.join(', ') || 'Standard scope'}\n` +
    `• Timeline: ${timeline}\n` +
    `• Phone/WhatsApp: ${clientPhone || 'Not specified'}`;

  return (
    <section id="estimator" className="py-24 sm:py-32 relative bg-brand-dark border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-brand-lime/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE SCOPE & QUOTE BUILDER</span>
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-6xl text-white font-normal leading-tight mb-4">
            Calculate Your Project <br />
            <span className="italic text-brand-lime">Scope & Timeline</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Customize your deliverables, choose your turnaround, and generate a pre-formatted inquiry ready to send directly via Gmail or WhatsApp.
          </p>
        </motion.div>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configurator */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8 bg-zinc-900/60 p-8 sm:p-10 rounded-3xl border border-white/10"
          >
            {/* Step 1: Select Service */}
            <div>
              <label className="text-xs font-mono uppercase text-brand-lime tracking-wider block mb-3">
                01. Select Primary Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((serv) => (
                  <button
                    key={serv.name}
                    type="button"
                    onClick={() => setServiceType(serv.name)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                      serviceType === serv.name
                        ? 'bg-zinc-800 border-brand-lime text-white shadow-lg shadow-brand-lime/10'
                        : 'bg-zinc-950/60 border-white/5 text-zinc-300 hover:border-white/20'
                    }`}
                  >
                    <p className="text-sm font-semibold font-display">{serv.name}</p>
                    <span className="text-[11px] font-mono text-zinc-500 block mt-1">
                      {serv.level} • {serv.baseDays}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Add-ons & Scope */}
            <div>
              <label className="text-xs font-mono uppercase text-brand-lime tracking-wider block mb-3">
                02. Choose Specific Add-ons & Deliverables
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = scopeAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-brand-lime/15 border-brand-lime/60 text-white'
                          : 'bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center ${
                          isChecked ? 'bg-brand-lime text-black' : 'border border-zinc-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-lime">{addon.time}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <label className="text-xs font-mono uppercase text-brand-lime tracking-wider block mb-3">
                03. Timeline Preference
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Standard (2-3 Weeks)', 'Priority Rush (5-8 Days)'].map((timeOption) => (
                  <button
                    key={timeOption}
                    type="button"
                    onClick={() => setTimeline(timeOption)}
                    className={`py-3 px-4 rounded-xl text-center text-xs font-semibold border transition-all ${
                      timeline === timeOption
                        ? 'bg-brand-lime text-brand-dark border-brand-lime font-bold shadow-md shadow-brand-lime/20'
                        : 'bg-zinc-950/60 border-white/10 text-zinc-300 hover:border-white/20'
                    }`}
                  >
                    {timeOption}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Info inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1.5">Your Name / Brand</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma (Ceramics Co)"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-lime rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-zinc-400 block mb-1.5">Phone / WhatsApp</label>
                <input
                  type="text"
                  placeholder="e.g. +91 98765-43210"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-lime rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Project Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 sticky top-28"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#161F17] dark:to-[#0D120E] border border-zinc-200 dark:border-brand-lime/40 shadow-xl dark:shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-[#6E9B00] dark:text-brand-lime">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-brand-lime">
                    Custom Inquiry Package
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-brand-lime/20 dark:bg-brand-lime/10 text-zinc-900 dark:text-brand-lime border border-brand-lime/30 font-semibold">
                  Ready to Submit
                </span>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-3 text-xs text-zinc-700 dark:text-zinc-300">
                <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-white/5">
                  <span className="text-zinc-500 dark:text-zinc-400">Selected Core Service:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white text-right">{serviceType}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-white/5">
                  <span className="text-zinc-500 dark:text-zinc-400">Add-ons Selected:</span>
                  <span className="font-semibold text-[#6E9B00] dark:text-brand-lime text-right">{scopeAddons.length} Deliverables</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-white/5">
                  <span className="text-zinc-500 dark:text-zinc-400">Estimated Turnaround:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white text-right">{getTurnaround()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-white/5">
                  <span className="text-zinc-500 dark:text-zinc-400">Studio Team Assigned:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">Lead Designer + 3D Artist</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={buildGmailUrl({
                    name: clientName,
                    phone: clientPhone,
                    service: serviceType,
                    message: formattedMessage,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-lime hover:bg-brand-lime-light text-brand-dark font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-lime/25 transition-transform hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Gmail Compose</span>
                </a>

                <a
                  href={buildWhatsAppUrl(formattedMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-md shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 94845-25694)</span>
                </a>
              </div>

              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center font-mono">
                No obligations • Custom quote and portfolio deck delivered within 24h
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
