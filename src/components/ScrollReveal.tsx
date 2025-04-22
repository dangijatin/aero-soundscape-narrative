
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  direction?: 'bottom' | 'left' | 'right' | 'none';
  threshold?: number;
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 1, 
  direction = 'bottom',
  threshold = 0.1 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const directionClass = direction === 'none' ? '' : `reveal-${direction}`;

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} ${directionClass} ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
