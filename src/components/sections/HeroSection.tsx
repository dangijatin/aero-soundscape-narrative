
import React, { useEffect, useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import AudioVisualizer from '../AudioVisualizer';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="scroll-section relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aerons-950/70 to-aerons-950/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070')] bg-cover bg-center opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 flex flex-col h-screen justify-center items-center text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Your Trusted Audio Technology Partner in India
          </h1>
          
          <ScrollReveal delay={2}>
            <p className="text-xl md:text-2xl text-aerons-200 max-w-3xl mx-auto my-8">
              Designing, Innovating, and Equipping the Future of Sound
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={3}>
            <div className="flex justify-center mt-10">
              <AudioVisualizer className="mb-8" barCount={9} />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={4}>
            <a 
              href="#expertise" 
              className="inline-block mt-8 text-sm uppercase tracking-wider font-medium hover:text-aerons-copper transition-colors duration-300"
            >
              Explore Our Solutions
              <div className="mt-4 animate-bounce">↓</div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
