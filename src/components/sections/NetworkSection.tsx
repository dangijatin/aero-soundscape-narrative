import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NetworkSection = () => {
  // States to be highlighted on the map
  const states = [
    "Gujarat", "Madhya Pradesh", "Chhattisgarh", "Delhi", 
    "Uttar Pradesh", "Maharashtra", "Karnataka"
  ];
  
  const [activeState, setActiveState] = useState<string | null>(null);
  
  return (
    <section id="network" className="scroll-section py-32 bg-gradient-to-b from-aerons-900 to-aerons-950 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -right-1/3 top-1/4 w-2/3 h-2/3 bg-gradient-to-br from-aerons-copper/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -left-1/3 bottom-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-aerons-800/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Our <span className="text-aerons-copper">Network</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aerons-copper to-aerons-copper/50 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24 max-w-7xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-aerons-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-aerons-700/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Pan-India Reach</h3>
              <div className="space-y-6 text-aerons-200/90">
                <p className="leading-relaxed text-lg">
                  With our headquarters in New Delhi, we extend our services across India through an extensive dealer and service network. Our presence spans multiple states, ensuring that quality audio solutions are accessible throughout the country.
                </p>
                <p className="leading-relaxed text-lg">
                  Our dealer network is strategically positioned to provide prompt service and support, bringing our expertise and products closer to our customers regardless of their location.
                </p>
              </div>
              
              <div className="mt-12 space-y-6">
                <h4 className="text-xl font-medium text-white/90">Key Regions:</h4>
                <div className="flex flex-wrap gap-3">
                  {states.map(state => (
                    <motion.button
                      key={state}
                      whileHover={{ y: -2 }}
                      className={`px-6 py-3 rounded-full text-sm transition-all duration-200 ${
                        activeState === state 
                          ? 'bg-gradient-to-r from-aerons-copper to-aerons-copper/80 text-white shadow-lg' 
                          : 'bg-aerons-800/50 text-aerons-200 hover:bg-aerons-700/50 hover:text-white'
                      }`}
                      onMouseEnter={() => setActiveState(state)}
                      onMouseLeave={() => setActiveState(null)}
                    >
                      {state}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.svg 
                viewBox="0 0 500 600" 
                className="w-full h-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Simplified India map outline */}
                <motion.path 
                  d="M200,100 C220,90 250,85 270,90 C290,95 310,110 320,130 C330,150 350,200 370,220 C390,240 400,280 390,320 C380,360 350,400 330,430 C310,460 290,480 260,500 C230,520 190,530 150,520 C110,510 90,480 80,450 C70,420 60,380 70,350 C80,320 110,300 120,270 C130,240 120,210 130,180 C140,150 170,120 200,100 Z" 
                  fill="url(#map-gradient)"
                  stroke="url(#map-stroke)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                <defs>
                  <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1E293B" />
                  </linearGradient>
                  <linearGradient id="map-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#B87333" />
                  </linearGradient>
                </defs>
                
                {/* Highlighted states */}
                {states.map((state, index) => {
                  const x = 150 + (index % 4) * 80;
                  const y = 200 + Math.floor(index / 4) * 100;
                  const size = 30 + (index * 5);
                  
                  return (
                    <motion.circle
                      key={state}
                      cx={x}
                      cy={y}
                      r={size / 4}
                      fill={activeState === state ? "#B87333" : "#475569"}
                      stroke={activeState === state ? "#E2E8F0" : "#334155"}
                      strokeWidth="1"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: 1,
                        opacity: activeState === state ? 0.8 : 0.6 
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1
                      }}
                      whileHover={{ scale: 1.2 }}
                    />
                  );
                })}
                
                {/* Delhi headquarters with pulse animation */}
                <motion.circle
                  cx="220"
                  cy="180"
                  r="8"
                  fill="#B87333"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <text
                  x="220"
                  y="160"
                  textAnchor="middle"
                  fill="#E2E8F0"
                  fontSize="12"
                  fontWeight="bold"
                  className="drop-shadow-lg"
                >
                  New Delhi HQ
                </text>
              </motion.svg>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8 text-center"
              >
                <p className="text-sm text-aerons-300/90 bg-aerons-800/30 py-3 px-6 rounded-full inline-block backdrop-blur-sm">
                  Headquarters: New Delhi | Reach: Pan-India through Dealer Network
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
