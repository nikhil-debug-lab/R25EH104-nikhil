import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileDown, 
  Printer, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Code2, 
  Globe, 
  Layers 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onDownload }) {
  const { personalInfo } = portfolioData;

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-cyan-950/50 flex flex-col max-h-[92vh] z-10 overflow-hidden"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-slate-950/80 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-bold text-white tracking-wide">
                  Official Resume Document
                </span>
                <span className="hidden sm:inline text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  PDF & Preview
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onDownload}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Download PDF"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Resume Document Sheet */}
            <div className="p-4 sm:p-8 md:p-10 overflow-y-auto bg-slate-950/40 custom-scrollbar">
              
              {/* White/Clean Paper Styled Document Container */}
              <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 md:p-12 shadow-2xl border border-slate-200 font-sans max-w-3xl mx-auto selection:bg-cyan-200 selection:text-slate-900">
                
                {/* Header */}
                <div className="text-center pb-4 mb-4 border-b border-slate-300">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    S NIKHIL
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                    Bengaluru, Karnataka, India • Aspiring Software / Electronics Engineer
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-2 font-mono">
                    <span>Email: {personalInfo.email}</span>
                    <span>•</span>
                    <span>Phone: {personalInfo.phone}</span>
                  </div>
                </div>

                {/* 1. PROFILE */}
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-300 mb-2">
                    PROFILE
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Motivated engineering student with hands-on experience in programming, electronics, embedded systems, and basic web deployment. Comfortable learning new technologies and building practical projects. Interested in software development, embedded systems, and technology-driven problem solving.
                  </p>
                </div>

                {/* 2. TECHNICAL SKILLS */}
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-300 mb-2">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="border border-slate-300 rounded overflow-hidden text-xs">
                    <div className="grid grid-cols-12 border-b border-slate-300 bg-slate-50">
                      <div className="col-span-4 sm:col-span-3 p-2 font-bold text-slate-900 border-r border-slate-300 bg-slate-100/70">
                        Programming
                      </div>
                      <div className="col-span-8 sm:col-span-9 p-2 text-slate-700">
                        C, Python
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-b border-slate-300">
                      <div className="col-span-4 sm:col-span-3 p-2 font-bold text-slate-900 border-r border-slate-300 bg-slate-100/70">
                        Web & Tools
                      </div>
                      <div className="col-span-8 sm:col-span-9 p-2 text-slate-700">
                        HTML/CSS, GitHub, Vercel, basic web deployment
                      </div>
                    </div>
                    <div className="grid grid-cols-12 border-b border-slate-300 bg-slate-50">
                      <div className="col-span-4 sm:col-span-3 p-2 font-bold text-slate-900 border-r border-slate-300 bg-slate-100/70">
                        Embedded / Electronics
                      </div>
                      <div className="col-span-8 sm:col-span-9 p-2 text-slate-700">
                        Arduino Nano, HC-05 Bluetooth, relay modules, solenoid locks, circuit fundamentals
                      </div>
                    </div>
                    <div className="grid grid-cols-12">
                      <div className="col-span-4 sm:col-span-3 p-2 font-bold text-slate-900 border-r border-slate-300 bg-slate-100/70">
                        Core Concepts
                      </div>
                      <div className="col-span-8 sm:col-span-9 p-2 text-slate-700">
                        Data structures basics, memory allocation in C, problem solving, basic digital electronics
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. PROJECT EXPERIENCE */}
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-300 mb-2.5">
                    PROJECT EXPERIENCE
                  </h2>

                  {/* Project 1 */}
                  <div className="mb-3">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Smart Lock — Arduino-Based Security Prototype
                      </h3>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1 leading-relaxed">
                      <li>
                        Developed a smart locking prototype using an Arduino Nano, HC-05 Bluetooth module, relay, and solenoid lock.
                      </li>
                      <li>
                        Worked on the control flow, hardware integration, and Bluetooth-based access concept.
                      </li>
                      <li>
                        Prepared project documentation covering aim, problem statement, methodology, components, results, advantages, and future scope.
                      </li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Personal Web Project — GitHub & Vercel Deployment
                      </h3>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 mt-1 leading-relaxed">
                      <li>
                        Worked with a web project and used GitHub for source-code management.
                      </li>
                      <li>
                        Explored deployment through Vercel and troubleshooting of repository/deployment issues.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 4. ACADEMIC / PRACTICAL EXPERIENCE */}
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-300 mb-2">
                    ACADEMIC / PRACTICAL EXPERIENCE
                  </h2>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 leading-relaxed">
                    <li>
                      Hands-on practice with C programming, including dynamic memory allocation using <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">malloc</code>, <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">calloc</code>, <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">realloc</code>, and <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">free</code>.
                    </li>
                    <li>
                      Python programming practice involving lists, functions, and problem-solving exercises.
                    </li>
                    <li>
                      Academic exposure to digital electronics topics such as multiplexers and ripple-carry adders.
                    </li>
                  </ul>
                </div>

                {/* 5. STRENGTHS */}
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-300 mb-2">
                    STRENGTHS
                  </h2>
                  <p className="text-xs text-slate-700">
                    Problem solving • Practical learning • Technical curiosity • Project development • Adaptability
                  </p>
                </div>

                {/* 6. CAREER INTERESTS */}
                <div className="mb-5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-300 mb-2">
                    CAREER INTERESTS
                  </h2>
                  <p className="text-xs text-slate-700">
                    Software Development • Embedded Systems • IoT • Web Technologies • Electronics & Automation
                  </p>
                </div>

                {/* Footer note */}
                <div className="pt-2 text-[11px] text-slate-500 italic">
                  References and detailed academic information available on request.
                </div>

              </div>

            </div>

            {/* Modal Bottom Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
              <span className="font-mono">
                Source: <span className="text-slate-200">/public/S_Nikhil_Resume.pdf</span>
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onDownload}
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download .PDF</span>
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
