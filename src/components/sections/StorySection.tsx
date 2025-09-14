
import React from 'react';
import { motion } from 'framer-motion';

const TimelineEvent = ({ event, index, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="relative pb-12 last:pb-0"
    >
      {/* Timeline line */}
      {index !== total - 1 && (
        <div className="absolute left-8 top-8 bottom-0 w-px bg-gradient-to-b from-audiolights-copper/50 to-audiolights-200/30" />
      )}
      
      {/* Event content */}
      <div className="relative flex items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-audiolights-copper/20">
          <span className="font-bold text-audiolights-copper">{event.year}</span>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 tracking-tight">{event.title}</h4>
          <p className="text-audiolights-600/90 leading-relaxed">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const StorySection = () => {
  const timelineEvents = [
    {
      year: "1962",
      title: "Our Beginning",
      description: "Audio&Lights was established as a manufacturer of audio components."
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
    <section id="story" className="scroll-section py-32 bg-gradient-to-b from-white to-audiolights-50/50 relative overflow-hidden">
      {/* Background Elements */}
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
          className="absolute -left-1/3 bottom-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-audiolights-200/5 to-transparent rounded-full blur-3xl"
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
            Our <span className="text-audiolights-copper">Story</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-audiolights-copper to-audiolights-copper/50 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">A Legacy of Excellence</h3>
            <div className="space-y-6 text-audiolights-700/90 text-lg">
              <p className="leading-relaxed">
                Our family has been associated with the electronics and professional audio business for over 60 years. What began as a venture in home appliances and general electronics gradually evolved into a specialized focus on professional audio.
              </p>
              <p className="leading-relaxed">
                With a keen passion for sound, Mr. Tarun Moolchandani the founder of Audio and Lights pioneered our journey into the professional audio and PA systems segment. What started with a retail outlet in Bhopal soon expanded into distribution across Madhya Pradesh. Building on this success, we extended our network into Chhattisgarh, followed by an office in Nagpur to serve the Vidarbh region. Later, we consolidated operations and established a base in Ahmedabad to cater to the Gujarat market.
              </p>
              <p className="leading-relaxed">
                Over the years, we have proudly represented and worked with leading professional audio brands such as Ahuja and Studiomaster. Today, we collaborate with more than 90 dealers across Western and Central India, making us the largest professional audio company in Central India.
              </p>
              <p className="leading-relaxed">
                Our growth has been guided by trust, long-term relationships, and an unwavering commitment to quality sound solutions.
              </p>  
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-audiolights-200/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-12 tracking-tight">Our Timeline</h3>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <TimelineEvent 
                  key={event.year} 
                  event={event}
                  index={index}
                  total={timelineEvents.length}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
