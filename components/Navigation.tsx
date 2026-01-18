
import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Languages, Palette, Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, LANGUAGES } from '../constants';
import { useTheme, ACCENT_COLORS } from './ThemeContext';

interface NavigationProps {
  onViewCV: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onViewCV }) => {
  const { mode, toggleMode, language, accentColor, setAccentColor } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState('en');

  const paletteRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setIsPaletteOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ROBUST GOOGLE TRANSLATE LOGIC
  const changeLanguage = (langCode: string) => {
    setCurrentLangCode(langCode);
    setIsLangOpen(false);
    
    // Update HTML attribute for font-family overrides
    document.documentElement.setAttribute('data-applied-lang', langCode);

    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (combo) {
      combo.value = langCode;
      combo.dispatchEvent(new Event('change'));
    } else {
      console.warn('Google Translate combo not found. Engine might still be loading.');
      // Attempt retry after a short delay
      setTimeout(() => {
        const retryCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (retryCombo) {
          retryCombo.value = langCode;
          retryCombo.dispatchEvent(new Event('change'));
        }
      }, 1000);
    }
  };

  const currentLang = LANGUAGES.find(l => l.code === currentLangCode) || LANGUAGES[0];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-theme-bg/90 backdrop-blur-md border-b border-theme-border py-4' : 'bg-transparent py-6'
    }`}>
      <div className="section-container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-theme-text group">
          Al-amin<span className="text-brand inline-block group-hover:scale-125 transition-transform">.</span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
           {NAV_ITEMS.filter(i => !i.isAction).map(item => (
             <a key={item.label} href={item.href} className="text-[10px] font-bold uppercase tracking-widest text-theme-dim hover:text-brand transition-colors">
               {item.label}
             </a>
           ))}
           
           <div className="h-4 w-[1px] bg-theme-border"></div>

           <div className="flex items-center space-x-3">
              {/* CUSTOM LANGUAGE DROPDOWN */}
              <div className="relative" ref={langRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-all bg-theme-card ${
                    isLangOpen ? 'border-brand text-brand' : 'border-theme-border text-theme-dim hover:border-brand hover:text-brand'
                  }`}
                >
                  <Globe size={14} />
                  <span className="text-[10px] font-black uppercase tracking-tighter">
                    {currentLang.native}
                  </span>
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full mt-3 right-0 w-64 bg-theme-bg border border-theme-border rounded-2xl shadow-2xl p-2 z-[110] max-h-[70vh] overflow-y-auto custom-scrollbar"
                    >
                      <p className="text-[9px] font-black uppercase tracking-widest text-theme-dim mb-2 px-3 pt-2">Select Language</p>
                      <div className="space-y-1">
                        {LANGUAGES.map(lang => (
                          <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-left group ${
                              currentLangCode === lang.code ? 'bg-brand/10 text-brand' : 'hover:bg-theme-card text-theme-dim hover:text-theme-text'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">{lang.flag}</span>
                              <div className="flex flex-col">
                                <span className="text-xs font-bold">{lang.native}</span>
                                <span className="text-[9px] opacity-60 uppercase tracking-tighter font-medium">{lang.label}</span>
                              </div>
                            </div>
                            {currentLangCode === lang.code && <Check size={12} />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Color Palette */}
              <div className="relative" ref={paletteRef}>
                <button 
                  onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                  className={`p-2 rounded-full transition-all ${isPaletteOpen ? 'bg-brand text-white' : 'text-theme-dim hover:bg-theme-card'}`}
                >
                  <Palette size={18} />
                </button>
                
                <AnimatePresence>
                  {isPaletteOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full mt-3 right-0 w-48 bg-theme-bg border border-theme-border rounded-2xl shadow-2xl p-3 z-[110]"
                    >
                      <p className="text-[9px] font-black uppercase tracking-widest text-theme-dim mb-3 px-1">Accent Colors</p>
                      <div className="grid grid-cols-5 gap-2">
                        {ACCENT_COLORS.map(c => (
                          <button
                            key={c.id}
                            onClick={() => {
                              setAccentColor(c.id);
                              setIsPaletteOpen(false);
                            }}
                            className="w-full aspect-square rounded-lg flex items-center justify-center relative overflow-hidden group shadow-sm"
                            style={{ backgroundColor: c.val }}
                          >
                            {accentColor === c.id && <Check size={12} className="text-white drop-shadow-md" />}
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dark Mode Toggle */}
              <button onClick={toggleMode} className="p-2 rounded-full text-theme-dim hover:text-brand hover:bg-theme-card transition-all">
                {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
           </div>
        </div>
        
        {/* Mobile controls */}
        <div className="md:hidden flex items-center space-x-2">
           <button 
              onClick={() => setIsLangOpen(!isLangOpen)} 
              className="px-2 py-1 text-[10px] font-black border border-theme-border rounded text-theme-text uppercase flex items-center space-x-1"
           >
             <Globe size={12} />
             <span>{currentLang.code.toUpperCase()}</span>
           </button>
           <button onClick={() => setIsPaletteOpen(!isPaletteOpen)} className="p-2 text-brand"><Palette size={20} /></button>
           <button onClick={toggleMode} className="p-2 text-theme-dim">{mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}</button>
        </div>
      </div>
      
      {/* Mobile Lang Panel */}
      <AnimatePresence>
        {isLangOpen && (
          <div className="md:hidden fixed inset-0 z-[200]">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsLangOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              className="absolute bottom-0 left-0 right-0 bg-theme-bg rounded-t-[2.5rem] border-t border-theme-border p-6 pt-10"
            >
               <div className="w-12 h-1 bg-theme-border mx-auto mb-8 rounded-full" />
               <h3 className="text-xl font-serif font-black mb-6">Select Language</h3>
               <div className="grid grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto">
                 {LANGUAGES.map(lang => (
                   <button
                     key={lang.code}
                     onClick={() => changeLanguage(lang.code)}
                     className={`flex flex-col p-4 rounded-2xl border transition-all ${
                        currentLangCode === lang.code ? 'border-brand bg-brand/5' : 'border-theme-border bg-theme-card'
                     }`}
                   >
                     <span className="text-2xl mb-2">{lang.flag}</span>
                     <span className="text-sm font-bold truncate">{lang.native}</span>
                   </button>
                 ))}
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};
