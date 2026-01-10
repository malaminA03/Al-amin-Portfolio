import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm mb-3">
            Testimonials
        </h2>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
          Trusted by Industry Leaders
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white dark:bg-slate-900/50 p-10 shadow-lg rounded-2xl border border-slate-100 dark:border-slate-800 relative">
            {/* Gold Stars */}
            <div className="flex space-x-1 mb-6 text-gold-500">
                {[1,2,3,4,5].map(s => (
                    <Star key={s} size={16} fill="currentColor" />
                ))}
            </div>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">
              "{t.content}"
            </p>
            
            <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold font-serif text-xl mr-4">
                    {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
            </div>

            <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-100 dark:text-brand-900/20" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};