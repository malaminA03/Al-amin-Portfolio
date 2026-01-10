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
    tag: 'CREATIVE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' 
  },
  { 
    name: 'Illustrator', 
    tag: 'CREATIVE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg' 
  },
  { 
    name: 'Premiere Pro', 
    tag: 'CREATIVE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg' 
  },
  { 
    name: 'Facebook', 
    tag: 'PLATFORM', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg' 
  },
];

export const Expertise: React.FC = () => {
  return (
    <SectionWrapper id="expertise" className="py-20">
      <div className="mb-16 md:text-center">
        <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm mb-3">
          Expertise
        </h2>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
          Tools of the trade.
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOOLS.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center p-6 bg-slate-900 rounded-xl border border-slate-700 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 flex-shrink-0 mr-4 flex items-center justify-center">
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white leading-tight group-hover:text-brand-400 transition-colors">
                {tool.name}
              </h4>
              <span className="text-xs font-bold text-slate-500 tracking-wider">
                {tool.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};