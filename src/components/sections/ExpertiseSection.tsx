import React from 'react';
import ScrollReveal from '../ScrollReveal';
import ParallaxSection from '../ParallaxSection';
import conferenceRoom from '../assets/conference-room.png';
const ExpertiseSection = () => {
  const areas = [{
    title: "Installation Audio",
    description: "Complete sound system design and setup for venues of all sizes.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070"
  }, {
    title: "DJ Systems",
    description: "Professional-grade equipment for performers and entertainment venues.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070"
  }, {
    title: "Premium Karaoke Systems",
    description: "High-fidelity sound systems specifically designed for karaoke environments.",
    image: "https://images.unsplash.com/photo-1608454367599-acdaa6ef17aa?q=80&w=2074"
  }, {
    title: "Public Address Systems",
    description: "Reliable announcement systems for institutions, hospitals, and transport hubs.",
    image: conferenceRoom
  }];
  return <ParallaxSection id="expertise" className="scroll-section py-24 bg-audiolights-900 text-white" backgroundImage="https://images.unsplash.com/photo-1505489304219-85ce67a3d00e?q=80&w=2071">
      <div className="container relative z-10 py-0 mx-0 px-[80px]">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-audiolights-copper">Expertise</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {areas.map((area, index) => <ScrollReveal key={area.title} delay={index % 4 + 2 as 2 | 3 | 4 | 5}>
              <div className="relative group overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img src={area.image} alt={area.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <p className="text-audiolights-100">{area.description}</p>
                </div>
              </div>
            </ScrollReveal>)}
        </div>
        
        <ScrollReveal delay={5}>
          <div className="text-center mt-16">
            <p className="text-lg text-audiolights-200 inline-block border-b-2 border-audiolights-copper pb-1">
              And much more...
            </p>
          </div>
        </ScrollReveal>
      </div>
    </ParallaxSection>;
};
export default ExpertiseSection;