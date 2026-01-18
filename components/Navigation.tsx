
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Home, Layers, Code, Mail, MessageSquare, FileText } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  onViewCV: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme, onViewCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          <div className="hidden md:flex items-center space-x-10">
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
            <button 
              onClick={toggleTheme} 
              className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-brand-600 hover:text-white transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
             <button onClick={onViewCV} className="p-2.5 bg-brand-600 text-white rounded-full">
                <FileText size={18} />
             </button>
             <button onClick={toggleTheme} className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-full">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </button>
          </div>
        </div>
      </nav>

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
