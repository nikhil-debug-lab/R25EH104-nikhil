import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Code2, 
  Cpu, 
  Globe, 
  Brain, 
  Bug, 
  Rocket, 
  UserCheck, 
  Sparkles,
  Zap,
  Building2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  MapPin: MapPin,
  Code2: Code2,
  Cpu: Cpu,
  Globe: Globe,
  Brain: Brain,
  Bug: Bug,
  Rocket: Rocket,
  Zap: Zap,
  Building2: Building2
};

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>01. INTRODUCTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2.5 mb-4 text-cyan-300 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Software & Electronics Engineering Profile</span>
              </div>

              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-slate-300 font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core focus quote callout */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-start gap-3 bg-slate-900/40 p-4 rounded-xl">
                <div className="w-1.5 h-12 bg-cyan-500 rounded-full shrink-0" />
                <p className="text-sm font-medium text-slate-300 italic">
                  "Dedicated to mastering programming rigor, low-level microcontroller integration, memory allocation, and deploying practical web solutions."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: "At a Glance" Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 w-full"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl shadow-black/40">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    At a Glance
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80">
                  Profile Highlights
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {about.atAGlance.map((item, index) => {
                  const IconComponent = iconMap[item.icon] || Sparkles;
                  return (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-950/60 border border-slate-700/60 group-hover:border-cyan-500/40 text-cyan-400 transition-colors shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-mono text-slate-400 tracking-wide uppercase">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors truncate">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
