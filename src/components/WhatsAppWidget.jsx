'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, STUDIO_PHONE } from '@/lib/utils';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    "Hi, I need branding for my business!",
    "Looking for 3D packaging & mascot design.",
    "Need a quote for outdoor hoarding & billboard design.",
    "Want to discuss social media creative direction."
  ];

  const handleSend = (text) => {
    const messageToSend = text || customMsg || "Hi Green Vision Branding Studio! I'm interested in starting a project.";
    const url = buildWhatsAppUrl(messageToSend);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive Chat Popup Box */}
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[360px] bg-white dark:bg-[#111812] border border-[#25D366]/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-50 dark:bg-gradient-to-r dark:from-[#1b2b1e] dark:to-[#122015] p-4 border-b border-[#25D366]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5 fill-[#25D366]/20" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white dark:border-[#111812] rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Green Vision Studio</h4>
                <p className="text-xs text-[#25D366] flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block" />
                  Typically replies in 5 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3 bg-zinc-50/80 dark:bg-zinc-950/60">
            <div className="bg-white dark:bg-[#18241b] text-zinc-800 dark:text-zinc-200 p-3 rounded-2xl rounded-tl-none border border-zinc-200 dark:border-white/5 text-xs sm:text-sm leading-relaxed shadow-sm">
              <p className="font-medium text-[#25D366] mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Green Vision Creative Team
              </p>
              Hello! 👋 Welcome to Green Vision Branding Studio (Rajkot / Surat). How can we help transform your brand today?
            </div>

            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium pt-1">Quick Inquiries:</p>
            <div className="flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="text-left text-xs bg-white dark:bg-zinc-900 hover:bg-[#25D366]/15 hover:border-[#25D366]/40 hover:text-[#25D366] text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 transition-all duration-150 shadow-sm dark:shadow-none"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="flex-1 bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 focus:border-[#25D366] rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold p-2 rounded-xl transition-transform hover:scale-105 shadow-md shadow-[#25D366]/20 flex items-center justify-center"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-4 h-4 text-black" />
                </button>
              </form>
            </div>

            <div className="text-center pt-1">
              <span className="text-[10px] text-zinc-500">Direct WhatsApp: {STUDIO_PHONE}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons: Download PDF & WhatsApp */}
      <div className="flex items-center gap-3">
        {/* PDF Download Button */}
        <a
          href="/pdf/Greenvision.pdf"
          download="Greenvision.pdf"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900/90 dark:bg-zinc-900 border border-brand-lime/40 text-brand-lime shadow-lg shadow-black/40 hover:bg-brand-lime hover:text-brand-dark hover:border-brand-lime hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-xl focus:outline-none"
          title="Download Green Vision Portfolio PDF"
          aria-label="Download Green Vision Portfolio PDF"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-y-0.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        </a>

        {/* Floating WhatsApp Action Button */}
        <div className="relative group">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-black shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-200 animate-radar focus:outline-none"
            aria-label="Open WhatsApp conversation with Green Vision"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black transition-transform rotate-90 duration-200" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 20 20" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
