import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <SectionWrapper id="services" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="mb-20 text-center md:text-left">
        <h2 className="text-brand-600 font-bold uppercase tracking-[0.25em] text-xs mb-3">
          Capabilities
        </h2>
        <h3 className="text-4xl md:text-7xl font-serif font-bold text-slate-950 dark:text-white">
          Full-Stack Precision.
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-500/30 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <span className="text-6xl font-serif font-black text-slate-100 dark:text-slate-800 transition-colors group-hover:text-brand-600/10">
                  0{index + 1}
                </span>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                {service.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-medium">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};