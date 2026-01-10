import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { STATS } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle, Trophy, Users, Clock } from 'lucide-react';

const CountUpAnimation = ({ target, suffix }: { target: string, suffix?: string }) => {
    // Simple mock animation or just display for stability. 
    // For a real production app, we'd use 'framer-motion' useSpring or 'react-countup'
    return (
        <span className="flex items-baseline">
            {target}<span className="text-2xl md:text-3xl text-brand-500 ml-1">{suffix}</span>
        </span>
    );
};

const VALUE_PROPS = [
  {
    icon: Trophy,
    title: "Quality First",
    desc: "I don't ship until it's perfect. Code quality and design integrity are non-negotiable."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Respecting deadlines is part of my professional DNA. No excuses, just results."
  },
  {
    icon: Users,
    title: "Client Partnership",
    desc: "I view myself as a partner in your business growth, not just a hired hand."
  },
  {
    icon: CheckCircle,
    title: "Transparent Process",
    desc: "Full visibility into the development cycle with regular updates and demos."
  }
];

export const ContentSections: React.FC = () => {
  return (
    <>
      {/* Stats / Trust Section */}
      <SectionWrapper id="advantage" className="py-10">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="text-center p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-brand-500/30 transition-colors"
               >
                 <div className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-2 flex justify-center">
                    <CountUpAnimation target={stat.value} suffix={stat.suffix} />
                 </div>
                 <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    {stat.label}
                 </div>
               </motion.div>
            ))}
         </div>
      </SectionWrapper>

      {/* Why Choose Me Grid */}
      <SectionWrapper className="py-20">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm mb-3">Why Work With Me</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            The difference between a <span className="italic text-slate-500">freelancer</span> and a <span className="text-brand-500">partner</span>.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            I bring a blend of technical engineering and creative strategy to every project, ensuring your product not only functions perfectly but also captivates your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
               <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                 <prop.icon size={24} />
               </div>
               <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{prop.title}</h4>
               <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                 {prop.desc}
               </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};