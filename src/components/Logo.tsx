import React from 'react';
import logoWhite from '../assets/logo-white.png';

const Logo = () => {
  return (
    <div className="inline-flex items-center">
      <img 
        src={logoWhite} 
        alt="Audio & Lights Logo" 
        className="h-8 w-auto"
      />
    </div>
  );
};
export default Logo;