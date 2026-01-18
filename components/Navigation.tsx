
import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Home, Layers, Code, MessageSquare, FileText, Languages, ChevronDown, Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  onViewCV: () => void;
}

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'bn', name: 'বাংলা (Bengali)', flag: '🇧🇩' },
  { code: 'hi', name: 'हिन्दी (Hindi)', flag: '🇮🇳' },
  { code: 'ur', name: 'اردو (Urdu)', flag: '🇵🇰' },
  { code: 'ar', name: 'العربية (Arabic)', flag: '🇸🇦' },
  { code: 'es', name: 'Español (Spanish)', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語 (Japanese)', flag: '🇯🇵' },
  { code: 'ko', name: '한국어 (Korean)', flag: '🇰🇷' },
  { code: 'mi', name: 'Maori', flag: '🇳🇿' },
  { code: 'tpi', name: 'Tok Pisin', flag: '🇵🇬' },
];

export const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme, onViewCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['#hero', '#advantage', '#services', '#work', '#testimonials', '#contact'];
      for (const section of sections.reverse()) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) &&
        (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node))
      ) {
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

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);

    // CRITICAL LOGIC: Bridging Custom UI to Google Legacy Engine
    const googleSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleSelect) {
      googleSelect.value = langCode;
      // MUST dispatch change event for Google to notice the switch
      googleSelect.dispatchEvent(new Event('change'));
      
      // Update the <html> lang attribute manually to trigger CSS font swaps instantly
      document.documentElement.lang = langCode;
    } else {
      console.warn("Google Translate Bridge: Engine not found in DOM.");
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const mobileNavItems = [
    { icon: Home, href: '#hero' },
    { icon: Layers, href: '#services' },
    { icon: Code, href: '#work' },
    { icon: MessageSquare, href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 dark:bg-deep-950/80 backdrop-blur-xl py-4 border-b border-slate-200 dark:border-white/5' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#" onClick={(e) => scrollToSection(e, '#hero')} className="text-xl font-serif font-black tracking-tighter text-slate-950 dark:text-white">
            Al-amin<span className="text-brand-600">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {NAV_ITEMS.map((item) => {
              if (item.isAction) {
                return (
                  <button
                    key={item.label}
                    onClick={onViewCV}
                    className="px-5 py-2.5 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20"
                  >
                    {item.label}
                  </button>
                );
              }
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                    isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-500'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}

            {/* Custom Language Dropdown (Desktop) */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-brand-600 transition-all group"
              >
                <Languages size={14} className="text-brand-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 min-w-[60px] text-left">
                  {LANGUAGES.find(l => l.code === currentLang)?.name.split(' ')[0]}
                </span>
                <ChevronDown size={12} className={`text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full mt-2 right-0 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 z-[60] max-h-[70vh] overflow-y-auto custom-scrollbar"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group text-left"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg leading-none">{lang.flag}</span>
                          <span className={`text-[11px] font-bold tracking-wide ${currentLang === lang.code ? 'text-brand-600' : 'text-slate-600 dark:text-slate-400'}`}>
                            {lang.name}
                          </span>
                        </div>
                        {currentLang === lang.code && <Check size={12} className="text-brand-600" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={toggleTheme} 
              className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-brand-600 hover:text-white transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Header Icons */}
          <div className="md:hidden flex items-center space-x-2">
             {/* Mobile Language Trigger */}
             <div className="relative" ref={mobileDropdownRef}>
               <button 
                 onClick={() => setIsLangOpen(!isLangOpen)}
                 className={`p-2.5 rounded-full transition-all ${isLangOpen ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-white/5 text-brand-600'}`}
                 aria-label="Change Language"
               >
                 <Globe size={18} />
               </button>

               <AnimatePresence>
                 {isLangOpen && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10, scale: 0.9 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: 10, scale: 0.9 }}
                     className="absolute top-full mt-3 right-0 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl overflow-hidden py-3 z-[100] max-h-[60vh] overflow-y-auto custom-scrollbar"
                   >
                     <div className="px-5 py-2 mb-2 border-b border-slate-100 dark:border-white/5">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Select Language</p>
                     </div>
                     {LANGUAGES.map((lang) => (
                       <button
                         key={lang.code}
                         onClick={() => changeLanguage(lang.code)}
                         className="w-full px-5 py-3.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group text-left active:bg-brand-50"
                       >
                         <div className="flex items-center space-x-4">
                           <span className="text-xl leading-none">{lang.flag}</span>
                           <span className={`text-[12px] font-bold tracking-wide ${currentLang === lang.code ? 'text-brand-600' : 'text-slate-600 dark:text-slate-400'}`}>
                             {lang.name}
                           </span>
                         </div>
                         {currentLang === lang.code && <Check size={14} className="text-brand-600" />}
                       </button>
                     ))}
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>

             <button onClick={onViewCV} className="p-2.5 bg-brand-600 text-white rounded-full shadow-lg shadow-brand-600/20">
                <FileText size={18} />
             </button>
             <button onClick={toggleTheme} className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-full text-slate-600 dark:text-slate-400">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <div className="glass bg-white/90 dark:bg-deep-950/90 border border-slate-200 dark:border-white/10 rounded-[2rem] p-2 flex justify-between items-center shadow-2xl">
          {mobileNavItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            return (
              <a 
                key={index}
                href={item.href} 
                onClick={(e) => scrollToSection(e, item.href)} 
                className={`flex-1 flex justify-center py-3 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'text-brand-600 bg-brand-50/50 dark:bg-brand-900/20' 
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
              >
                <Icon size={20} className={isActive ? 'scale-110' : 'scale-100'} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
