import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Folder, Layers } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS } from '../constants';

export const ProjectGrid: React.FC = () => {
  return (
    <SectionWrapper id="work" className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left">
        <div className="mb-6 md:mb-0">
           <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 text-center md:text-left">Selected Works</h2>
           <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white">
             Competence.
           </h3>
        </div>
        <div className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400 shadow-sm border border-slate-200 dark:border-slate-700">
           <Folder size={16} />
           <span className="text-[10px] font-bold uppercase tracking-widest">{PROJECTS.length} Showcases</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-brand-900/10 border border-slate-200 dark:border-slate-800 transition-all duration-500"
          >
            {/* Project Thumbnail */}
            <div className="h-64 md:h-72 relative overflow-hidden">
               {project.image ? (
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                 />
               ) : (
                 <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                    <Layers className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                 </div>
               )}
               
               {/* Badge */}
               <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                     <ArrowUpRight size={20} className="text-brand-600" />
                  </div>
               </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-10 flex flex-col flex-grow">
               <div className="mb-6">
                 <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 mb-2 block">
                    {project.category}
                 </span>
                 <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                   {project.title}
                 </h3>
               </div>
               
               <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags?.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-100 dark:border-slate-800">
                          {tag}
                      </span>
                  ))}
               </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};