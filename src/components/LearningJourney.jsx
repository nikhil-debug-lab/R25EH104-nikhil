import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitCommit, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Cpu, 
  Database, 
  BrainCircuit, 
  Layers, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const stepIcons = [Code2, Cpu, Database, BrainCircuit, Layers];

export default function LearningJourney() {
  const { learningJourney } = portfolioData;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>07. CURRENTLY LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learning <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-center">
            {learningJourney.subheadline}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* Interactive Step Flow Visualizer */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl shadow-black/50">
          
          {/* Horizontal Step Connectors for Desktop */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-12">
            
            {/* Animated Connector Beam line behind steps */}
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-slate-800 -z-0">
              <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 w-3/5" />
            </div>

            {learningJourney.steps.map((step, idx) => {
              const Icon = stepIcons[idx] || Code2;
              const isSelected = activeStep === idx;
              const isCurrent = step.isCurrent;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isSelected
                      ? 'bg-slate-900/90 border border-cyan-500/50 shadow-lg shadow-cyan-950/60 scale-105'
                      : 'bg-slate-950/70 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                      : isCurrent
                      ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-500/40'
                      : 'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Status Indicator */}
                  <span className={`text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full mb-1.5 ${
                    isCurrent
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.status}
                  </span>

                  {/* Step Title */}
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Mobile / Tablet Vertical Step List */}
          <div className="lg:hidden space-y-3 mb-8">
            {learningJourney.steps.map((step, idx) => {
              const Icon = stepIcons[idx] || Code2;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{step.title}</div>
                      <div className="text-[11px] font-mono text-slate-400">{step.tag}</div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    step.isCurrent
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase Box */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Phase 0{learningJourney.steps[activeStep].id} — {learningJourney.steps[activeStep].tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {learningJourney.steps[activeStep].title}
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                {learningJourney.steps[activeStep].desc}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
              {learningJourney.steps[activeStep].isCurrent ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Currently Practicing</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>Roadmap Stage</span>
                </>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
