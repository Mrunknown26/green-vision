import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Branding & Identity Design',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMailtoSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Please fill out your Full Name, Email, and Message before sending.');
      return;
    }

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setFormSent(true);

    // Format mailto URI targeting greenvisiondesignstudio@gmail.com
    const subject = encodeURIComponent(`Project Inquiry from ${formData.fullName} - Green Vision`);
    const body = encodeURIComponent(
      `Hello Green Vision Branding Studio,\n\n` +
      `You have received a new inquiry from your website:\n\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || 'N/A'}\n` +
      `Service Required: ${formData.service}\n\n` +
      `Message / Project Scope:\n${formData.message}\n\n` +
      `Sent via Green Vision Studio Website.`
    );

    const mailtoUrl = `mailto:${STUDIO_INFO.email}?subject=${subject}&body=${body}`;

    // Web Gmail fallback option or window.location redirect
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#090B0E] relative border-t border-[#1C202B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2">
              VOL. 01 • LET'S WORK TOGETHER
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
              GET IN <span className="text-[#00FF66]">TOUCH</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Ready to build something great? We love turning bold ideas into powerful visuals. Drop a message and let's get started!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Studio Contact Cards matching PDF Page 18 */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#12151C] border border-[#202530] rounded-3xl p-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF66]/10 text-[#00FF66] text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT CONTACT HUBS</span>
              </div>

              <div className="space-y-6 pt-2">
                
                {/* Phone Card */}
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#181D26] border border-[#202530] hover:border-[#00FF66] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center shrink-0 group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">PHONE / WHATSAPP</div>
                    <div className="text-lg font-extrabold text-white group-hover:text-[#00FF66] transition-colors mt-0.5">
                      {STUDIO_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#181D26] border border-[#202530] hover:border-[#00FF66] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center shrink-0 group-hover:bg-[#00FF66] group-hover:text-black transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">OFFICIAL EMAIL</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#00FF66] transition-colors mt-0.5 break-all">
                      {STUDIO_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#181D26] border border-[#202530]">
                  <div className="w-12 h-12 rounded-xl bg-[#00FF66]/10 text-[#00FF66] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">STUDIO LOCATIONS</div>
                    <div className="text-base font-extrabold text-white mt-0.5">
                      {STUDIO_INFO.locations}, GUJARAT
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Quick Chat CTA */}
              <div className="pt-4 border-t border-[#202530]">
                <a
                  href={`https://wa.me/${STUDIO_INFO.phoneRaw}?text=Hi%20Green%20Vision%20Studio,%20I'd%20like%20to%20discuss%20a%20new%20branding%20project!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#00FF66] text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#00E65C] transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>START INSTANT WHATSAPP CHAT</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Interactive Form with Gmail Mailto Trigger */}
          <div className="lg:col-span-7 bg-[#12151C] border border-[#202530] rounded-3xl p-8 sm:p-10 relative">
            
            <h3 className="text-2xl font-extrabold uppercase text-white mb-2">
              SEND US A MESSAGE
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-8">
              Fill out the form below. Clicking "Send Message" will launch Gmail / your mail client with pre-populated details!
            </p>

            {formSent && (
              <div className="mb-6 p-4 rounded-2xl bg-[#00FF66]/10 border border-[#00FF66] text-[#00FF66] flex items-center gap-3 text-xs font-mono font-bold">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>Mail app triggered! If your mail app didn't open automatically, use the WhatsApp button or email us directly at {STUDIO_INFO.email}</span>
              </div>
            )}

            <form onSubmit={handleMailtoSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2 font-semibold">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181D26] border border-[#202530] text-white text-sm focus:outline-none focus:border-[#00FF66] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2 font-semibold">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@brand.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181D26] border border-[#202530] text-white text-sm focus:outline-none focus:border-[#00FF66] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2 font-semibold">
                    PHONE / WHATSAPP NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181D26] border border-[#202530] text-white text-sm focus:outline-none focus:border-[#00FF66] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2 font-semibold">
                    SERVICE REQUIRED
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181D26] border border-[#202530] text-white text-sm focus:outline-none focus:border-[#00FF66] transition-colors"
                  >
                    <option value="Branding & Identity Design">Branding & Identity Design</option>
                    <option value="3D Tile & Space Visualization">3D Tile & Space Visualization</option>
                    <option value="Outdoor Hoarding & Billboards">Outdoor Hoarding & Billboards</option>
                    <option value="Social Media Campaign Strategy">Social Media Campaign Strategy</option>
                    <option value="3D Mascot Creation">3D Mascot Creation</option>
                    <option value="Product Packaging Design">Product Packaging Design</option>
                    <option value="Sample / Presentation Kits">Sample / Presentation Kits</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block mb-2 font-semibold">
                  YOUR MESSAGE / PROJECT DETAILS *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your brand goals, scope, timeline..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#181D26] border border-[#202530] text-white text-sm focus:outline-none focus:border-[#00FF66] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#00FF66] text-black font-extrabold text-sm tracking-wider uppercase hover:bg-[#00E65C] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,255,102,0.3)]"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE VIA GMAIL MAILTO</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
