
import React from 'react';
import { Music, Lightbulb } from 'lucide-react';

const Logo = () => {
  return (
    <div className="inline-flex items-center">
      <span className="text-white">aud
        <span className="relative">
          i
          <Music className="absolute -top-3 -left-[2px] w-3 h-3" />
        </span>
        o</span>
      <span className="text-[#A1D6F3]">&l
        <span className="relative">
          i
          <Lightbulb className="absolute -top-3 -left-[2px] w-3 h-3" />
        </span>
        ghts</span>
    </div>
  );
};

export default Logo;
