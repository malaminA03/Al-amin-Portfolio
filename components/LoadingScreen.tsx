import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MESSAGES = [
  "Initializing Digital Ecosystem...",
  "Architecting Interfaces...",
  "Optimizing Performance...",
  "Crafting Elegant Solutions...",
  "Finalizing Experience..."
];

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 35); // 100 * 35ms approx 3.5s + overhead

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-deep-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      <div className="relative z-10 w-full max-w-sm px-8">
        {/* Name Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-black text-white tracking-tighter">
            Al-amin<span className="text-brand-600">.</span>
          </h1>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mt-2">
            Digital Solutions Architect
          </p>
        </motion.div>

        {/* Progress Container */}
        <div className="relative h-[2px] w-full bg-white/5 rounded-full overflow-hidden mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-brand-600 shadow-[0_0_15px_rgba(124,58,237,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Status Text */}
        <div className="flex justify-between items-end">
          <div className="h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={messageIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-[10px] font-bold text-brand-400/80 uppercase tracking-widest"
              >
                {MESSAGES[messageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="text-[10px] font-mono text-slate-500">
            {progress.toString().padStart(3, '0')}%
          </p>
        </div>
      </div>

      {/* Aesthetic corner accents */}
      <div className="absolute top-12 left-12 w-8 h-[1px] bg-white/10"></div>
      <div className="absolute top-12 left-12 w-[1px] h-8 bg-white/10"></div>
      <div className="absolute bottom-12 right-12 w-8 h-[1px] bg-white/10"></div>
      <div className="absolute bottom-12 right-12 w-[1px] h-8 bg-white/10"></div>
    </div>
  );
};