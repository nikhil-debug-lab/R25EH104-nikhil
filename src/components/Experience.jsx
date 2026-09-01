import React from 'react';
import { motion } from 'framer-motion';
import { 
  Binary, 
  MemoryStick, 
  FileCode2, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Terminal,
  BrainCircuit 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { academicExperience } = portfolioData;

  const experienceCards = [
    {
      id: 1,
      title: "C Programming & Dynamic Memory",
      badge: "Memory Management",
      icon: MemoryStick,
      color: "cyan",
      tagline: "malloc • calloc • realloc • free",
      desc: "Hands-on practice with C programming, focusing on deterministic memory management, pointer arithmetic, struct memory layout, and preventing memory leaks using dynamic allocation functions.",
      bullets: [
        "Dynamic heap allocation with malloc & zero-initialized calloc",
        "Dynamic reallocation with realloc and explicit memory deallocation with free",
        "Pointers, array indexing, and memory safety fundamentals"
      ]
    },
    {
      id: 2,
      title: "Python Programming & Problem Solving",
      badge: "Algorithms & Logic",
      icon: FileCode2,
      color: "blue",
      tagline: "Lists • Functions • Problem Solving",
      desc: "Python programming practice involving list manipulations, modular functions, dictionaries, clean control flow, and structured problem-solving exercises.",
      bullets: [
        "Structured function design and test-driven logic breakdown",
        "List comprehension, slicing, and multi-dimensional data handling",
        "Systematic algorithmic debugging and time-complexity awareness"
      ]
    },
    {
      id: 3,
      title: "Digital Electronics & Logic Circuits",
      badge: "Hardware & Logic",
      icon: Binary,
      color: "purple",
      tagline: "Multiplexers • Ripple-Carry Adders",
      desc: "Academic exposure to fundamental digital electronics topics including multiplexers (MUX), ripple-carry adders, combinational logic design, and digital truth tables.",
      bullets: [
        "Logic design and synthesis of Multiplexers (MUX) & Demultiplexers",
        "Binary arithmetic logic with half-adders, full-adders, and Ripple-Carry Adders",
        "Boolean algebra simplification and combinational circuit verification"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>04. ACADEMIC & PRACTICAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic & Practical <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on engineering fundamentals spanning dynamic memory allocation in C, Python problem-solving paradigms, and digital electronics circuit logic.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experienceCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${
                      card.color === 'cyan'
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                        : card.color === 'blue'
                        ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                        : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {card.title}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400/90 mb-3.5">
                    {card.tagline}
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {card.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    {card.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Practical Rigor</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
