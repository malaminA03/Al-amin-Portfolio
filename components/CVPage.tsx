
import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO, ABOUT_ME, TOOLS, PROJECTS, STRATEGIC_ABOUT } from '../constants';
import { Mail, Phone, MapPin, Printer, ArrowLeft } from 'lucide-react';

export const CVPage: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handlePrint = () => {
    // Add a class to body to help the print engine focus only on this component
    document.body.classList.add('is-printing-cv');
    window.print();
    // Classes are removed automatically if handled correctly in CSS or by the user closing dialog
    setTimeout(() => {
        document.body.classList.remove('is-printing-cv');
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-[100] bg-white text-slate-900 overflow-y-auto print:static print:bg-white print:p-0 cv-print-container"
    >
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Hide everything else on the page during print */
          body.is-printing-cv > *:not(.cv-print-container) {
            display: none !important;
          }
          .print-hidden {
            display: none !important;
          }
          .cv-container {
            width: 210mm !important;
            min-height: 297mm !important;
            padding: 15mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
          }
          header {
             border-bottom-width: 4px !important;
             border-color: #0f172a !important;
          }
          .skill-tag {
            background-color: #f1f5f9 !important;
          }
          .result-box {
            background-color: #0f172a !important;
            color: white !important;
          }
        }
      `}</style>

      <div className="max-w-[210mm] min-h-[297mm] mx-auto py-12 px-10 md:px-16 bg-white relative cv-container shadow-2xl my-10 print:my-0">
        
        {/* Navigation Bar (Hidden on Print) */}
        <div className="flex justify-between items-center mb-10 print-hidden">
          <button 
            onClick={onClose}
            className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Site</span>
          </button>
          <button 
            onClick={handlePrint}
            className="bg-brand-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20"
          >
            <Printer size={16} />
            <span>Save as PDF / Print</span>
          </button>
        </div>

        {/* CV HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-center md:items-start border-b-4 border-slate-900 pb-10 mb-12 gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tighter mb-3 leading-none uppercase">{USER_INFO.name}</h1>
            <p className="text-xl font-bold text-brand-600 uppercase tracking-widest mb-6">{USER_INFO.role}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-6 text-sm text-slate-600 font-medium">
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-brand-600" />
                <span>{USER_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-brand-600" />
                <span>{USER_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-brand-600" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-xl print:shadow-none">
              <img 
                src={USER_INFO.image} 
                alt={USER_INFO.name} 
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="md:col-span-8 space-y-10">
            
            {/* PROFILE */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-600 mb-4 border-b-2 border-slate-100 pb-2">Professional Summary</h2>
              <p className="text-[14px] leading-relaxed text-slate-700 font-medium">
                {ABOUT_ME}
              </p>
              <div className="mt-4 p-4 bg-slate-50 border-l-4 border-brand-600 rounded-r-lg">
                <p className="text-xs font-bold text-slate-800 leading-relaxed uppercase tracking-wide">Technical Value</p>
                <p className="text-xs text-slate-600 mt-1 italic">{STRATEGIC_ABOUT.trustFactor}</p>
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-600 mb-6 border-b-2 border-slate-100 pb-2">Impactful Projects</h2>
              <div className="space-y-8">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="break-inside-avoid">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">{project.title}</h3>
                      <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full text-slate-500 uppercase skill-tag">{project.category}</span>
                    </div>
                    <p className="text-xs font-bold text-brand-600 mb-2 uppercase tracking-widest">Role: {project.role}</p>
                    <p className="text-[13px] text-slate-600 mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex items-center space-x-3 bg-slate-900 p-3 rounded-lg text-xs font-bold text-white shadow-sm result-box">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span className="opacity-90">KPI Result: {project.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="md:col-span-4 space-y-12">
            
            {/* SKILLS */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-600 mb-6 border-b-2 border-slate-100 pb-2">Technical Arsenal</h2>
              <div className="space-y-5">
                {TOOLS.map((tool) => (
                  <div key={tool.name}>
                    <p className="text-sm font-black text-slate-900 mb-1">{tool.name}</p>
                    <p className="text-[10px] leading-tight text-slate-500 font-bold uppercase tracking-tight">{tool.benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CORE SERVICES */}
            <section>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-600 mb-6 border-b-2 border-slate-100 pb-2">Core Services</h2>
              <div className="space-y-5">
                <div className="space-y-1">
                  <p className="text-sm font-black">Scalable Development</p>
                  <p className="text-[11px] text-slate-500 font-medium">Enterprise MERN ecosystems.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-black">Automation Logic</p>
                  <p className="text-[11px] text-slate-500 font-medium">Custom Python & AI workflow tools.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-black">Aesthetic Systems</p>
                  <p className="text-[11px] text-slate-500 font-medium">Professional brand visual architecture.</p>
                </div>
              </div>
            </section>

            {/* SUMMARY STATS */}
            <section className="bg-slate-900 text-white p-6 rounded-2xl text-center space-y-2 result-box">
              <p className="text-4xl font-serif font-black mb-1">3+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-400">Years Mastery</p>
              <div className="pt-4 border-t border-white/10 mt-4">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Availability</p>
                 <p className="text-xs font-black text-green-400 uppercase tracking-widest">Accepting Projects</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </motion.div>
  );
};
