"use client"

import React, { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const ShadowAnimaticFlow = () => {
  // Animation controls for each stage
  const inputControls = useAnimation();
  const processorControls = useAnimation();
  const waveControls = useAnimation();
  const outputControls = useAnimation();
  const layoutControls = useAnimation();

  // Animation timeline
  useEffect(() => {
    let isActive = true;
    async function sequence() {
      while (isActive) {
        // Stage 1: Input icons appear and move to center
        await inputControls.start({ opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 1.2 } });
        // Stage 2: Inputs fade, processor scales up and pulses
        await inputControls.start({ opacity: 0, transition: { duration: 0.5 } });
        await processorControls.start({ scale: 1.1, transition: { duration: 0.5 } });
        await processorControls.start({ scale: [1.1, 1, 1.1], transition: { duration: 1, repeat: 1, repeatType: 'reverse' } });
        // Stage 3: Processor emits waves
        waveControls.start(i => ({ opacity: [0, 0.5, 0], scale: [1, 2.5], transition: { duration: 1.2, delay: i * 0.2 } }));
        await new Promise(res => setTimeout(res, 1200));
        // Stage 4: Website layout builds
        await layoutControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
        await new Promise(res => setTimeout(res, 1200));
        // Fade out everything
        await layoutControls.start({ opacity: 0, y: 20, transition: { duration: 0.5 } });
        await processorControls.start({ scale: 1, transition: { duration: 0.2 } });
        await new Promise(res => setTimeout(res, 200));
      }
    }
    sequence();
    return () => { isActive = false; };
  }, [inputControls, processorControls, waveControls, layoutControls]);

  // Input icons
  const inputs = [
    { icon: '🖼️', label: 'Screenshot', x: -120, y: -120, color: '#6366f1' },
    { icon: '🔗', label: 'URL', x: 120, y: -120, color: '#6366f1' },
    { icon: '🎥', label: 'Video', x: -120, y: 120, color: '#6366f1' },
    { icon: '🎨', label: 'Figma', x: 120, y: 120, color: '#6366f1' },
  ];

  return (
    <div className="relative w-full max-w-[400px] h-[400px] mx-auto" style={{ background: 'none' }}>
      {/* Central processor node */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 shadow-xl z-10 flex items-center justify-center"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={processorControls}
        initial={{ scale: 1 }}
      >
        {/* Wave effects */}
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-28 h-28 rounded-full border-2 border-indigo-400"
            style={{ translateX: '-50%', translateY: '-50%' }}
            custom={i}
            animate={waveControls}
            initial={{ opacity: 0, scale: 1 }}
          />
        ))}
        {/* Shadow logo icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-white">🌙</div>
        </div>
      </motion.div>

      {/* Input icons */}
      {inputs.map((input, i) => (
        <motion.div
          key={input.icon}
          className="absolute w-16 h-16 rounded-xl flex flex-col items-center justify-center shadow-lg border border-indigo-400 bg-indigo-600/90 backdrop-blur-sm"
          style={{
            top: '50%',
            left: '50%',
            translateX: '-50%',
            translateY: '-50%',
            color: input.color,
            zIndex: 5
          }}
          animate={inputControls}
          initial={{ opacity: 0, scale: 0.7, x: input.x, y: input.y }}
        >
          <div className="text-2xl mb-1">{input.icon}</div>
          <div className="text-xs text-indigo-100 text-center">{input.label}</div>
        </motion.div>
      ))}

      {/* Website layout output */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-40 h-28 rounded-lg bg-gradient-to-br from-gray-900/80 to-indigo-900/80 border border-indigo-400 flex flex-col items-stretch justify-between overflow-hidden"
        style={{ translateX: '-50%', translateY: '-50%', zIndex: 20 }}
        animate={layoutControls}
        initial={{ opacity: 0, y: 20 }}
      >
        <div className="h-6 bg-indigo-500/80 w-full" />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-3/4 h-4 bg-white/20 rounded" />
        </div>
        <div className="h-4 bg-indigo-400/60 w-full" />
      </motion.div>

      {/* Connection lines (static for now) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Input to processor */}
        <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#818cf8" strokeWidth="2" strokeDasharray="4" />
        <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#818cf8" strokeWidth="2" strokeDasharray="4" />
        <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#818cf8" strokeWidth="2" strokeDasharray="4" />
        <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="#818cf8" strokeWidth="2" strokeDasharray="4" />
        {/* Processor to output */}
        <line x1="50%" y1="50%" x2="50%" y2="65%" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4" />
      </svg>
    </div>
  );
};

export default ShadowAnimaticFlow; 