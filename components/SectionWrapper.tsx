import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "", delay = 0 }) => {
  return (
    <section id={id} className={`py-16 md:py-32 px-4 md:px-12 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }} // Removed negative margin to prevent white screen
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </section>
  );
};