
import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ContentSections } from './components/ContentSections';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { ProjectGrid } from './components/ProjectGrid';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { MarqueeBanner } from './components/MarqueeBanner';
import { HirePopup } from './components/HirePopup';
import { CVPage } from './components/CVPage';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);
  const [showCV, setShowCV] = useState(false);
  const [showHirePopup, setShowHirePopup] = useState(false);
  const [isPermanentlyDismissed, setIsPermanentlyDismissed] = useState(false);
  const popupTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }

    const dismissed = localStorage.getItem('hire_popup_dismissed') === 'true';
    setIsPermanentlyDismissed(dismissed);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading || isPermanentlyDismissed) return;

    const startPopupTimer = () => {
      popupTimerRef.current = setInterval(() => {
        if (!showHirePopup) {
          setShowHirePopup(true);
        }
      }, 30000);
    };

    const initialTimer = setTimeout(() => {
      setShowHirePopup(true);
      startPopupTimer();
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      if (popupTimerRef.current) clearInterval(popupTimerRef.current);
    };
  }, [isLoading, isPermanentlyDismissed, showHirePopup]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleTemporaryClose = () => {
    setShowHirePopup(false);
  };

  const handlePermanentDismiss = () => {
    setShowHirePopup(false);
    setIsPermanentlyDismissed(true);
    localStorage.setItem('hire_popup_dismissed', 'true');
    if (popupTimerRef.current) clearInterval(popupTimerRef.current);
  };

  return (
    <div className={`relative w-full overflow-hidden animated-bg transition-colors duration-500 min-h-screen ${showCV ? 'h-screen' : ''}`}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navigation 
              isDark={theme === 'dark'} 
              toggleTheme={toggleTheme} 
              onViewCV={() => setShowCV(true)}
            />
            
            <main>
              <Hero />
              <ContentSections />
              <MarqueeBanner />
              <Expertise />
              <Services />
              <ProjectGrid />
              <Process />
              <Testimonials />
              <ContactSection />
            </main>

            <HirePopup 
              isVisible={showHirePopup} 
              onClose={handleTemporaryClose}
              onCancel={handlePermanentDismiss}
            />

            <Footer onViewCV={() => setShowCV(true)} />

            {/* CV Overlay */}
            <AnimatePresence>
              {showCV && <CVPage onClose={() => setShowCV(false)} />}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
