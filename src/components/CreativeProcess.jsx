import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function CreativeProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-[#0D0F14] border-t border-[#1C202B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-xs font-mono text-[#00FF66] uppercase tracking-widest block mb-2">
              VOL. 01 • METHODOLOGY
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight">
              OUR CREATIVE <span className="text-[#00FF66]">PROCESS</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            A structured 6-phase strategic roadmap ensuring every project delivers measurable ROI and shelf impact.
          </p>
        </div>

        {/* Horizontal Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <button
              key={stepItem.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-[#00FF66] text-black border-[#00FF66] shadow-[0_0_25px_rgba(0,255,102,0.3)]'
                  : 'bg-[#12151B] text-slate-300 border-[#202530] hover:border-slate-500'
              }`}
            >
              <span className={`text-xs font-mono font-bold ${activeStep === idx ? 'text-black/80' : 'text-[#00FF66]'}`}>
                STEP {stepItem.step}
              </span>
              <span className="text-sm font-extrabold tracking-wider uppercase mt-3">
                {stepItem.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-[#12151C] border border-[#202532] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF66]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Number Display */}
            <div className="lg:col-span-4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#202532] pb-6 lg:pb-0 lg:pr-8">
              <span className="text-7xl sm:text-8xl font-black text-[#00FF66] font-mono leading-none">
                {PROCESS_STEPS[activeStep].step}
              </span>
              <h3 className="text-2xl font-extrabold uppercase text-white mt-4">
                {PROCESS_STEPS[activeStep].name}
              </h3>
              <p className="text-sm font-medium text-[#00FF66] mt-1">
                {PROCESS_STEPS[activeStep].summary}
              </p>
            </div>

            {/* Step Details & Outputs */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PHASE EXECUTION DETAILS</span>
              </div>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {PROCESS_STEPS[activeStep].details}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#202532]">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle className="w-4 h-4 text-[#00FF66]" />
                  <span>Iterative Collaboration & Quality Guarantee</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl bg-[#181D26] text-slate-300 text-xs font-semibold disabled:opacity-40 hover:bg-[#202530]"
                  >
                    PREVIOUS
                  </button>
                  <button
                    disabled={activeStep === PROCESS_STEPS.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                    className="px-4 py-2 rounded-xl bg-[#00FF66] text-black text-xs font-extrabold disabled:opacity-40 hover:bg-[#00E65C] flex items-center gap-1"
                  >
                    <span>NEXT STEP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
