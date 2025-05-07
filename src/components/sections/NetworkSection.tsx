
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NetworkSection = () => {
  const states = [
    { name: "Gujarat", coordinates: { x: 135, y: 280 } },
    { name: "Madhya Pradesh", coordinates: { x: 220, y: 250 } },
    { name: "Chhattisgarh", coordinates: { x: 270, y: 270 } },
    { name: "Delhi", coordinates: { x: 200, y: 180 } },
    { name: "Uttar Pradesh", coordinates: { x: 250, y: 200 } },
    { name: "Maharashtra", coordinates: { x: 180, y: 300 } },
    { name: "Karnataka", coordinates: { x: 180, y: 350 } }
  ];
  
  const [activeState, setActiveState] = useState<string | null>(null);
  
  return (
    <section id="network" className="scroll-section py-32 bg-gradient-to-b from-audiolights-900 to-audiolights-950 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -right-1/3 top-1/4 w-2/3 h-2/3 bg-gradient-to-br from-audiolights-copper/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -left-1/3 bottom-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-audiolights-800/5 to-transparent rounded-full blur-3xl"
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
            Our <span className="text-audiolights-copper">Network</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-audiolights-copper to-audiolights-copper/50 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24 max-w-7xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-audiolights-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-audiolights-700/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Pan-India Reach</h3>
              <div className="space-y-6 text-audiolights-200/90">
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
                      key={state.name}
                      whileHover={{ y: -2 }}
                      className={`px-6 py-3 rounded-full text-sm transition-all duration-200 ${
                        activeState === state.name
                          ? 'bg-gradient-to-r from-audiolights-copper to-audiolights-copper/80 text-white shadow-lg' 
                          : 'bg-audiolights-800/50 text-audiolights-200 hover:bg-audiolights-700/50 hover:text-white'
                      }`}
                      onMouseEnter={() => setActiveState(state.name)}
                      onMouseLeave={() => setActiveState(null)}
                    >
                      {state.name}
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
                viewBox="0 0 400 500" 
                className="w-full h-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                {/* India map outline - simplified but recognizable */}
                <motion.path
                  d="M180,100 C200,80 240,70 260,80 C280,90 290,110 300,130 C310,150 320,180 330,200 C340,220 350,250 340,280 C330,310 310,340 290,370 C270,400 250,420 220,440 C190,460 150,470 120,460 C90,450 70,420 60,390 C50,360 40,320 50,290 C60,260 90,240 100,210 C110,180 100,150 110,120 C120,90 150,60 180,100 Z"
                  fill="url(#map-gradient)"
                  stroke="url(#map-stroke)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                {/* Gradients */}
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
                
                {/* State markers */}
                {states.map((state) => (
                  <motion.g key={state.name}>
                    <motion.circle
                      cx={state.coordinates.x}
                      cy={state.coordinates.y}
                      r={activeState === state.name ? 8 : 6}
                      fill={activeState === state.name ? "#B87333" : "#475569"}
                      stroke="#E2E8F0"
                      strokeWidth="1"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: 1,
                        opacity: activeState === state.name ? 0.8 : 0.6 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.text
                      x={state.coordinates.x}
                      y={state.coordinates.y - 15}
                      textAnchor="middle"
                      fill="#E2E8F0"
                      fontSize="12"
                      opacity={activeState === state.name ? 1 : 0}
                      animate={{ opacity: activeState === state.name ? 1 : 0 }}
                    >
                      {state.name}
                    </motion.text>
                  </motion.g>
                ))}

                {/* Delhi HQ marker */}
                <motion.circle
                  cx="200"
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
                  x="200"
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
                <p className="text-sm text-audiolights-300/90 bg-audiolights-800/30 py-3 px-6 rounded-full inline-block backdrop-blur-sm">
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
