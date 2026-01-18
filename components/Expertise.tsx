
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

const TOOLS = [
  { 
    name: 'React.js', 
    tag: 'ENTERPRISE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' 
  },
  { 
    name: 'Node.js', 
    tag: 'SCALABLE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' 
  },
  { 
    name: 'JavaScript', 
    tag: 'CORE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' 
  },
  { 
    name: 'Python', 
    tag: 'AUTOMATION', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' 
  },
  { 
    name: 'JAVA', 
    tag: 'SYSTEMS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' 
  },
  { 
    name: 'Flutter', 
    tag: 'MOBILE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' 
  },
  { 
    name: 'HTML5', 
    tag: 'STRUCTURE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' 
  },
  { 
    name: 'CSS3', 
    tag: 'STYLING', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' 
  },
  { 
    name: 'Photoshop', 
    tag: 'CREATIVE', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' 
  },
  { 
    name: 'Illustrator', 
    tag: 'VECTOR', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' 
  },
  { 
    name: 'Premiere Pro', 
    tag: 'CINEMATIC', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg' 
  },
  { 
    name: 'CapCut', 
    tag: 'SOCIAL', 
    icon: 'https://www.freelogopng.com/images/all_img/1664284836cap-cut-logo-png.png' 
  },
  { 
    name: 'Facebook Ads', 
    tag: 'GROWTH', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg' 
  },
  { 
    name: 'MS Office', 
    tag: 'OFFICE', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Microsoft_Office_logo_%282013%E2%80%932019%29.png' 
  },
];

export const Expertise: React.FC = () => {
  return (
    <SectionWrapper id="expertise" className="bg-slate-50 dark:bg-slate-900/30 rounded-[3.5rem] my-20 p-8 md:p-16 border border-slate-100 dark:border-white/5">
      <div className="mb-20 text-center">
        <div className="inline-block bg-brand-600/10 dark:bg-brand-600/20 rounded-lg px-4 py-1.5 mb-6">
           <p className="text-[10px] font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest">Industry Standard Tech Stack</p>
        </div>
        <h2 className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">
          Capabilities & Arsenal
        </h2>
        <h3 className="text-4xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white tracking-tighter">
          World-Class <span className="text-brand-600">Performance.</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {TOOLS.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center justify-center p-8 md:p-10 bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-2xl hover:border-brand-500/50 transition-all duration-500 group relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-brand-600/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity pointer-events-none"></div>
            
            <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center mb-6 relative z-10">
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-700" 
              />
            </div>
            <div className="text-center relative z-10">
              <h4 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-600 transition-colors">
                {tool.name}
              </h4>
              <p className="text-[8px] md:text-[9px] font-black text-slate-400 dark:text-slate-500 tracking-[0.25em] uppercase">
                {tool.tag}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
