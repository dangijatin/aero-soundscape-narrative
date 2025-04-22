
import React from 'react';
import ScrollReveal from '../ScrollReveal';

const IntroSection = () => {
  return (
    <section id="intro" className="scroll-section py-24 bg-aerons-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            What We <span className="text-aerons-copper">Offer</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <ScrollReveal delay={2} direction="left">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 mx-auto bg-aerons-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aerons-copper">
                  <path d="m7 11 2-2-2-2"></path>
                  <path d="M11 13h4"></path>
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sales</h3>
              <p className="text-aerons-600">
                Premium audio equipment across multiple renowned brands.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={3}>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 mx-auto bg-aerons-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aerons-copper">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.9L12 4h4a2 2 0 0 1 1.4.6"></path>
                  <path d="M16 2v2"></path>
                  <path d="M3 10a2 2 0 0 1 2-2h3.9"></path>
                  <path d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-aerons-600">
                Customized audio solutions for various settings and requirements.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={4} direction="right">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="w-20 h-20 mx-auto bg-aerons-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aerons-copper">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Service</h3>
              <p className="text-aerons-600">
                Expert support and maintenance for professional audio systems.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={5}>
          <div className="mt-20 max-w-4xl mx-auto text-center">
            <p className="text-lg text-aerons-700 leading-relaxed">
              As the largest organization in Central India specializing in professional audio solutions, we provide comprehensive audio systems designed to meet the highest standards. From concept to installation, we equip you with best-in-class technology for every acoustic environment.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
