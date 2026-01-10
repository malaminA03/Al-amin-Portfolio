import React, { useState } from 'react';
import { USER_INFO } from '../constants';
import { Copy, Check, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // WhatsApp Link Construction
  const whatsappNumber = "8801778189644"; // Country code + number
  const whatsappMessage = encodeURIComponent("Hello, I visited your portfolio and would like to contact you.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mnjjabjz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
           setErrorMessage(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
           setErrorMessage("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (error) {
      setErrorMessage("Oops! There was a network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-slate-50 dark:bg-[#0b1121] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-600 dark:text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">
               Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
               Let's build your <br/> next big thing.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
               I’m currently available for freelance work. If you have a project that needs some creative injection, I'd love to discuss it.
            </p>

            <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-5 group">
                    <a 
                      href={`mailto:${USER_INFO.email}`} 
                      className="w-14 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    >
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
                          alt="Gmail" 
                          className="w-8 h-8 object-contain"
                        />
                    </a>
                    <div className="flex-1">
                        <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">Email</p>
                        <div className="flex items-center gap-3">
                             <a href={`mailto:${USER_INFO.email}`} className="text-lg md:text-xl font-medium text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all">
                                {USER_INFO.email}
                             </a>
                             <button 
                                onClick={handleCopy} 
                                className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-slate-700 rounded-md transition-all relative flex-shrink-0"
                                title="Copy Email"
                             >
                                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                             </button>
                        </div>
                    </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-5 group">
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    >
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                          alt="WhatsApp" 
                          className="w-8 h-8 object-contain"
                        />
                    </a>
                    <div>
                        <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">WhatsApp</p>
                        <a 
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg md:text-xl font-medium text-slate-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer"
                        >
                           {USER_INFO.phone}
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5 group">
                    <a 
                      href="https://maps.google.com/?q=Dhaka,Bangladesh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    >
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" 
                          alt="Google Maps" 
                          className="w-8 h-8 object-contain"
                        />
                    </a>
                    <div>
                        <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">Location</p>
                        <a 
                          href="https://maps.google.com/?q=Dhaka,Bangladesh" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-lg md:text-xl font-medium text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                        >
                           Dhaka, Bangladesh
                        </a>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden"
          >
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-blue-500"></div>

            {isSuccess ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
                        <Check size={40} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xs mx-auto">
                        Thank you for reaching out. I'll review your project details and get back to you shortly.
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-bold uppercase tracking-wide hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        Send Another
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required
                            rows={4}
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-y min-h-[120px]"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    {errorMessage && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg border border-red-200 dark:border-red-800 flex items-center">
                            <span className="mr-2">⚠️</span> {errorMessage}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Send size={20} />
                            </>
                        )}
                    </button>
                </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
};