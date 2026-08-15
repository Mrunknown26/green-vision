'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import EyeLogo from './EyeLogo';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Selected Works', href: '#work' },
    { name: 'Portfolio 2026', href: '#portfolio-2026' },
    { name: 'Process', href: '#process' },
    { name: 'Clientele', href: '#clientele' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'py-3 bg-white/90 dark:bg-brand-dark/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-brand-border/30 shadow-md dark:shadow-2xl'
        : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* <EyeLogo className="w-10 h-6 text-brand-lime transition-transform group-hover:scale-110" glowing={true} /> */}
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tighter text-zinc-900 dark:text-white group-hover:text-[#6E9B00] dark:group-hover:text-brand-lime transition-colors flex items-center gap-1.5">
              GREEN VISION
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-mono">
              Branding Studio • Rajkot / Surat
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        {/* <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-zinc-900/70 border border-zinc-200 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm dark:shadow-none">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav> */}

        {/* Action CTAs & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          {/* <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-light text-brand-dark px-5 py-2 rounded-full font-semibold text-xs transition-all duration-200 shadow-md shadow-brand-lime/20 hover:scale-105 active:scale-95"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link> */}
        </div>

        {/* Mobile Hamburger Toggle & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          {/* <Link
            href="#contact"
            className="bg-brand-lime text-brand-dark px-3 py-1.5 rounded-full font-bold text-xs"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white shadow-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button> */}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {/* {mobileOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-brand-dark/95 backdrop-blur-2xl border-b border-zinc-200 dark:border-brand-border/40 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#6E9B00] dark:hover:text-brand-lime hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-3 bg-brand-lime text-brand-dark font-bold rounded-xl text-sm shadow-lg shadow-brand-lime/20"
            >
              Start a Project
            </Link>
            <a
              href={buildWhatsAppUrl("Hi Green Vision! I want to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold rounded-xl text-sm flex items-center justify-center gap-2"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </div>
      )} */}
    </header>
  );
}
