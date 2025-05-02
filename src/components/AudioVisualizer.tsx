import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AudioVisualizerProps {
  className?: string;
  barCount?: number;
}

const AudioVisualizer = ({ className = '', barCount = 9 }: AudioVisualizerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
    <motion.div 
      className={`flex items-end justify-center h-16 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(barCount)].map((_, index) => {
        const animationClass = `animate-audio-wave-${(index % 5) + 1}`;
        return (
          <motion.div
            key={index}
            className={`audio-bar ${isPlaying ? animationClass : ''} lamp-glow`}
            initial={{ height: 24, opacity: 0 }}
            animate={{ 
              height: 24, 
              opacity: isPlaying ? 1 : 0.5,
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default AudioVisualizer;
