
import React from 'react';

interface AudioVisualizerProps {
  className?: string;
  barCount?: number;
}

const AudioVisualizer = ({ className = "", barCount = 5 }: AudioVisualizerProps) => {
  return (
    <div className={`flex items-end justify-center h-16 ${className}`}>
      {[...Array(barCount)].map((_, index) => (
        <div 
          key={index} 
          className={`audio-bar animate-audio-wave-${(index % 5) + 1}`}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer;
