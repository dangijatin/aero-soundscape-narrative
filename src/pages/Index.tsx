
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import ExpertiseSection from '../components/sections/ExpertiseSection';
import BrandsSection from '../components/sections/BrandsSection';
import StorySection from '../components/sections/StorySection';
import NetworkSection from '../components/sections/NetworkSection';
import ProductsSection from '../components/sections/ProductsSection';
import InstallationsSection from '../components/sections/InstallationsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.opacity = '1';
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  useEffect(() => {
    // Smooth scroll to section when URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <div className="relative">
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>
      
      <Header />
      
      <main>
        <HeroSection />
        <IntroSection />
        <ExpertiseSection />
        <BrandsSection />
        <StorySection />
        <NetworkSection />
        <ProductsSection />
        <InstallationsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
