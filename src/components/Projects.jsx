import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Cpu,
  Layers,
  CheckCircle2,
  Radio,
  Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onNotify }) {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedSnippet, setExpandedSnippet] = useState(null);

  const categories = ['All', 'Embedded & IoT', 'Web & Cloud', 'Programming'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleGithubClick = (project) => {
    if (project.github === 'YOUR_GITHUB_URL' || project.github === 'https://github.com') {
      onNotify({
        type: 'info',
        message: `Repository for "${project.title}". You can connect your direct GitHub repo in portfolioData.js anytime.`
      });
    } else {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    }
  };

  const toggleSnippet = (id) => {
    setExpandedSnippet(expandedSnippet === id ? null : id);
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. PROJECT EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Prototypes</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Practical, hands-on engineering projects covering embedded hardware integration, web application deployment with Git/Vercel, and C/Python systems practice.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isSnippetOpen = expandedSnippet === project.id;

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group relative"
              >
                {/* Top Accent Gradient Border Glow */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${
                  project.statusVariant === 'purple'
                    ? 'from-purple-500 via-pink-500 to-indigo-500'
                    : project.statusVariant === 'blue'
                    ? 'from-blue-500 to-indigo-500'
                    : 'from-cyan-500 to-blue-500'
                }`} />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  
                  {/* Top Bar: Number & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs font-semibold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border bg-emerald-950/60 text-emerald-300 border-emerald-500/40">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6 space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Key Highlights
                    </span>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-bold mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Controls */}
                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <button
                        onClick={() => toggleSnippet(project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400 hover:text-cyan-300 transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{isSnippetOpen ? 'Hide Code' : 'View Code Snippet'}</span>
                        {isSnippetOpen ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        onClick={() => handleGithubClick(project)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                        title="View project source"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </button>
                    </div>
                  </div>

                </div>

                {/* Collapsible Interactive Code Snippet Drawer */}
                <AnimatePresence>
                  {isSnippetOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-slate-950 border-t border-slate-800 p-4 font-mono text-xs overflow-x-auto"
                    >
                      <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2 pb-1 border-b border-slate-800">
                        <span>code_preview</span>
                        <span className="text-cyan-400">{project.category}</span>
                      </div>
                      <pre className="text-slate-300 whitespace-pre font-mono text-[11.5px] leading-relaxed">
                        {project.codeSnippet}
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
