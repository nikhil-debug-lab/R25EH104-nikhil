import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import CyberMatrixBackground from './components/CyberMatrixBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Strengths from './components/Strengths';
import CareerObjective from './components/CareerObjective';
import Education from './components/Education';
import LearningJourney from './components/LearningJourney';
import AdditionalInfo from './components/AdditionalInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ResumeModal from './components/ResumeModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Section Observer for active navbar item
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'strengths', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const notify = ({ type = 'info', message }) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast((current) => (current?.message === message ? null : current));
    }, 4500);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = portfolioData.personalInfo.resumePath;
    link.download = portfolioData.personalInfo.resumeFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    notify({
      type: 'success',
      message: `Downloading ${portfolioData.personalInfo.resumeFilename}. Updated resume is ready!`
    });
  };

  return (
    <div className="relative min-h-screen bg-[#030610] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Cyberpunk Matrix & Tech HUD Background */}
      <CyberMatrixBackground />

      {/* Top Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left z-50 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onDownloadResume={handleDownloadResume}
        onViewResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onDownloadResume={handleDownloadResume}
          onViewResume={() => setIsResumeModalOpen(true)}
        />
        <About />
        <Skills />
        <Projects onNotify={notify} />
        <Experience />
        <Strengths />
        <CareerObjective />
        <Education />
        <LearningJourney />
        <AdditionalInfo />
        <Contact onNotify={notify} />
      </main>

      {/* Footer */}
      <Footer onNotify={notify} />

      {/* In-Browser Interactive Resume Previewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />

      {/* Global Interactive Notification Toast */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
}
