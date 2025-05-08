import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import AudioVisualizer from '../AudioVisualizer';
import LocationMap from '../LocationMap';
import { Location } from '../LocationMap';

const ContactSection = () => {
  const locations: Location[] = [
    { 
      name: "Ahmedabad", 
      coordinates: [23.028591, 72.591699],
      address: "OPP. CALICO DOME, RELIEF ROAD,\nNEAR RAILWAY STATION\nAHMEDABAD 380001",
      phone: "+91 79 22146 0",
      email: "info@audiolights.com",
      isHeadquarters: true
    },
    { 
      name: "Bhopal", 
      coordinates: [23.265009, 77.404002],
      address: "62. CHAITANYA MARKET, HAMIDIA ROAD\nOPP. NADIRA BUS STAND\nBHOPAL 462016",
      phone: "+91 755 2741 660",
      email: "bhopal@audiolights.com"
    },
    { 
      name: "Raipur", 
      coordinates: [21.244232, 81.634032],
      address: "SHOP F2/F3, 1ST FLOOR GK TOWER\nNEAR MANJU MAMTA, MG ROAD\nRAIPUR 492001",
      phone: "+91 771 4221 001",
      email: "raipur@audiolights.com"
    }
  ];

  const [activeLocation, setActiveLocation] = useState('Ahmedabad');

  return (
    <section id="contact" className="scroll-section py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Contact <span className="text-amber-500">Us</span>
          </h2>
        </ScrollReveal>
        
        {/* Office Locations */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Offices</h3>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {locations.map((location) => (
                <button
                  key={location.name}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeLocation === location.name 
                      ? 'bg-navy-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-navy-800'
                  }`}
                  onClick={() => setActiveLocation(location.name)}
                >
                  {location.name} {location.isHeadquarters && "(HQ)"}
                </button>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <AudioVisualizer barCount={5} className="mb-4 h-10" />
                  <h4 className="text-xl font-semibold mb-2">
                    {locations.find(loc => loc.name === activeLocation)?.name || "Ahmedabad"}
                    {locations.find(loc => loc.name === activeLocation)?.isHeadquarters && 
                      <span className="ml-2 text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">Headquarters</span>}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={18} />
                      <p className="text-navy-700 whitespace-pre-line">
                        {locations.find(loc => loc.name === activeLocation)?.address || ""}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="text-amber-500 flex-shrink-0" size={18} />
                      <p className="text-navy-700">
                        {locations.find(loc => loc.name === activeLocation)?.phone || ""}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="text-amber-500 flex-shrink-0" size={18} />
                      <p className="text-navy-700">
                        {locations.find(loc => loc.name === activeLocation)?.email || ""}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 h-64 rounded-lg overflow-hidden">
                  <LocationMap 
                    locations={locations} 
                    activeLocation={activeLocation}
                    height="100%"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <ScrollReveal direction="left">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-navy-700 leading-relaxed mb-8">
              Whether you're interested in our audio solutions, looking for a local dealer, or want to discuss a custom installation, we're here to help. Reach out to our headquarters or connect with us on social media.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Headquarters</h4>
                  <p className="text-navy-600 whitespace-pre-line">
                    audio&lights<br />
                    OPP. CALICO DOME, RELIEF ROAD,<br />
                    NEAR RAILWAY STATION<br />
                    AHMEDABAD 380001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-navy-600">+91 79 22146 0</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-navy-600">info@audiolights.com</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="right">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option>Product Inquiry</option>
                  <option>Installation Services</option>
                  <option>Dealer Information</option>
                  <option>Support</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
        
        <ScrollReveal delay={3}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-navy-700 hover:text-amber-500 transition-colors duration-200">
                <Facebook size={28} />
              </a>
              <a href="#" className="text-navy-700 hover:text-amber-500 transition-colors duration-200">
                <Instagram size={28} />
              </a>
              <a href="#" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 6.32A7.85 7.85 0 0 0 12.025 4C7.4 4 3.65 7.75 3.65 12.375c0 1.475.4 2.9 1.125 4.175L3.6 20l3.55-1.125c1.225.65 2.6 1 4 1h.05c4.6 0 8.35-3.75 8.35-8.375 0-2.15-.825-4.15-2.325-5.65zm-5.575 12.9h-.05c-1.25 0-2.475-.325-3.55-.95l-.25-.15-2.6.825.85-2.525-.175-.275a6.96 6.96 0 0 1-1.075-3.7c0-3.825 3.125-6.95 6.975-6.95a6.93 6.93 0 0 1 4.95 2.05 6.94 6.94 0 0 1 2.05 4.95c-.025 3.85-3.15 6.975-7 6.975zm3.825-5.2c-.2-.1-1.2-.6-1.4-.675-.175-.075-.3-.1-.425.1-.125.2-.5.675-.6.8-.1.125-.225.15-.425.05-.7-.35-1.425-.65-2.2-1.15-.8-.7-1.35-1.55-1.5-1.825-.15-.275-.025-.425.125-.575.675-1 .825-1.1.95-1.2.225-.175.075-.475-.025-.7-.1-.2-.55-1.325-.75-1.825-.2-.475-.4-.4-.55-.4-.15 0-.3-.025-.45-.025-.15 0-.4.05-.625.25-.225.2-.85.825-.85 2.025 0 1.2.875 2.375 1 2.525 1.3 2.1 1.675 2.45 2.9 3.3 1.525 1.05 1.525.7 1.8.65.275-.05 1.275-.5 1.45-.975.175-.5.175-.9.125-1-.05-.1-.175-.15-.375-.25z" />
                </svg>
                WhatsApp Catalog
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
