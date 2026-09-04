import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AuroraBackground() {
  const [mounted, setMounted] = useState(false);

  // Mouse position tracking with smooth spring physics
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#030712]"
    >
      {/* Deep Cosmic Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#070d1e] to-[#040714] opacity-95" />

      {/* Layer 1: Giant Animated Aurora Mesh Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden filter blur-[110px] md:blur-[140px] opacity-70">
        
        {/* Orb 1: Cyan / Neon Teal (Top-Left to Center floating) */}
        <motion.div
          animate={{
            x: ['-20%', '25%', '-15%', '-20%'],
            y: ['-10%', '30%', '10%', '-10%'],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] min-w-[380px] min-h-[380px] rounded-full bg-gradient-to-br from-cyan-500/35 via-teal-500/25 to-blue-600/10"
        />

        {/* Orb 2: Electric Purple / Indigo (Top-Right to Center-Right floating) */}
        <motion.div
          animate={{
            x: ['10%', '-20%', '15%', '10%'],
            y: ['-5%', '25%', '-15%', '-5%'],
            scale: [1.1, 0.9, 1.2, 1.1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -top-[5%] -right-[15%] w-[50vw] h-[50vw] min-w-[360px] min-h-[360px] rounded-full bg-gradient-to-bl from-purple-600/30 via-indigo-600/25 to-pink-500/10"
        />

        {/* Orb 3: Royal Sapphire Blue (Center-Bottom to Middle floating) */}
        <motion.div
          animate={{
            x: ['-10%', '15%', '-20%', '-10%'],
            y: ['20%', '-10%', '15%', '20%'],
            scale: [0.95, 1.2, 1, 0.95],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-[40%] left-[20%] w-[60vw] h-[60vw] min-w-[400px] min-h-[400px] rounded-full bg-gradient-to-tr from-blue-600/25 via-cyan-600/20 to-violet-600/15"
        />

        {/* Orb 4: Magenta / Rose Glow (Bottom-Right accent) */}
        <motion.div
          animate={{
            x: ['15%', '-15%', '20%', '15%'],
            y: ['10%', '-25%', '5%', '10%'],
            scale: [1, 1.15, 0.85, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[45vw] h-[45vw] min-w-[340px] min-h-[340px] rounded-full bg-gradient-to-tl from-fuchsia-600/20 via-purple-600/20 to-cyan-500/10"
        />

        {/* Orb 5: Emerald / Mint Glow (Bottom-Left accent) */}
        <motion.div
          animate={{
            x: ['-10%', '20%', '-5%', '-10%'],
            y: ['5%', '-15%', '15%', '5%'],
            scale: [0.9, 1.15, 1, 0.9],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
          className="absolute -bottom-[15%] -left-[10%] w-[48vw] h-[48vw] min-w-[350px] min-h-[350px] rounded-full bg-gradient-to-r from-emerald-600/20 via-teal-500/15 to-cyan-600/10"
        />

      </div>

      {/* Layer 2: Interactive Dynamic Cursor Follower Glow */}
      {mounted && (
        <motion.div
          className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full pointer-events-none filter blur-[90px] opacity-40 mix-blend-screen"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(99,102,241,0.25) 45%, transparent 70%)',
          }}
        />
      )}

      {/* Layer 3: Cyber Mesh Grid & Ambient Shimmer Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.22] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 90%)',
        }}
      />

      {/* Layer 4: Vignette & Edge Softener */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(3,7,18,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
