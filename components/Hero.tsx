
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { USER_INFO } from '../constants';
import { ArrowRight, Calendar, MessageCircle, Dot } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappLink = `https://wa.me/8801778189644?text=Hello%20Al-amin!`;
  const [greeting, setGreeting] = useState('');
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-6 lg:px-12">
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(124, 58, 237, 0.15), transparent 80%)`
        }}
      />

      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-[-5%] w-[30vw] h-[30vw] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        <div className="lg:col-span-7 pr-4 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-full mb-10 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
               {greeting}, I'm ready for new challenges
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-slate-950 dark:text-white leading-[1.1] mb-6 whitespace-nowrap"
            >
              {USER_INFO.firstName}{' '}
              <span className="text-brand-600">{USER_INFO.lastName}.</span>
            </motion.h1>
          </div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.15 }}
             className="mb-8"
          >
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-lg leading-snug mb-2">
              {USER_INFO.tagline}
            </p>
            <p className="text-sm md:text-base text-slate-400 dark:text-slate-500 font-medium max-w-md italic">
              {USER_INFO.supportingLine}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.a 
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="px-8 py-5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl flex items-center justify-center space-x-3 transition-all shadow-xl premium-shadow group"
            >
              <Calendar size={20} />
              <span>Strategy Session</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener"
              className="px-8 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl flex items-center justify-center space-x-3 transition-all hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm"
            >
              <MessageCircle size={20} className="text-brand-500" />
              <span>Quick Chat</span>
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400"
          >
             <div className="flex items-center group cursor-help">
                <Dot className="text-brand-600 scale-150 animate-pulse" />
                <span className="group-hover:text-brand-600 transition-colors">Avg. 2H Response</span>
             </div>
             <div className="flex items-center group cursor-help">
                <Dot className="text-brand-600 scale-150 animate-pulse" />
                <span className="group-hover:text-brand-600 transition-colors">Global Standards</span>
             </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] lg:max-w-[480px] group"
          >
            <div className="absolute -inset-4 bg-slate-100 dark:bg-slate-900 rounded-[3.5rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border border-white/10 aspect-[3/4]">
              <img 
                src={USER_INFO.image} 
                alt={USER_INFO.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100"
              />
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 -right-6 md:-right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 z-20 text-center"
              >
                <p className="text-4xl md:text-5xl font-serif font-black text-brand-600 leading-none mb-1">3+</p>
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 leading-tight">
                  Years of<br/>Mastery
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
