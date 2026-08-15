'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, ArrowUpRight, ExternalLink, Calendar, MapPin, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, buildGmailUrl } from '@/lib/utils';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-white dark:bg-[#0F1410] border border-zinc-200 dark:border-brand-border/40 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-zinc-950/70 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-lime/20 dark:bg-brand-lime/15 text-zinc-900 dark:text-brand-lime border border-brand-lime/30 uppercase font-semibold">
              {project.category}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono hidden sm:inline-block">
              {project.year} • {project.location}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/15 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-10">
          {/* Main Visual */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-xl bg-zinc-900">
            <Image
              src={project.image}
              alt={`Green Vision Portfolio - ${project.title} (${project.subtitle})`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="bg-black/75 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/15 max-w-2xl shadow-2xl">
                <span className="text-xs font-mono uppercase tracking-widest font-bold block mb-1.5" style={{ color: '#A0C60F' }}>
                  {project.client}
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif-heading font-normal leading-tight" style={{ color: '#FFFFFF' }}>
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm italic mt-1.5 font-sans" style={{ color: '#E4E4E7' }}>
                  "{project.tagline}"
                </p>
              </div>
            </div>
          </div>

          {/* Key Metric Highlights */}
          {project.results && (
            <div className="grid grid-cols-3 gap-4 bg-zinc-50 dark:bg-zinc-950/80 p-6 rounded-2xl border border-zinc-200 dark:border-white/10">
              {project.results.map((res, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#6E9B00] dark:text-brand-lime">
                    {res.metric}
                  </p>
                  <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase mt-1">
                    {res.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 font-display">The Challenge</h3>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-200 dark:border-white/5">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 font-display">Our Strategic Solution</h3>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-200 dark:border-white/5">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3 font-display">Project Overview</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Sidebar Meta & Deliverables */}
            <div className="md:col-span-4 space-y-6">
              <div className="bg-zinc-50 dark:bg-zinc-900/70 p-6 rounded-2xl border border-zinc-200 dark:border-white/10 space-y-4">
                <h4 className="text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400 tracking-wider font-semibold">Deliverables & Assets</h4>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#6E9B00] dark:text-brand-lime flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquire CTA box */}
              <div className="bg-emerald-500/10 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:to-zinc-950 p-6 rounded-2xl border border-[#25D366]/40 dark:border-brand-lime/30 space-y-4 text-center">
                <Sparkles className="w-6 h-6 text-[#6E9B00] dark:text-brand-lime mx-auto" />
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Need a similar solution for your brand?</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Let's discuss how we can create high-impact assets for {project.category}.
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href={buildWhatsAppUrl(`Hi Green Vision! I saw the ${project.title} case study and want a similar project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-transform hover:scale-105"
                  >
                    Discuss on WhatsApp
                  </a>
                  <a
                    href={buildGmailUrl({
                      service: project.category,
                      message: `I am interested in a branding/design project similar to your case study: ${project.title}.`
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium rounded-xl text-xs transition-colors"
                  >
                    Inquire via Gmail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
