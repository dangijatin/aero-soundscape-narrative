import React from 'react';
import logoWhite from '../assets/logo-white.png';

const Logo = () => {
  return (
    <div className="inline-flex items-center justify-center">
      <img 
        src={logoWhite} 
        alt="Audio & Lights Logo" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};
export default Logo;