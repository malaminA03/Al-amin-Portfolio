
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ContentSections } from './components/ContentSections';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { ProjectGrid } from './components/ProjectGrid';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HirePopup } from './components/HirePopup';
import { AnimatePresence } from 'framer-motion';

function AppContent() {
  const [showCV, setShowCV] = useState(false);
  const [isHirePopupVisible, setIsHirePopupVisible] = useState(false);
  const [isPermanentlyDismissed, setIsPermanentlyDismissed] = useState(() => {
    return localStorage.getItem('hire-popup-dismissed') === 'true';
  });

  useEffect(() => {
    // Only start timer if not permanently dismissed
    if (!isPermanentlyDismissed) {
      const timer = setTimeout(() => {
        setIsHirePopupVisible(true);
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [isPermanentlyDismissed]);

  const handleClosePopup = () => {
    setIsHirePopupVisible(false);
  };

  const handlePermanentDismiss = () => {
    setIsHirePopupVisible(false);
    setIsPermanentlyDismissed(true);
    localStorage.setItem('hire-popup-dismissed', 'true');
  };

  return (
    <AnimatePresence mode="wait">
      <Layout key="content" onViewCV={() => setShowCV(true)}>
        <Hero />
        <ContentSections />
        <Expertise />
        <Services />
        <ProjectGrid />
        <Testimonials />
        <ContactSection />
        <Footer onViewCV={() => setShowCV(true)} />
        
        <HirePopup 
          isVisible={isHirePopupVisible} 
          onClose={handleClosePopup}
          onCancel={handlePermanentDismiss}
        />
      </Layout>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
