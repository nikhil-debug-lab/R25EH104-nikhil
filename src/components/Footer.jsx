import React from 'react';
import { ArrowUp, Terminal, Linkedin, Github, Mail, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onNotify }) {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePlaceholder = (platform, url) => {
    if (url === 'YOUR_LINKEDIN_URL' || url === 'YOUR_GITHUB_URL') {
      onNotify({
        type: 'info',
        message: `${platform} URL is currently set to placeholder ("${url}"). Configure in src/data/portfolioData.js.`
      });
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono max-w-sm">
              {personalInfo.title}
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            
            {/* LinkedIn */}
            <button
              onClick={() => handlePlaceholder('LinkedIn', personalInfo.socialLinks.linkedin)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </button>

            {/* GitHub */}
            <button
              onClick={() => handlePlaceholder('GitHub', personalInfo.socialLinks.github)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </button>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>

          </div>

        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono text-center sm:text-left">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React + Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
