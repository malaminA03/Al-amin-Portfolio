import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO } from '../constants';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappNumber = "8801778189644";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20book%20a%20consultation.`;

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
            className="flex flex-col gap-6 w-full sm:w-auto"
          >
            {/* Primary CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative group">
                {/* Decorative glow for the main button */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <a 
                  href="#contact"
                  className="relative px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1"
                >
                  <Calendar size={20} />
                  <span>Free Strategy Session</span>
                  <ArrowRight size={18} />
                </a>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 font-bold rounded-lg flex items-center justify-center space-x-3 transition-all shadow-sm"
              >
                <MessageCircle size={20} className="text-green-500" />
                <span>Quick Chat</span>
              </a>
            </div>

            {/* Response Time & Info Indicator */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                Avg. Response: 2 Hours
              </div>
              <div className="flex items-center text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                15-Min Discovery Call
              </div>
            </div>
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

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-800 hidden md:block animate-bounce-slow">
               <p className="text-2xl font-bold text-brand-600 dark:text-brand-400">3+</p>
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Years of Craft</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};