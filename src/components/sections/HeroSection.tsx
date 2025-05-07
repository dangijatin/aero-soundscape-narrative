
import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../ScrollReveal';
import AudioVisualizer from '../AudioVisualizer';
import { LampContainer } from '../ui/lamp';

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-audiolights-950/70 via-audiolights-950/80 to-audiolights-950/95 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070')] bg-cover bg-center bg-fixed opacity-40"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <motion.div
          animate={{
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 bg-audiolights-copper/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 bg-audiolights-200/10 rounded-full blur-3xl"
        />
      </div>

      <LampContainer className="min-h-screen relative z-30 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="max-w-5xl text-center mt-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-white/90 to-audiolights-copper bg-clip-text text-transparent">
            Your Trusted Audio Technology Partner in India
          </h1>
          
          <ScrollReveal delay={2}>
            <p className="text-xl md:text-2xl lg:text-3xl text-audiolights-200 max-w-3xl mx-auto my-8 font-light">
              Designing, Innovating, and Equipping the Future of Sound
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={3}>
            <div className="flex justify-center mt-10">
              <AudioVisualizer className="mb-8 scale-125" barCount={9} />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={4}>
            <motion.a 
              href="#expertise"
              whileHover={{ y: 5 }}
              className="inline-flex flex-col items-center mt-12 text-sm uppercase tracking-wider font-medium text-white/80 hover:text-audiolights-copper transition-colors duration-300"
            >
              Explore Our Solutions
              <div className="mt-4 animate-bounce opacity-75">↓</div>
            </motion.a>
          </ScrollReveal>
        </motion.div>
      </LampContainer>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none z-[25]" />
    </section>
  );
};

export default HeroSection;
