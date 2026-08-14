import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/portfolioData';
import { Calculator, Check, ArrowRight, MessageSquare, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteEstimator() {
  const [selectedServices, setSelectedServices] = useState(['Branding & Identity']);
  const [selectedScale, setSelectedScale] = useState('Medium Brand');
  const [selectedTimeline, setSelectedTimeline] = useState('Standard (3-4 Weeks)');

  const serviceOptions = [
    { name: 'Branding & Identity', basePrice: 45000 },
    { name: '3D Tile & Space Renders', basePrice: 35000 },
    { name: 'Outdoor Hoarding Campaign', basePrice: 25000 },
    { name: 'Social Media Monthly Pack', basePrice: 30000 },
    { name: '3D Mascot Engineering', basePrice: 40000 },
    { name: 'Product Packaging System', basePrice: 35000 },
  ];

  const scaleOptions = [
    { name: 'Emerging Startup', multiplier: 0.8 },
    { name: 'Medium Brand', multiplier: 1.0 },
    { name: 'Corporate Enterprise', multiplier: 1.4 },
  ];

  const timelineOptions = [
    { name: 'Fast Track (1-2 Weeks)', urgency: 'Rush' },
    { name: 'Standard (3-4 Weeks)', urgency: 'Regular' },
    { name: 'Flexible (6+ Weeks)', urgency: 'Relaxed' },
  ];

  const toggleService = (name) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  // Calculate estimated investment range
  const baseTotal = selectedServices.reduce((acc, sName) => {
    const sObj = serviceOptions.find((s) => s.name === sName);
    return acc + (sObj ? sObj.basePrice : 0);
  }, 0);

  const scaleObj = scaleOptions.find((sc) => sc.name === selectedScale);
  const scaleMultiplier = scaleObj ? scaleObj.multiplier : 1.0;

  const estimatedTotal = Math.round(baseTotal * scaleMultiplier);
  const minEst = Math.round(estimatedTotal * 0.9);
  const maxEst = Math.round(estimatedTotal * 1.15);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  const getCustomMessage = () => {
    return `Hi Green Vision Studio! I calculated an estimate on your website:\n\nServices: ${selectedServices.join(', ')}\nScale: ${selectedScale}\nTimeline: ${selectedTimeline}\nEstimated Range: ₹${minEst.toLocaleString('en-IN')} - ₹${maxEst.toLocaleString('en-IN')}\n\nLet's discuss further!`;
  };

  const openWhatsAppEstimate = () => {
    triggerConfetti();
    const url = `https://wa.me/${STUDIO_INFO.phoneRaw}?text=${encodeURIComponent(getCustomMessage())}`;
    window.open(url, '_blank');
  };

  const openGmailEstimate = () => {
    triggerConfetti();
    const mailtoUrl = `mailto:${STUDIO_INFO.email}?subject=Custom Project Estimate Inquiry - ${encodeURIComponent(selectedScale)}&body=${encodeURIComponent(getCustomMessage())}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="estimator" className="py-24 bg-[#0D0F14] border-t border-[#1C202B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2">
              VOL. 01 • INSTANT COST CALCULATOR
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
              PROJECT <span className="text-[#00FF66]">ESTIMATOR</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Select your required services and scale to calculate an instant tailored estimate, then submit via WhatsApp or Email.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Options Selection */}
          <div className="lg:col-span-7 bg-[#12151C] border border-[#202530] rounded-3xl p-8 space-y-8">
            
            {/* Step 1: Select Services */}
            <div>
              <label className="text-xs font-mono text-[#00FF66] uppercase tracking-wider block mb-3 font-bold">
                1. SELECT REQUIRED SERVICES (MULTIPLE ALLOWED)
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceOptions.map((s) => {
                  const active = selectedServices.includes(s.name);
                  return (
                    <button
                      key={s.name}
                      onClick={() => toggleService(s.name)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        active
                          ? 'bg-[#00FF66]/10 border-[#00FF66] text-white shadow-[0_0_15px_rgba(0,255,102,0.15)]'
                          : 'bg-[#181D26] border-[#202530] text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider">{s.name}</span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${active ? 'bg-[#00FF66] border-[#00FF66] text-black' : 'border-slate-600'}`}>
                        {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div>
              <label className="text-xs font-mono text-[#00FF66] uppercase tracking-wider block mb-3 font-bold">
                2. BRAND SCALE / COMPANY SIZE
              </label>
              <div className="grid grid-cols-3 gap-3">
                {scaleOptions.map((sc) => {
                  const active = selectedScale === sc.name;
                  return (
                    <button
                      key={sc.name}
                      onClick={() => setSelectedScale(sc.name)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        active
                          ? 'bg-[#00FF66] text-black border-[#00FF66] font-extrabold'
                          : 'bg-[#181D26] border-[#202530] text-slate-300 hover:border-slate-500 text-xs font-semibold'
                      }`}
                    >
                      <span className="text-xs uppercase tracking-wider block">{sc.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div>
              <label className="text-xs font-mono text-[#00FF66] uppercase tracking-wider block mb-3 font-bold">
                3. DESIRED TIMELINE
              </label>
              <div className="grid grid-cols-3 gap-3">
                {timelineOptions.map((t) => {
                  const active = selectedTimeline === t.name;
                  return (
                    <button
                      key={t.name}
                      onClick={() => setSelectedTimeline(t.name)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        active
                          ? 'bg-[#00FF66] text-black border-[#00FF66] font-extrabold'
                          : 'bg-[#181D26] border-[#202530] text-slate-300 hover:border-slate-500 text-xs font-semibold'
                      }`}
                    >
                      <span className="text-xs uppercase tracking-wider block">{t.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#141820] to-[#0E1015] border border-[#00FF66]/40 rounded-3xl p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#202530] pb-4">
              <span className="text-xs font-mono text-slate-400">VOL. 01 ESTIMATE SUMMARY</span>
              <Calculator className="w-5 h-5 text-[#00FF66]" />
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">ESTIMATED INVESTMENT RANGE</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00FF66] font-mono mt-1">
                ₹{minEst.toLocaleString('en-IN')} - ₹{maxEst.toLocaleString('en-IN')}
              </div>
              <p className="text-[11px] text-slate-500 font-mono mt-1">
                *Estimated guide. Final proposal tailored after briefing call.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono border-t border-[#202530] pt-4">
              <div className="flex justify-between text-slate-300">
                <span>Selected Scope:</span>
                <span className="text-white font-bold">{selectedServices.length} Service(s)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Company Scale:</span>
                <span className="text-white font-bold">{selectedScale}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Timeline:</span>
                <span className="text-white font-bold">{selectedTimeline}</span>
              </div>
            </div>

            {/* Direct Action triggers */}
            <div className="space-y-3 pt-4 border-t border-[#202530]">
              <button
                onClick={openWhatsAppEstimate}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#00FF66] text-black font-extrabold text-xs tracking-wider uppercase hover:bg-[#00E65C] transition-all shadow-[0_0_20px_rgba(0,255,102,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>SEND ESTIMATE TO WHATSAPP</span>
              </button>

              <button
                onClick={openGmailEstimate}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#181D26] border border-[#202530] text-slate-200 font-bold text-xs tracking-wider uppercase hover:border-[#00FF66] hover:text-[#00FF66] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>SEND VIA GMAIL MAILTO</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
