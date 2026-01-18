import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { STATS, ABOUT_ME } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle, Trophy, Users, Clock } from 'lucide-react';

const VALUE_PROPS = [
  {
    icon: Trophy,
    title: "Editorial Design",
    desc: "I specialize in clean, high-impact aesthetics that make your product stand out from the noise."
  },
  {
    icon: Clock,
    title: "Agile Engineering",
    desc: "Lightning fast development cycles without compromising on quality or performance standards."
  },
  {
    icon: Users,
    title: "Strategic Partner",
    desc: "I don't just build features; I build solutions that align with your long-term business roadmap."
  },
  {
    icon: CheckCircle,
    title: "Transparent Flow",
    desc: "Real-time updates and direct communication throughout the entire project lifecycle."
  }
];

export const ContentSections: React.FC = () => {
  return (
    <>
      {/* Stats Strip */}
      <SectionWrapper id="advantage" className="py-20 border-y border-slate-100 dark:border-slate-900">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {STATS.map((stat, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="text-center"
               >
                 <div className="text-4xl md:text-6xl font-serif font-black text-slate-950 dark:text-white mb-2">
                    {stat.value}<span className="text-brand-600">{stat.suffix}</span>
                 </div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    {stat.label}
                 </div>
               </motion.div>
            ))}
         </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper className="py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Profile Overview</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white leading-tight mb-6">
              Engineering <span className="text-slate-400 italic">with</span> <span className="text-brand-600">Intent.</span>
            </h3>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              {ABOUT_ME}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Value Grid */}
      <SectionWrapper className="py-24 pt-0">
        <div className="max-w-3xl mb-20">
          <h2 className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4">The Advantage</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white leading-tight">
            I build digital products that <span className="text-slate-400 italic">convert</span> and <span className="text-brand-600">scale.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-500/20 hover:shadow-2xl transition-all duration-500"
            >
               <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                 <prop.icon size={22} />
               </div>
               <h4 className="text-xl font-bold text-slate-950 dark:text-white mb-3">{prop.title}</h4>
               <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                 {prop.desc}
               </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};