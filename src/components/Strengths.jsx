import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Bug, 
  Cpu, 
  BarChart3, 
  Sparkles, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const strengthIcons = {
  Brain: Brain,
  Bug: Bug,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Sparkles: Sparkles,
  Compass: Compass,
};

export default function Strengths() {
  const { strengths } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="strengths" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>04. CORE ATTRIBUTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Strengths</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Key cognitive traits, problem-solving mindset, and dedication to software craftsmanship.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3"></div>
        </div>

        {/* 6 Strength Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {strengths.map((item) => {
            const Icon = strengthIcons[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle Hover Gradient Glow Behind Card */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-20 blur transition-all duration-300 -z-10`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-slate-900 border border-slate-700/60 group-hover:border-cyan-500/50 text-cyan-400 transition-colors shadow-inner`}>
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      0{item.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="group-hover:text-cyan-400 transition-colors">Engineering Mindset</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
