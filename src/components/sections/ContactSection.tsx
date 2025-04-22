
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-section py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Contact <span className="text-aerons-copper">Us</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-aerons-700 leading-relaxed mb-8">
                Whether you're interested in our audio solutions, looking for a local dealer, or want to discuss a custom installation, we're here to help. Reach out to our headquarters or connect with us on social media.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-aerons-copper flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Headquarters</h4>
                    <p className="text-aerons-600">
                      Aerons India Exim Pvt. Ltd.<br />
                      New Delhi, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-aerons-copper flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-aerons-600">+91 1234567890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-aerons-copper flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-aerons-600">info@aeronsindia.com</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="bg-aerons-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-aerons-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-aerons-300 rounded-md focus:outline-none focus:ring-1 focus:ring-aerons-copper"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-aerons-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-aerons-300 rounded-md focus:outline-none focus:ring-1 focus:ring-aerons-copper"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-aerons-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-aerons-300 rounded-md focus:outline-none focus:ring-1 focus:ring-aerons-copper"
                  >
                    <option>Product Inquiry</option>
                    <option>Installation Services</option>
                    <option>Dealer Information</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-aerons-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-aerons-300 rounded-md focus:outline-none focus:ring-1 focus:ring-aerons-copper"
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
              <a href="#" className="text-aerons-700 hover:text-aerons-copper transition-colors duration-200">
                <Facebook size={28} />
              </a>
              <a href="#" className="text-aerons-700 hover:text-aerons-copper transition-colors duration-200">
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
