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
  Info 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onNotify }) {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedSnippet, setExpandedSnippet] = useState(null);

  const categories = ['All', 'Programming', 'Future Project'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleGithubClick = (project) => {
    if (project.github === 'YOUR_GITHUB_URL') {
      onNotify({
        type: 'info',
        message: `GitHub repository placeholder for "${project.title}". You can configure your repository URL in src/data/portfolioData.js.`
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
            <span>03. CODE & LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Authentic, hands-on programming projects and exercises focused on building rock-solid computer science fundamentals and preparing for real-world AI applications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
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
            const isFuture = project.status === 'Coming Soon';

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
                    <span className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${
                      isFuture
                        ? 'bg-purple-950/60 text-purple-300 border-purple-500/40'
                        : 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.highlights && (
                    <ul className="space-y-1.5 mb-5 text-xs text-slate-400 font-sans">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-slate-800/80">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Code Snippet Preview */}
                  {project.codeSnippet && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleSnippet(project.id)}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{isSnippetOpen ? 'Hide Preview Snippet' : 'View Code Snippet'}</span>
                        </div>
                        {isSnippetOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <AnimatePresence>
                        {isSnippetOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 p-3 bg-black/80 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto"
                          >
                            <pre><code>{project.codeSnippet}</code></pre>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                </div>

                {/* Footer Action Bar */}
                <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => handleGithubClick(project)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </button>

                  <span className="text-[11px] font-mono text-slate-500">
                    {project.category}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
