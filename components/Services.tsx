import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <SectionWrapper id="services" className="py-20 relative">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="mb-16 md:text-center">
        <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm mb-3">
          Services
        </h2>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
          High-End Digital Capabilities
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-900/10 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-slate-900 dark:text-white group-hover:text-white transition-colors" />
                </div>
                <span className="text-5xl font-serif text-slate-200 dark:text-slate-800 opacity-50 group-hover:text-brand-100/10 transition-colors">
                  0{index + 1}
                </span>
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-500 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};