
import React from 'react';
import ScrollReveal from '../ScrollReveal';
import { FileText } from 'lucide-react';

const ProductsSection = () => {
  const categories = [
    {
      name: "Speakers",
      description: "Active, passive, wall-mount & ceiling types",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070"
    },
    {
      name: "Amplifiers",
      description: "DJ power amps, transformer & direct coupled",
      image: "https://images.unsplash.com/photo-1558662413-6ccc0eae3ad2?q=80&w=2069"
    },
    {
      name: "Microphones",
      description: "Wired and wireless options for every application",
      image: "https://images.unsplash.com/photo-1617161712664-864a40fbcf9d?q=80&w=2068"
    },
    {
      name: "Mixers",
      description: "Digital and analog mixing solutions",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070"
    },
    {
      name: "Processors",
      description: "Advanced audio processing equipment",
      image: "https://images.unsplash.com/photo-1601142634808-38923eb7615f?q=80&w=2070"
    },
    {
      name: "Transducers",
      description: "High-quality audio conversion devices",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2069"
    }
  ];

  return (
    <section id="products" className="scroll-section py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-aerons-copper">Products</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={2} direction="bottom">
          <p className="text-center text-aerons-700 max-w-3xl mx-auto mb-16 text-lg">
            We offer a comprehensive ecosystem of professional audio equipment across multiple categories. Our product range features industry-leading brands and innovative solutions for every audio requirement.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <ScrollReveal key={category.name} delay={(index % 5) + 1 as 1 | 2 | 3 | 4 | 5}>
              <div className="category-card h-64">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aerons-900/80 to-transparent rounded-lg"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-aerons-100 text-sm">{category.description}</p>
                </div>
                <div className="category-overlay">
                  <a 
                    href="#" 
                    className="btn-secondary flex items-center gap-2"
                  >
                    <FileText size={18} />
                    View Catalogue
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={5}>
          <div className="mt-16 text-center">
            <a href="#" className="btn-primary inline-flex items-center gap-2">
              <FileText size={18} />
              Download Complete Catalogue
            </a>
            <p className="mt-4 text-sm text-aerons-500">Available in PDF format (12MB)</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductsSection;
