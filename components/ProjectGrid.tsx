import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Folder, Layers } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS } from '../constants';

export const ProjectGrid: React.FC = () => {
  return (
    <SectionWrapper id="work" className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
           <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm mb-3">Selected Works</h2>
           <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
             Proof of Competence
           </h3>
        </div>
        <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 dark:text-slate-400">
           <Folder size={16} />
           <span className="text-xs font-bold uppercase tracking-widest">{PROJECTS.length} Projects</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-brand-900/20 hover:border-brand-500/30 transition-all duration-300"
          >
            {/* Project Thumbnail */}
            <div className="h-56 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
               {project.image ? (
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                 />
               ) : (
                 <div className="w-full h-full flex items-center justify-center">
                    <Layers className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                 </div>
               )}
               
               {/* Overlay on hover */}
               <div className="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Body */}
            <div className="p-8 flex flex-col flex-grow">
               <div className="mb-4">
                 <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400 mb-2 block">
                    {project.category}
                 </span>
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                   {project.title}
                 </h3>
               </div>
               
               {/* Tech Tags */}
               <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags?.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-200 dark:border-slate-700">
                          {tag}
                      </span>
                  ))}
               </div>

               {/* Button */}
               <div className="flex items-center text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                  <span>View Case Study</span>
                  <ArrowUpRight size={16} className="ml-2" />
               </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};