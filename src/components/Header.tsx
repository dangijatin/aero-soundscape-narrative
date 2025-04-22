
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-aerons-900">
          AERONS INDIA
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {links.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className="text-aerons-700 hover:text-aerons-copper transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-aerons-900"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-2xl font-bold text-aerons-900">AERONS INDIA</span>
            <button 
              className="text-aerons-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-4">
            {links.map(link => (
              <a 
                key={link.name}
                href={link.href}
                className="text-aerons-700 hover:text-aerons-copper py-2 border-b border-aerons-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
