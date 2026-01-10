import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12 pt-24 pb-12 lg:py-0">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-800/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white dark:bg-white/5 border border-brand-100 dark:border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Available for New Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-slate-900 dark:text-white mb-6 whitespace-nowrap"
          >
            {USER_INFO.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed"
          >
            {USER_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#contact"
              className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg shadow-lg shadow-brand-600/30 flex items-center justify-center space-x-2 transition-all hover:scale-105"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#work"
              className="px-8 py-4 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-semibold rounded-lg flex items-center justify-center space-x-2 transition-all"
            >
              <span>View Portfolio</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Image with Frame & Grayscale Logic */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group w-72 h-80 md:w-80 md:h-96"
          >
            {/* Offset Frame/Border */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-500 rounded-lg -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            {/* Image Container */}
            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={USER_INFO.image} 
                  alt={USER_INFO.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};