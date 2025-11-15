
import React, { useEffect, useRef, lazy, Suspense } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import Footer from '../components/Footer';

// Lazy load sections below the fold
const IntroSection = lazy(() => import('../components/sections/IntroSection'));
const ExpertiseSection = lazy(() => import('../components/sections/ExpertiseSection'));
const BrandsSection = lazy(() => import('../components/sections/BrandsSection'));
const StorySection = lazy(() => import('../components/sections/StorySection'));
const NetworkSection = lazy(() => import('../components/sections/NetworkSection'));
const ProductsSection = lazy(() => import('../components/sections/ProductsSection'));
const InstallationsSection = lazy(() => import('../components/sections/InstallationsSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));

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
        <Suspense fallback={<div className="min-h-screen" />}>
          <IntroSection />
          <ExpertiseSection />
          <BrandsSection />
          <StorySection />
          <NetworkSection />
          <ProductsSection />
          <InstallationsSection />
          <ContactSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
