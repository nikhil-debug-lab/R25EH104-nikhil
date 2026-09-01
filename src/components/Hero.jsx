import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText, FileDown, Sparkles, Code2, MapPin, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TerminalVisual from './TerminalVisual';

export default function Hero({ onDownloadResume, onViewResume }) {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Student Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-sm mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personalInfo.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Second Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mt-3 tracking-tight flex items-center gap-2"
            >
              <span>{personalInfo.heroSubheading}</span>
            </motion.h2>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* Highlights Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-6 text-xs text-slate-400 font-medium"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Arduino & Embedded Systems</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>C & Python Programming</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onViewResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-cyan-500/40 rounded-xl backdrop-blur-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
                aria-label="View Resume Modal"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group"
                aria-label="Download Resume"
              >
                <FileDown className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-colors" />
                <span className="underline underline-offset-4 decoration-slate-600 group-hover:decoration-cyan-400">
                  Download PDF
                </span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Interactive Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <TerminalVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
