import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CyberMatrixBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 120 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTime = 0;
    const fps = 33; // ~30-35 FPS is authentic for matrix rain and very light on GPU/CPU
    const interval = 1000 / fps;

    // Characters for the stream (Hex, binary, tech symbols, Japanese Katakana)
    const characters = '0123456789ABCDEF01<>{}/*$#@!=+アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = characters.split('');

    let fontSize = 16;
    let columns = 0;
    let drops = [];
    let dropSpeeds = [];
    let dropChars = [];

    const initCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      fontSize = width < 768 ? 14 : 16;
      columns = Math.floor(width / fontSize);

      drops = [];
      dropSpeeds = [];
      dropChars = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Staggered initial drop height
        dropSpeeds[i] = 0.5 + Math.random() * 0.8; // Varied falling speeds
        dropChars[i] = charArray[Math.floor(Math.random() * charArray.length)];
      }
    };

    initCanvas();

    const handleResize = () => {
      initCanvas();
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = (currentTime) => {
      animationFrameId = requestAnimationFrame(render);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Semi-transparent fade background for trailing trail effect
      ctx.fillStyle = 'rgba(3, 7, 18, 0.16)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.font = `${fontSize}px "JetBrains Mono", "Fira Code", monospace`;

      const mouse = mouseRef.current;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Random character flicker
        if (Math.random() > 0.88) {
          dropChars[i] = charArray[Math.floor(Math.random() * charArray.length)];
        }
        const text = dropChars[i];

        // Check distance to mouse cursor for interactive disruption/glow
        const dx = x - mouse.x;
        const dy = y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = dist < mouse.radius;

        if (isNearMouse) {
          // Interactive cursor reaction: vibrant cyber cyan glow
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 12;
          ctx.fillText(text, x, y);
          ctx.shadowBlur = 0;
        } else {
          // Alternate cyber colors with glowing leading characters
          if (Math.random() > 0.95) {
            ctx.fillStyle = '#e0f2fe'; // Bright leading head
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 8;
          } else if (i % 3 === 0) {
            ctx.fillStyle = 'rgba(6, 182, 212, 0.75)'; // Neon Cyan
            ctx.shadowBlur = 0;
          } else if (i % 3 === 1) {
            ctx.fillStyle = 'rgba(16, 185, 129, 0.65)'; // Matrix Emerald
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = 'rgba(59, 130, 246, 0.65)'; // Electric Blue
            ctx.shadowBlur = 0;
          }

          ctx.fillText(text, x, y);
          ctx.shadowBlur = 0;
        }

        // Reset drop to top with randomized delay once it leaves the bottom
        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
          dropSpeeds[i] = 0.5 + Math.random() * 0.8;
        }

        drops[i] += dropSpeeds[i];
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#030610]"
    >
      {/* 1. Base Dark Cyber Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen pointer-events-none"
      />

      {/* 2. Cyber Hexagonal / Circuit Pattern Backdrop */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%),
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        }}
      />

      {/* 3. Sweeping Horizontal Cyber Scanline Beam */}
      <motion.div
        animate={{ y: ['-10%', '110%'] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none"
      />

      {/* 4. Ambient Cybernetic Glow Orbs (Soft Depth) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* 5. Sleek Technical HUD Corner Reticles */}
      {isClient && (
        <div className="hidden lg:block absolute inset-6 pointer-events-none z-10 opacity-40 font-mono text-[10px] text-cyan-400">
          {/* Top-Left Telemetry */}
          <div className="absolute top-0 left-0 flex flex-col gap-1 border-l-2 border-t-2 border-cyan-500/60 pt-2 pl-2">
            <span className="flex items-center gap-1.5 font-bold tracking-widest text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              SYS.MATRIX_v2.6
            </span>
            <span className="text-slate-500">PROTOCOL: SECURE // TLS 1.3</span>
          </div>

          {/* Top-Right Telemetry */}
          <div className="absolute top-0 right-0 text-right flex flex-col gap-1 border-r-2 border-t-2 border-cyan-500/60 pt-2 pr-2">
            <span className="font-bold tracking-widest text-emerald-400">CORE: OPTIMAL</span>
            <span className="text-slate-500">LATENCY: &lt;1ms // 60 FPS</span>
          </div>

          {/* Bottom-Left Telemetry */}
          <div className="absolute bottom-0 left-0 flex flex-col gap-1 border-l-2 border-b-2 border-cyan-500/60 pb-2 pl-2">
            <span className="text-slate-500">NODE ID: 0x7F_DECODE</span>
            <span className="text-cyan-400/80">GRID: SYNCED</span>
          </div>

          {/* Bottom-Right Telemetry */}
          <div className="absolute bottom-0 right-0 text-right flex flex-col gap-1 border-r-2 border-b-2 border-cyan-500/60 pb-2 pr-2">
            <span className="text-slate-500">ENCRYPTION: AES-256</span>
            <span className="text-emerald-400/80">STATUS: ACTIVE</span>
          </div>
        </div>
      )}

      {/* 6. Soft Vignette Overlay for Crisp Content Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(3,6,16,0.75)_100%)] pointer-events-none" />
    </div>
  );
}
