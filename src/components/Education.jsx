import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, MapPin, Calendar, BookOpen, CheckCircle, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06. ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-lg">
            Undergraduate engineering studies in Artificial Intelligence & Data Science.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Education Timeline Card */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Main Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl shadow-black/40 hover:border-cyan-500/40 transition-all duration-300">
                
                {/* Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.degree}
                </h3>

                {/* University Name */}
                <div className="flex items-center gap-2 text-cyan-300 font-medium text-base mb-4">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>{item.institution}</span>
                </div>

                {/* Curriculum / Focus Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Rigorous academic curriculum covering core computer science principles, C & Python programming, mathematical logic, and emerging Artificial Intelligence & Data Science frameworks.
                </p>

                {/* Academic Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Artificial Intelligence & Data Science</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Algorithmic Thinking & C Programming</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Python Problem Solving & Debugging</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Continuous Technical Growth</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
