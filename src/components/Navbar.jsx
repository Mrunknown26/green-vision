import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Clients', href: '#clients' },
    { name: 'Works', href: '#works' },
    { name: 'Impact', href: '#impact' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090B0E]/90 backdrop-blur-md py-3 border-b border-[#202530]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with PDF Eye Symbol */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-[#00FF66]">
                <path d="M 10 50 C 30 20, 70 20, 90 50 C 70 80, 30 80, 10 50 Z" strokeWidth="6" />
                <circle cx="50" cy="50" r="14" fill="#00FF66" />
                <polygon points="50,40 54,50 50,60 46,50" fill="#090B0E" />
              </svg>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider text-white flex items-center gap-1">
                GREEN <span className="text-[#00FF66]">VISION</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 block -mt-1 font-mono">
                {STUDIO_INFO.locations}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 bg-[#12151B]/80 px-6 py-2 rounded-full border border-[#202530]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase font-medium tracking-wider text-slate-300 hover:text-[#00FF66] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=Hello%20Green%20Vision%20Studio,%20I'm%20interested%20in%20your%20design%20services!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-[#00FF66] text-black hover:bg-[#00E65C] transition-all hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090B0E]/98 border-b border-[#202530] px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-[#00FF66] py-1 border-b border-[#1A1E27]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=Hi%20Green%20Vision%20Studio`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00FF66] text-black font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP ({STUDIO_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
