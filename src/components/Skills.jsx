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
  FileCode2,
  Globe,
  Radio,
  Zap,
  Activity,
  Binary,
  MemoryStick,
  Layout,
  UploadCloud
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
  Globe: Globe,
  Radio: Radio,
  Zap: Zap,
  Activity: Activity,
  Binary: Binary,
  MemoryStick: MemoryStick,
  Layout: Layout,
  UploadCloud: UploadCloud
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
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Hands-on technical stack spanning software programming, embedded electronics, web deployment, and core computer science fundamentals.
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

          {/* 1. Programming */}
          <motion.div variants={itemVariants} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Programming</h3>
                  <span className="text-[11px] font-mono text-slate-400">Languages</span>
                </div>
              </div>

              <div className="space-y-3">
                {skills.programming.map((item, idx) => {
                  const Icon = skillIcons[item.icon] || Code2;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="p-1 rounded bg-slate-800 text-cyan-400 group-hover:text-cyan-300">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                          Active
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>C & Python Practice</span>
            </div>
          </motion.div>

          {/* 2. Web & Tools */}
          <motion.div variants={itemVariants} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Web & Tools</h3>
                  <span className="text-[11px] font-mono text-slate-400">Dev & Cloud</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {skills.webAndTools.map((item, idx) => {
                  const Icon = skillIcons[item.icon] || Globe;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-400 leading-tight">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Git, GitHub & Vercel Deployment</span>
            </div>
          </motion.div>

          {/* 3. Embedded / Electronics */}
          <motion.div variants={itemVariants} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Embedded Systems</h3>
                  <span className="text-[11px] font-mono text-slate-400">Hardware & IoT</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {skills.embeddedAndElectronics.map((item, idx) => {
                  const Icon = skillIcons[item.icon] || Cpu;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-3.5 h-3.5 text-purple-400 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-400 leading-tight">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Arduino, HC-05, Relays & Circuits</span>
            </div>
          </motion.div>

          {/* 4. Core Concepts */}
          <motion.div variants={itemVariants} className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Core Concepts</h3>
                  <span className="text-[11px] font-mono text-slate-400">CS & Digital Logic</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {skills.coreConcepts.map((item, idx) => {
                  const Icon = skillIcons[item.icon] || Boxes;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                          {item.name}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-400 leading-tight">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>DSA, Memory & Digital Logic</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
