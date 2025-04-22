
import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  speed?: number;
  id?: string; // Added id prop to the interface
}

const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  className = "",
  speed = 0.5,
  id
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !backgroundRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section is from the center of the viewport
      const fromCenter = sectionTop - windowHeight / 2;
      
      // Apply parallax effect
      backgroundRef.current.style.transform = `translateY(${fromCenter * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} id={id} className={`parallax-container ${className}`}>
      {backgroundImage && (
        <div 
          ref={backgroundRef} 
          className="parallax-bg"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {children}
    </div>
  );
};

export default ParallaxSection;
