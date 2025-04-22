
import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import ParallaxSection from '../ParallaxSection';
import AudioVisualizer from '../AudioVisualizer';

const InstallationsSection = () => {
  const installations = [
    {
      type: "Auditoriums",
      description: "High-fidelity sound systems for perfect acoustics in any auditorium size.",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2071"
    },
    {
      type: "Cafes & Restaurants",
      description: "Ambiance-enhancing audio solutions for dining and entertainment spaces.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074"
    },
    {
      type: "Discotheques",
      description: "Powerful, immersive sound systems designed for optimal performance in club environments.",
      image: "https://images.unsplash.com/photo-1571600097567-80828a8949dc?q=80&w=2070"
    },
    {
      type: "Gymnasiums",
      description: "Clear, distributed audio for fitness environments and sporting facilities.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
    },
    {
      type: "Houses of Worship",
      description: "Respectful, pristine sound delivery systems for places of religious gathering.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2070"
    },
    {
      type: "Public Address",
      description: "Reliable announcement systems for hospitals, railway stations, and airports.",
      image: "https://images.unsplash.com/photo-1584269881525-11de4044eb3d?q=80&w=2071"
    }
  ];

  const [activeInstallation, setActiveInstallation] = useState(installations[0]);

  return (
    <ParallaxSection 
      id="installations" 
      className="scroll-section py-24 bg-aerons-900 text-white"
      backgroundImage="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070"
    >
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-aerons-copper">Installations</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={2}>
          <p className="text-center text-aerons-200 max-w-3xl mx-auto mb-16 text-lg">
            We specialize in customized audio installations across various environments, ensuring optimal sound quality tailored to each unique space.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-lg h-80 lg:h-[500px]">
              <img 
                src={activeInstallation.image} 
                alt={activeInstallation.type}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aerons-950/90 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2">{activeInstallation.type}</h3>
                <p className="text-aerons-200 mb-4">{activeInstallation.description}</p>
                
                <AudioVisualizer className="mt-6" barCount={7} />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6">Explore Our Installations</h3>
              
              <div className="space-y-4">
                {installations.map((installation, index) => (
                  <ScrollReveal 
                    key={installation.type}
                    delay={(index % 5) + 1 as 1 | 2 | 3 | 4 | 5}
                  >
                    <button
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeInstallation.type === installation.type 
                          ? 'bg-aerons-copper/20 border-l-4 border-aerons-copper' 
                          : 'bg-aerons-800/40 hover:bg-aerons-800/70'
                      }`}
                      onClick={() => setActiveInstallation(installation)}
                    >
                      <h4 className="font-medium">{installation.type}</h4>
                    </button>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal delay={5}>
                <div className="mt-8 p-4 bg-aerons-800/40 rounded-lg border border-aerons-700">
                  <h4 className="font-medium text-aerons-copper mb-2">Bulk Orders</h4>
                  <p className="text-sm text-aerons-300">
                    We also handle large-scale installations for government & private institutions, providing comprehensive audio solutions for bulk requirements.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default InstallationsSection;
