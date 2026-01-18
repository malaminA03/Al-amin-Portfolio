
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { Check, Palette } from 'lucide-react';

const THEMES = [
  { id: 'default', name: 'Violet', color: '#7c3aed' },
  { id: 'ocean', name: 'Ocean', color: '#0d9488' },
  { id: 'sunset', name: 'Sunset', color: '#ea580c' },
  { id: 'forest', name: 'Forest', color: '#16a34a' },
  { id: 'cyber', name: 'Cyber', color: '#db2777' },
] as const;

interface ThemeSelectorProps {
  onSelect?: () => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onSelect }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-2 px-2 pb-2 border-b border-slate-100 dark:border-white/5">
        <Palette size={14} className="text-brand-600" />
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Appearance</p>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {THEMES.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setTheme(t.id);
              onSelect?.();
            }}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all group"
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-5 h-5 rounded-full shadow-inner flex-shrink-0" 
                style={{ backgroundColor: t.color }}
              />
              <span className={`text-[11px] font-bold tracking-wide ${theme === t.id ? 'text-brand-600' : 'text-slate-600 dark:text-slate-400'}`}>
                {t.name}
              </span >
            </div>
            {theme === t.id && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <Check size={14} className="text-brand-600" />
              </motion.div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
