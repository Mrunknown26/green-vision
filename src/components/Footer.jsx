import React from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { ArrowUp, Globe, Share2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090C] border-t border-[#1C202B] text-slate-400 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Footer Grid */}
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-[#1C202B]">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/40 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-[#00FF66]">
                  <path d="M 10 50 C 30 20, 70 20, 90 50 C 70 80, 30 80, 10 50 Z" strokeWidth="6" />
                  <circle cx="50" cy="50" r="14" fill="#00FF66" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                GREEN <span className="text-[#00FF66]">VISION</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {STUDIO_INFO.fullName} is a full-service branding, 3D visualization, outdoor hoarding, and advertising agency serving ceramics, manufacturing, and high-growth brands.
            </p>

            <div className="text-xs font-mono text-[#00FF66] font-semibold">
              {STUDIO_INFO.edition} • {STUDIO_INFO.locations}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#00FF66] transition-colors">About Studio</a></li>
              <li><a href="#skills" className="hover:text-[#00FF66] transition-colors">Core Capabilities</a></li>
              <li><a href="#process" className="hover:text-[#00FF66] transition-colors">Creative Process</a></li>
              <li><a href="#works" className="hover:text-[#00FF66] transition-colors">Selected Works</a></li>
              <li><a href="#impact" className="hover:text-[#00FF66] transition-colors">Impact & Results</a></li>
              <li><a href="#estimator" className="hover:text-[#00FF66] transition-colors">Project Estimator</a></li>
              <li><a href="#contact" className="hover:text-[#00FF66] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 font-mono">
            <h4 className="text-xs font-mono text-white uppercase tracking-widest font-bold">
              GET IN TOUCH
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00FF66]" />
                <span>WhatsApp: <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="text-[#00FF66] hover:underline font-bold">{STUDIO_INFO.phone}</a></span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00FF66]" />
                <span>Email: <a href={`mailto:${STUDIO_INFO.email}`} className="text-[#00FF66] hover:underline font-bold break-all">{STUDIO_INFO.email}</a></span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00FF66]" />
                <span>Locations: <span className="text-white font-bold">{STUDIO_INFO.locations}, GUJARAT</span></span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 font-mono text-[11px]">
            © {new Date().getFullYear()} Green Vision Branding Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#12151C] border border-[#202530] text-slate-300 hover:border-[#00FF66] hover:text-[#00FF66] transition-all flex items-center gap-2 font-mono text-xs"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
