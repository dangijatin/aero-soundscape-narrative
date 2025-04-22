
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-aerons-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AERONS INDIA</h3>
            <p className="text-aerons-300 mb-4 max-w-md">
              Your trusted partner for professional audio solutions across India since 1962. Providing sales, design, and service of comprehensive audio systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#expertise" className="text-aerons-300 hover:text-aerons-copper transition-colors duration-200">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#brands" className="text-aerons-300 hover:text-aerons-copper transition-colors duration-200">
                  Our Brands
                </a>
              </li>
              <li>
                <a href="#products" className="text-aerons-300 hover:text-aerons-copper transition-colors duration-200">
                  Products
                </a>
              </li>
              <li>
                <a href="#installations" className="text-aerons-300 hover:text-aerons-copper transition-colors duration-200">
                  Installations
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-aerons-300">
                Aerons India Exim Pvt. Ltd.<br />
                New Delhi, India
              </li>
              <li className="text-aerons-300">
                Phone: +91 1234567890
              </li>
              <li className="text-aerons-300">
                Email: info@aeronsindia.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-aerons-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-aerons-400 text-sm">
            &copy; {currentYear} Aerons India Exim Pvt. Ltd. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-aerons-400 hover:text-aerons-copper text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-aerons-600 mx-2">|</span>
            <a href="#" className="text-aerons-400 hover:text-aerons-copper text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
