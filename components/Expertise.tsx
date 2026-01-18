import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

const TOOLS = [
  { 
    name: 'React.js', 
    tag: 'TECH', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' 
  },
  { 
    name: 'Flutter', 
    tag: 'TECH', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' 
  },
  { 
    name: 'Node.js', 
    tag: 'TECH', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' 
  },
  { 
    name: 'HTML5', 
    tag: 'TECH', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' 
  },
  { 
    name: 'Photoshop', 
    tag: 'DESIGN', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' 
  },
  { 
    name: 'Illustrator', 
    tag: 'DESIGN', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' 
  },
  { 
    name: 'Premiere Pro', 
    tag: 'VIDEO', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg' 
  },
  { 
    name: 'Facebook', 
    tag: 'AD ADS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg' 
  },
];

export const Expertise: React.FC = () => {
  return (
    <SectionWrapper id="expertise" className="bg-slate-50 dark:bg-slate-900/30 rounded-[3rem] my-20">
      <div className="mb-16 text-center">
        <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3">
          Expertise
        </h2>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
          Digital Arsenal.
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {TOOLS.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center justify-center p-6 md:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mb-4">
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-12 h-12 md:w-16 md:h-16 object-contain filter group-hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-all duration-300" 
              />
            </div>
            <div className="text-center">
              <h4 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-500 transition-colors">
                {tool.name}
              </h4>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
                {tool.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};