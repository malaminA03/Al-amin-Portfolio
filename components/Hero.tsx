import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO } from '../constants';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappNumber = "8801778189644";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20book%20a%20consultation.`;

  return (
    <section id="hero" className="min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-12 pt-28 pb-12 lg:py-0">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-600/20 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content: 7 Columns on Desktop */}
        <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-white/50 dark:bg-white/5 border border-brand-100 dark:border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Available for New Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold leading-[1.1] text-slate-900 dark:text-white mb-6 md:whitespace-nowrap"
          >
            {USER_INFO.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-light"
          >
            {USER_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4 w-full sm:max-w-md lg:max-w-none"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="group relative px-8 py-5 bg-brand-600 text-white font-bold rounded-2xl flex items-center justify-center space-x-3 transition-all hover:bg-brand-700 app-shadow active:scale-95"
              >
                <Calendar size={20} />
                <span>Strategy Session</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl flex items-center justify-center space-x-3 transition-all hover:border-brand-500 shadow-sm active:scale-95"
              >
                <MessageCircle size={20} className="text-green-500" />
                <span>Quick Chat</span>
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-4">
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Avg. 2h response
               </div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                  <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>
                  Global Clients
               </div>
            </div>
          </motion.div>
        </div>

        {/* Big Image: 5 Columns on Desktop */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[320px] md:max-w-[480px] aspect-[4/5]"
          >
            {/* Artistic Background Frame */}
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-tr from-brand-600/20 to-blue-600/20 rounded-[2rem] md:rounded-[3rem] -z-10 blur-xl"></div>
            <div className="absolute inset-0 border-2 border-brand-500/20 rounded-[2rem] md:rounded-[3rem] -z-10 translate-x-4 translate-y-4"></div>
            
            {/* Main Image Container */}
            <div className="w-full h-full glass-card rounded-[2rem] md:rounded-[3rem] overflow-hidden app-shadow border-4 border-white dark:border-slate-800">
                <img 
                  src={USER_INFO.image} 
                  alt={USER_INFO.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 hover:scale-100"
                />
            </div>

            {/* Floating Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white dark:bg-slate-900 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center"
            >
               <span className="text-3xl md:text-5xl font-serif font-bold text-brand-600 dark:text-brand-400">3+</span>
               <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-tighter text-center">Years of <br/> Craftsmanship</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};