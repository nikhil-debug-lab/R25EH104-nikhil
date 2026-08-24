import React from 'react';
import { motion } from 'framer-motion';
import { Languages, Heart, Code2, Brain, Laptop, Lightbulb, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const interestIcons = {
  Code: Code2,
  Brain: Brain,
  Laptop: Laptop,
  Lightbulb: Lightbulb,
};

export default function AdditionalInfo() {
  const { additionalInfo } = portfolioData;

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800"
          >
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Languages</h3>
                <span className="text-xs font-mono text-slate-400">Communication Skills</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {additionalInfo.languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-white">{lang.name}</span>
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800"
          >
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Interests</h3>
                <span className="text-xs font-mono text-slate-400">Passions & Focus</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {additionalInfo.interests.map((item, index) => {
                const Icon = interestIcons[item.icon] || Code2;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-slate-800 text-purple-400 group-hover:text-purple-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
