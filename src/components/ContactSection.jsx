'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { buildGmailUrl, buildMailtoUrl, buildWhatsAppUrl, STUDIO_PHONE, STUDIO_EMAIL, STUDIO_LOCATIONS } from '@/lib/utils';
import EyeLogo from './EyeLogo';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Branding & Identity Design',
    budget: '₹50,000 - ₹2,00,000 / $1k-$3k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Branding & Identity Design',
    '3D Product Visualization & Mascot Creation',
    'Packaging & Sample Box Kits',
    'Hoarding & Outdoor Billboards',
    'Social Media Visuals & Art Direction',
    'Editorial Catalog & Lookbook',
    'Complete Creative Ecosystem'
  ];

  const budgetRanges = [
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,50,000',
    '₹1,50,000 - ₹5,00,000',
    '₹5,00,000+ / Enterprise Retainer'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A0C60F', '#00FF66', '#FFFFFF'],
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);

    // Open Gmail compose directly in new window
    const gmailUrl = buildGmailUrl(formData);
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = buildMailtoUrl(formData);
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-zinc-950/95 border-t border-brand-border/40 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-brand-lime/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header based on PDF Page 18 */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-mono font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
            GET IN TOUCH
          </div>
          <h2 className="font-serif-heading text-5xl sm:text-7xl lg:text-8xl text-white font-normal leading-tight tracking-tight mb-4">
            Let’s Work <br />
            <span className="italic text-brand-lime">Together.</span>
          </h2>
          <p className="font-handwritten text-xl sm:text-2xl text-zinc-300 max-w-xl mx-auto mb-2">
            "Ready to build something great? We love turning bold ideas into powerful visuals."
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono">
            DROP A MESSAGE AND LET’S GET STARTED!
          </p>
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Info */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-white/10 space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <EyeLogo className="w-10 h-6 text-brand-lime" glowing={true} />
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Green Vision Branding Studio</h3>
                  <p className="text-xs text-zinc-400 font-mono">Gujarat Creative Agency</p>
                </div>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${STUDIO_PHONE.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-brand-lime/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-brand-lime/40 text-brand-lime flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">Call or WhatsApp</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-brand-lime transition-colors">
                      {STUDIO_PHONE}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${STUDIO_EMAIL}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-brand-lime/40 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-brand-lime/40 text-brand-lime flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">Direct Studio Gmail</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-lime transition-colors break-all">
                      {STUDIO_EMAIL}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-white/10 text-brand-lime flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block uppercase">Studio Headquarters</span>
                    <span className="text-xs sm:text-sm font-medium text-zinc-200">
                      {STUDIO_LOCATIONS}
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours Badge */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-lime" /> Mon - Sat: 9:00 AM - 8:00 PM
                </span>
                <span className="text-brand-lime font-semibold">IST</span>
              </div>
            </div>

            {/* WhatsApp Direct Banner */}
            <div className="p-6 rounded-3xl bg-emerald-500/10 dark:bg-gradient-to-r dark:from-[#182a1d] dark:to-[#111c14] border border-[#25D366]/40 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Need a Fast Response?</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">Chat directly with our creative director on WhatsApp.</p>
              </div>
              <a
                href={buildWhatsAppUrl("Hi Green Vision! I have a branding & design inquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold rounded-xl text-xs flex items-center gap-1.5 transition-transform hover:scale-105 shadow-md shadow-[#25D366]/20 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Gmail / Mailto Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-brand-lime/30 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-brand-lime/20 border border-brand-lime text-brand-lime flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif-heading text-white font-normal">
                    Gmail Compose Opened!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    We pre-filled your project scope into your Gmail compose window. If it didn't open automatically, click below:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={buildGmailUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-brand-lime text-brand-dark font-bold rounded-full text-xs sm:text-sm hover:scale-105 transition-transform shadow-lg shadow-brand-lime/20"
                    >
                      Open Gmail Again
                    </a>
                    <button
                      onClick={handleMailtoFallback}
                      className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full text-xs font-semibold"
                    >
                      Use Default Mail Client (Mailto)
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 text-zinc-400 hover:text-white text-xs underline"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-serif-heading text-white font-normal">
                      Send a Direct Project Inquiry
                    </h3>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                        Your Name / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Patel (Patel Ceramics)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-lime rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. anand@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-lime rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 94845-25694"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-lime rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-lime rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-zinc-900 text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 px-2 rounded-xl text-center text-[11px] font-mono border transition-all ${formData.budget === b
                            ? 'bg-brand-lime/20 border-brand-lime text-brand-lime font-bold'
                            : 'bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/20'
                            }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your brand, target audience, deliverables needed (e.g. 3D renders, packaging dielines, outdoor hoardings), and any deadlines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-brand-lime rounded-xl p-4 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-4 bg-brand-lime hover:bg-brand-lime-light text-brand-dark font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-brand-lime/20 transition-all hover:scale-102 active:scale-98"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Inquiry via Gmail Compose</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-zinc-500 text-center font-mono">
                    Directly opens pre-filled compose draft to: {STUDIO_EMAIL}
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
