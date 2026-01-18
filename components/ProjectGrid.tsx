
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS } from '../constants';

export const ProjectGrid: React.FC = () => {
  return (
    <SectionWrapper id="work" className="py-20 bg-[#F9F9FB] dark:bg-deep-950 transition-colors duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 text-center md:text-left">
        <div>
           <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3">Selected Works</h2>
           <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white">
             Proof of Quality<span className="text-brand-600">.</span>
           </h3>
           <p className="text-sm text-slate-500 mt-4 max-w-sm">Every project is an investment in strategic design and robust engineering.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link || '#'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative flex flex-col bg-white dark:bg-slate-900/50 p-8 md:p-12 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:z-10 hover:shadow-2xl hover:border-brand-500/30 rounded-[2.5rem]"
          >
            <div className="flex justify-between items-start mb-12">
               <div>
                 <span className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-100 dark:border-slate-700 transition-colors group-hover:bg-brand-50 dark:group-hover:bg-brand-900/20 group-hover:text-brand-600 group-hover:border-brand-100 dark:group-hover:border-brand-800">
                    {project.category}
                 </span>
                 <p className="text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-widest">Role: {project.role}</p>
               </div>
               <span className="text-6xl font-serif font-bold text-slate-100 dark:text-slate-800/40 select-none transition-colors group-hover:text-brand-100 dark:group-hover:text-brand-900/10">
                  {project.id}
               </span>
            </div>

            <div className="flex-grow mb-12">
               <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white leading-tight group-hover:text-brand-600 transition-colors mb-4">
                  {project.title}
               </h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                 {project.description}
               </p>
               
               {project.result && (
                 <div className="flex items-center space-x-2 text-brand-600 dark:text-brand-400 mb-6">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">{project.result}</span>
                 </div>
               )}

               <div className="flex flex-wrap gap-2">
                 {project.techStack?.map(tech => (
                   <span key={tech} className="text-[9px] font-black bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-slate-400">{tech}</span>
                 ))}
               </div>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center transition-colors group-hover:border-brand-100 dark:group-hover:border-brand-800">
               <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-brand-600 transition-colors">
                  Case Study
               </span>
               <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <ArrowUpRight size={18} />
               </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};
