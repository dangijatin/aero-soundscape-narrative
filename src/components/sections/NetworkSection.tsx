
import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const NetworkSection = () => {
  // States to be highlighted on the map
  const states = [
    "Gujarat", "Madhya Pradesh", "Chhattisgarh", "Delhi", 
    "Uttar Pradesh", "Maharashtra", "Karnataka"
  ];
  
  const [activeState, setActiveState] = useState<string | null>(null);
  
  return (
    <section id="network" className="scroll-section py-24 bg-aerons-900 text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-aerons-copper">Network</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Pan-India Reach</h3>
              <p className="text-aerons-200 leading-relaxed mb-6">
                With our headquarters in New Delhi, we extend our services across India through an extensive dealer and service network. Our presence spans multiple states, ensuring that quality audio solutions are accessible throughout the country.
              </p>
              <p className="text-aerons-200 leading-relaxed mb-8">
                Our dealer network is strategically positioned to provide prompt service and support, bringing our expertise and products closer to our customers regardless of their location.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-medium">Key Regions:</h4>
                <div className="flex flex-wrap gap-3">
                  {states.map(state => (
                    <button
                      key={state}
                      className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                        activeState === state 
                          ? 'bg-aerons-copper text-white' 
                          : 'bg-aerons-800 text-aerons-200 hover:bg-aerons-700'
                      }`}
                      onMouseEnter={() => setActiveState(state)}
                      onMouseLeave={() => setActiveState(null)}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="relative">
              <svg 
                viewBox="0 0 500 600" 
                className="w-full h-auto"
              >
                {/* Simplified India map outline */}
                <path 
                  d="M200,100 C220,90 250,85 270,90 C290,95 310,110 320,130 C330,150 350,200 370,220 C390,240 400,280 390,320 C380,360 350,400 330,430 C310,460 290,480 260,500 C230,520 190,530 150,520 C110,510 90,480 80,450 C70,420 60,380 70,350 C80,320 110,300 120,270 C130,240 120,210 130,180 C140,150 170,120 200,100 Z" 
                  fill="#334155" 
                  stroke="#475569" 
                  strokeWidth="2"
                />
                
                {/* Highlighted states - these are simplified shapes */}
                {states.map((state, index) => {
                  // Generate a simplistic shape for each state
                  // In a real app, you'd use actual geographical data
                  const x = 150 + (index % 4) * 80;
                  const y = 200 + Math.floor(index / 4) * 100;
                  const size = 30 + (index * 5);
                  
                  return (
                    <circle
                      key={state}
                      cx={x}
                      cy={y}
                      r={size / 4}
                      fill={activeState === state ? "#B87333" : "#475569"}
                      stroke={activeState === state ? "#E2E8F0" : "#334155"}
                      strokeWidth="1"
                      opacity={activeState === state ? "0.8" : "0.6"}
                      className="transition-all duration-300"
                    />
                  );
                })}
                
                {/* Delhi headquarters */}
                <circle
                  cx="220"
                  cy="180"
                  r="8"
                  fill="#B87333"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                />
                <text
                  x="220"
                  y="160"
                  textAnchor="middle"
                  fill="#E2E8F0"
                  fontSize="12"
                  fontWeight="bold"
                >
                  New Delhi HQ
                </text>
              </svg>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-aerons-300">
                  Headquarters: New Delhi | Reach: Pan-India through Dealer Network
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
