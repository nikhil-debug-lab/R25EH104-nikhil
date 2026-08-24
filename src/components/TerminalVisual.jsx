import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, Copy, Check, Sparkles, Cpu, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const tabs = [
  { id: 'solver.py', name: 'solver.py', lang: 'python', color: 'text-amber-400' },
  { id: 'main.c', name: 'main.c', lang: 'c', color: 'text-cyan-400' },
  { id: 'ai_pipeline.py', name: 'ai_pipeline.py', lang: 'python', color: 'text-purple-400' },
];

export default function TerminalVisual() {
  const [activeTab, setActiveTab] = useState('solver.py');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([
    'nikhil@developer:~$ python3 solver.py',
    '[✓] loading_environment() .......... READY',
    '[✓] solving_problems() ............. IN_PROGRESS',
    '[✓] debugging_code() ............... OPTIMIZED',
    '[✓] building_future() .............. TARGET_ACTIVE'
  ]);
  const [copied, setCopied] = useState(false);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs(['nikhil@developer:~$ compiling & executing...']);

    const steps = [
      `[>] target: ${activeTab}`,
      '[✓] syntax_analysis() ............. PASS (0 errors)',
      '[✓] logic_verification() ......... OK',
      '[✓] problem_solving_engine() ..... ACTIVATED',
      '[✓] S. Nikhil -> Ready for software & AI challenges!'
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  const handleCopy = () => {
    const code = portfolioData.terminalSnippets[activeTab];
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Decorative ambient glow orbs behind the terminal */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating mini badges around terminal */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -top-4 -right-2 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-950/50"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>AI & Data Science Focus</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden sm:flex absolute -bottom-4 -left-2 z-20 items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-purple-950/50"
      >
        <Cpu className="w-3.5 h-3.5 text-purple-400" />
        <span>C & Python Foundation</span>
      </motion.div>

      {/* Terminal Card */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950/90 shadow-2xl shadow-black/80 backdrop-blur-xl">
        {/* macOS-style Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
              nikhil@developer:~ (REVA Univ)
            </span>
          </div>

          {/* Interactive Run & Copy Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/40 transition-colors disabled:opacity-50"
              title="Run logic simulation"
            >
              <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
            <button
              onClick={handleCopy}
              className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              title="Copy code snippet"
              aria-label="Copy code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center px-2 pt-2 bg-slate-900/50 border-b border-slate-800/80 gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors border-t border-x ${
                activeTab === tab.id
                  ? 'bg-slate-950 text-white border-slate-700/80 border-b-transparent shadow-sm'
                  : 'bg-transparent text-slate-400 border-transparent hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Code2 className={`w-3.5 h-3.5 ${tab.color}`} />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Code Content Area */}
        <div className="p-4 bg-slate-950/95 font-mono text-xs overflow-x-auto max-h-56 min-h-[140px] text-slate-300">
          <pre className="leading-relaxed">
            <code>{portfolioData.terminalSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Simulated Live Console Output */}
        <div className="px-4 py-3 bg-black/60 border-t border-slate-800/90 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1.5 pb-1 border-b border-slate-800/50">
            <Terminal className="w-3 h-3 text-cyan-400" />
            <span className="uppercase text-[10px] tracking-wider font-semibold text-slate-400">
              Interactive Output
            </span>
          </div>
          <div className="space-y-1 text-slate-300 min-h-[60px] flex flex-col justify-end">
            {logs.map((log, index) => (
              <div
                key={index}
                className={`transition-opacity duration-200 ${
                  log.includes('[✓]') ? 'text-emerald-400 font-medium' : log.includes('nikhil@') ? 'text-cyan-300' : 'text-slate-300'
                }`}
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
