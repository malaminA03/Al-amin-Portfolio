
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
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : (
        <Layout key="content" onViewCV={() => setShowCV(true)}>
          <Hero />
          <ContentSections />
          <Expertise />
          <Services />
          <ProjectGrid />
          <Testimonials />
          <ContactSection />
          <Footer onViewCV={() => setShowCV(true)} />
        </Layout>
      )}
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
