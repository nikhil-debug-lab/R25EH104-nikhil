import React from 'react';
import { motion } from 'framer-motion';
import { Target, Quote, Sparkles, Compass, CheckCircle2, Cpu, Code, Radio, Globe, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const interestIcons = {
  Code: Code,
  Cpu: Cpu,
  Radio: Radio,
  Globe: Globe,
  Zap: Zap
};

export default function CareerObjective() {
  const { careerObjective, careerInterests } = portfolioData;

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background glowing aura */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standout Glowing Border Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-blue-500/40 shadow-2xl shadow-cyan-950/40"
        >
          <div className="rounded-[22px] bg-slate-950/95 p-8 sm:p-12 md:p-14 backdrop-blur-2xl relative overflow-hidden">
            
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Badge & Icon */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>06. CAREER FOCUS</span>
              </div>
              <Quote className="w-10 h-10 text-slate-800" />
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
              Career <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Interests & Profile</span>
            </h2>

            {/* Main Statement */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 leading-relaxed sm:leading-relaxed md:leading-relaxed tracking-tight">
              "{careerObjective.statement}"
            </blockquote>

            {/* Focus Pillars */}
            <div className="mt-10 pt-8 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-4">
                Target Career Interests
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {careerInterests.map((interest, index) => {
                  const IconComp = interestIcons[interest.icon] || Sparkles;
                  return (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-200 hover:text-white transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-950 group-hover:text-cyan-300 transition-colors">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-xs text-white group-hover:text-cyan-300">
                          {interest.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {interest.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
