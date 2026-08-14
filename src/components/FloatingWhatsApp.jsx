import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { MessageSquare, Mail, Phone, X, ChevronUp, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [expanded, setExpanded] = useState(false);

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent("Hello Green Vision Studio! I visited your website and would like to discuss a branding project.")}`;
  const mailtoUrl = `mailto:${STUDIO_INFO.email}?subject=Website Inquiry - Green Vision`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Expanded Quick Action Popover */}
      {expanded && (
        <div className="bg-[#12151C]/95 backdrop-blur-xl border border-[#00FF66]/40 p-5 rounded-3xl shadow-2xl space-y-4 w-72 animate-slideUp">
          
          <div className="flex items-center justify-between border-b border-[#202530] pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00FF66] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>QUICK CONNECT HUB</span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-[#181D26]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            
            {/* Direct WhatsApp Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#00FF66] text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#00E65C] transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)]"
            >
              <div className="w-8 h-8 rounded-full bg-black text-[#00FF66] flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div>CHAT ON WHATSAPP</div>
                <div className="text-[10px] font-mono text-black/70 font-normal">Instant Response</div>
              </div>
            </a>

            {/* Direct Email Action */}
            <a
              href={mailtoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#181D26] border border-[#202530] text-slate-200 hover:border-[#00FF66] hover:text-[#00FF66] transition-all text-xs font-bold uppercase"
            >
              <div className="w-8 h-8 rounded-full bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div>SEND AN EMAIL</div>
                <div className="text-[10px] font-mono text-slate-400 font-normal truncate">{STUDIO_INFO.email}</div>
              </div>
            </a>

            {/* Direct Phone Action */}
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="flex items-center gap-3 p-3 rounded-2xl bg-[#181D26] border border-[#202530] text-slate-200 hover:border-[#00FF66] hover:text-[#00FF66] transition-all text-xs font-bold uppercase"
            >
              <div className="w-8 h-8 rounded-full bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div>CALL DIRECTLY</div>
                <div className="text-[10px] font-mono text-slate-400 font-normal">{STUDIO_INFO.phone}</div>
              </div>
            </a>

          </div>

          <div className="text-[10px] font-mono text-slate-500 text-center border-t border-[#202530] pt-2">
            RAJKOT / SURAT, GUJARAT
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button at Bottom Right */}
      <div className="flex items-center gap-2">
        
        {/* Helper Tooltip Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#12151C] border border-[#00FF66]/40 text-[#00FF66] text-xs font-mono font-bold shadow-lg animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
          <span>Chat on WhatsApp</span>
        </div>

        {/* Primary Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setExpanded(true)}
          className="relative w-14 h-14 rounded-full bg-[#00FF66] text-black flex items-center justify-center shadow-[0_0_25px_rgba(0,255,102,0.6)] hover:scale-110 hover:bg-[#00E65C] transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 stroke-[2.5]" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
        </a>

      </div>

    </div>
  );
}
