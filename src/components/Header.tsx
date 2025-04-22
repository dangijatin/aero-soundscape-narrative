import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Brands', href: '#brands' },
    { name: 'Story', href: '#story' },
    { name: 'Products', href: '#products' },
    { name: 'Installations', href: '#installations' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          AERONS INDIA
        </motion.a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            <motion.a 
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-aerons-copper transition-colors duration-200 text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        
        <motion.button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Menu size={24} />
        </motion.button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <span className="text-2xl font-bold text-white">AERONS INDIA</span>
            <button 
              className="text-white/70 hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-aerons-copper py-2 border-b border-white/10 text-lg"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
