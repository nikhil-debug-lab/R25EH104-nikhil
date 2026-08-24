import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Bug, 
  BrainCircuit, 
  Cpu, 
  Network, 
  Boxes, 
  Workflow, 
  GitFork, 
  Layers, 
  Sparkles, 
  BookOpen, 
  FileCode2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillIcons = {
  Code: Code2,
  FileCode2: FileCode2,
  Terminal: Terminal,
  Bug: Bug,
  BrainCircuit: BrainCircuit,
  Cpu: Cpu,
  Network: Network,
  Boxes: Boxes,
  Workflow: Workflow,
  GitFork: GitFork,
};

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>02. CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Structured foundation built on programming discipline, analytical reasoning, and algorithmic problem solving.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* 4 Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {/* 1. Programming Languages */}
          <motion.div variants={itemVariants} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Programming</h3>
                  <span className="text-[11px] font-mono text-slate-400">Primary Stack</span>
                </div>
              </div>

              <div className="space-y-3">
                {skills.programming.map((item, idx) => {
                  const Icon = skillIcons[item.icon] || Code2;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 group-hover:text-cyan-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-white">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                        Active
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Core Language Foundation</span>
            </div>
          </motion.div>

          {/* 2. Core Skills */}
          <motion.div variants={itemVariants} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Core Skills</h3>
                  <span className="text-[11px] font-mono text-slate-400">Problem & Logic</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.coreSkills.map((item, idx) => {
                  const Icon = skillIcons[item.icon] || Cpu;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 text-xs font-medium text-slate-200 hover:text-white transition-all group"
                    >
                      <Icon className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Analytical Problem Solving</span>
            </div>
          </motion.div>

          {/* 3. Development Foundation */}
          <motion.div variants={itemVariants} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Dev Foundation</h3>
                  <span className="text-[11px] font-mono text-slate-400">CS Principles</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {skills.foundation.map((item, idx) => {
                  const Icon = skillIcons[item.icon] || Boxes;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all text-xs font-medium text-slate-200 group"
                    >
                      <Icon className="w-4 h-4 text-purple-400 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Algorithmic Thinking</span>
            </div>
          </motion.div>

          {/* 4. Currently Learning */}
          <motion.div variants={itemVariants} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Currently Learning</h3>
                  <span className="text-[11px] font-mono text-slate-400">Active Growth</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {skills.currentlyLearning.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col gap-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                        {item.name}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400/90">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Continuous Improvement</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
