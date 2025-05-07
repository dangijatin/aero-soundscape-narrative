
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import { motion } from 'framer-motion';

const FloatingCard = ({ delay, children, direction = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        animate={{
          x: [0, direction * 5, 0],
          y: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const IntroSection = () => {
  return (
    <section id="intro" className="scroll-section py-32 bg-gradient-to-b from-audiolights-50 to-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.15]">
        <div className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 bg-audiolights-copper/10 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 bg-audiolights-200/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            What We <span className="text-audiolights-copper">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-audiolights-copper to-audiolights-copper/50 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <FloatingCard delay={1} direction={-1}>
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border border-audiolights-200/20">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-audiolights-100 to-white rounded-full flex items-center justify-center mb-8 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-audiolights-copper">
                  <path d="m7 11 2-2-2-2"></path>
                  <path d="M11 13h4"></path>
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">Sales</h3>
              <p className="text-audiolights-600/90 leading-relaxed">
                Premium audio equipment across multiple renowned brands.
              </p>
            </div>
          </FloatingCard>
          
          <FloatingCard delay={2}>
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border border-audiolights-200/20">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-audiolights-100 to-white rounded-full flex items-center justify-center mb-8 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-audiolights-copper">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.9L12 4h4a2 2 0 0 1 1.4.6"></path>
                  <path d="M16 2v2"></path>
                  <path d="M3 10a2 2 0 0 1 2-2h3.9"></path>
                  <path d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">Design</h3>
              <p className="text-audiolights-600/90 leading-relaxed">
                Customized audio solutions for various settings and requirements.
              </p>
            </div>
          </FloatingCard>
          
          <FloatingCard delay={3} direction={1}>
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border border-audiolights-200/20">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-audiolights-100 to-white rounded-full flex items-center justify-center mb-8 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-audiolights-copper">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">Service</h3>
              <p className="text-audiolights-600/90 leading-relaxed">
                Expert support and maintenance for professional audio systems.
              </p>
            </div>
          </FloatingCard>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            delay: 0.8
          }}
        >
          <div className="mt-24 max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-audiolights-700 leading-relaxed font-light">
              As the largest organization in Central India specializing in professional audio solutions, we provide comprehensive audio systems designed to meet the highest standards. From concept to installation, we equip you with <span className="font-medium text-audiolights-900">best-in-class technology</span> for every acoustic environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
