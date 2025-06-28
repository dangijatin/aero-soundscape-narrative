import React, { useState } from 'react';
import { motion } from 'framer-motion';
const NetworkSection = () => {
  const locations = [{
    name: "Ahmedabad",
    coordinates: [23.028591, 72.591699] as [number, number],
    address: "OPP. CALICO DOME, RELIEF ROAD,\nNEAR RAILWAY STATION\nAHMEDABAD 380001",
    phone: "+91 79 22146 0",
    email: "info@audiolights.com",
    isHeadquarters: true,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop"
  }, {
    name: "Bhopal",
    coordinates: [23.265009, 77.404002] as [number, number],
    address: "62. CHAITANYA MARKET, HAMIDIA ROAD\nOPP. NADIRA BUS STAND\nBHOPAL 462016",
    phone: "+91 755 2741 660",
    email: "bhopal@audiolights.com",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1000&auto=format&fit=crop"
  }, {
    name: "Raipur",
    coordinates: [21.244232, 81.634032] as [number, number],
    address: "SHOP F2/F3, 1ST FLOOR GK TOWER\nNEAR MANJU MAMTA, MG ROAD\nRAIPUR 492001",
    phone: "+91 771 4221 001",
    email: "raipur@audiolights.com",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1000&auto=format&fit=crop"
  }];
  const [activeLocation, setActiveLocation] = useState<string>("Ahmedabad");
  const activeLocationData = locations.find(loc => loc.name === activeLocation) || locations[0];
  return <section id="network" className="scroll-section py-32 bg-gradient-to-b from-audiolights-900 to-audiolights-950 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 1.5
      }} className="absolute -right-1/3 top-1/4 w-2/3 h-2/3 bg-gradient-to-br from-audiolights-copper/5 to-transparent rounded-full blur-3xl" />
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 1.5,
        delay: 0.2
      }} className="absolute -left-1/3 bottom-1/4 w-2/3 h-2/3 bg-gradient-to-tr from-audiolights-800/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 py-[60px] px-[59px]">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Our <span className="text-audiolights-copper">Network</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-audiolights-copper to-audiolights-copper/50 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-24 max-w-7xl mx-auto items-center px-[30px]">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="bg-audiolights-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-audiolights-700/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Pan-India Reach</h3>
              <div className="space-y-6 text-audiolights-200/90">
                <p className="leading-relaxed text-lg">
                  With our headquarters in Ahmedabad, we extend our services across India through an extensive dealer and service network. Our presence spans multiple states, ensuring that quality audio solutions are accessible throughout the country.
                </p>
                <p className="leading-relaxed text-lg">
                  Our dealer network is strategically positioned to provide prompt service and support, bringing our expertise and products closer to our customers regardless of their location.
                </p>
              </div>
              
              <div className="mt-12 space-y-6">
                <h4 className="text-xl font-medium text-white/90">Our Offices:</h4>
                <div className="flex flex-wrap gap-3">
                  {locations.map(location => <motion.button key={location.name} whileHover={{
                  y: -2
                }} className={`px-6 py-3 rounded-full text-sm transition-all duration-200 ${activeLocation === location.name ? 'bg-gradient-to-r from-audiolights-copper to-audiolights-copper/80 text-white shadow-lg' : 'bg-audiolights-800/50 text-audiolights-200 hover:bg-audiolights-700/50 hover:text-white'}`} onClick={() => setActiveLocation(location.name)}>
                      {location.name} {location.isHeadquarters && "(HQ)"}
                    </motion.button>)}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="h-auto">
            <div className="bg-audiolights-800/30 backdrop-blur-sm p-4 rounded-2xl border border-audiolights-700/30 h-auto mx-0 py-[15px]">
              <div className="h-[500px] rounded-lg overflow-hidden relative">
                <motion.img key={activeLocation} initial={{
                opacity: 0,
                scale: 1.1
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5
              }} src={activeLocationData.image} alt={`${activeLocationData.name} Office`} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">
                    {activeLocationData.name}
                    {activeLocationData.isHeadquarters && <span className="ml-2 text-xs bg-audiolights-copper px-2 py-1 rounded-full">HQ</span>}
                  </h4>
                  <p className="text-sm opacity-90 whitespace-pre-line mb-2">
                    {activeLocationData.address}
                  </p>
                  <div className="flex flex-col gap-1 text-sm opacity-90">
                    <p>{activeLocationData.phone}</p>
                    <p>{activeLocationData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default NetworkSection;