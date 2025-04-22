
import React from 'react';
import ScrollReveal from '../ScrollReveal';

const StorySection = () => {
  const timelineEvents = [
    {
      year: "1962",
      title: "Our Beginning",
      description: "Aerons India was established as a manufacturer of audio components."
    },
    {
      year: "2000",
      title: "Evolution into Export House",
      description: "Transitioned from manufacturing to become a prominent trading and distribution company."
    },
    {
      year: "2010s",
      title: "Growth & Expansion",
      description: "Expanded our brand portfolio and dealer network across India."
    },
    {
      year: "2022",
      title: "Audiocenter Partnership",
      description: "Became exclusive national distributors for Audiocenter products in India."
    },
    {
      year: "Today",
      title: "Industry Leader",
      description: "Largest professional audio organization in Central India with a comprehensive solution portfolio."
    }
  ];

  return (
    <section id="story" className="scroll-section py-24 bg-aerons-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-aerons-copper">Story</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-bold mb-6">A Legacy of Excellence</h3>
              <p className="text-aerons-700 leading-relaxed mb-6">
                Since 1962, Aerons India Exim Pvt. Ltd. has been at the forefront of India's professional audio industry. What began as a manufacturing venture has transformed into a comprehensive trading, export, import, and distribution powerhouse.
              </p>
              <p className="text-aerons-700 leading-relaxed mb-6">
                Our journey has been driven by a relentless pursuit of excellence and a deep understanding of sound engineering. Today, we stand as a trusted name across India, known for our expertise, reliability, and the quality of our solutions.
              </p>
              <p className="text-aerons-700 leading-relaxed">
                We take pride in our ability to evolve with changing technologies while maintaining the core values that have defined us for decades. Our transformation over the years reflects our adaptability and commitment to meeting the diverse needs of professionals in the audio industry.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="pl-4 md:pl-12 border-l border-aerons-200">
              <h3 className="text-2xl font-bold mb-8">Our Timeline</h3>
              
              <div className="space-y-0">
                {timelineEvents.map((event, index) => (
                  <ScrollReveal 
                    key={event.year} 
                    delay={(index % 5) + 1 as 1 | 2 | 3 | 4 | 5}
                    threshold={0.2}
                  >
                    <div className="timeline-item">
                      <span className="font-bold text-aerons-copper">{event.year}</span>
                      <h4 className="text-lg font-semibold mt-1 mb-2">{event.title}</h4>
                      <p className="text-aerons-600">{event.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
