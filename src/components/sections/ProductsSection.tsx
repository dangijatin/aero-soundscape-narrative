
import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import { FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "speakers",
      name: "Speakers",
      description: "Active, passive, wall-mount & ceiling types",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2070",
      catalogPath: "/catalogs/speakers.pdf",
      details: "Our comprehensive range of speakers includes active and passive options for various applications, as well as specialized wall-mount and ceiling types for integrated installations. Each speaker is designed with sound quality and reliability as the primary focus.",
      products: [
        "Column Speakers",
        "Wall-Mount Speakers",
        "Ceiling Speakers",
        "Active PA Speakers",
        "Line Array Systems",
        "Subwoofers"
      ]
    },
    {
      id: "amplifiers",
      name: "Amplifiers",
      description: "DJ power amps, transformer & direct coupled",
      image: "https://images.unsplash.com/photo-1558662413-6ccc0eae3ad2?q=80&w=2069",
      catalogPath: "/catalogs/amplifiers.pdf",
      details: "Our amplifier range includes DJ power amplifiers for high-energy environments, as well as transformer-coupled and direct-coupled options for different applications. Each amplifier is engineered for reliability and clean sound reproduction.",
      products: [
        "Power Amplifiers",
        "Mixer-Amplifiers",
        "Multi-Channel Amplifiers",
        "Installation Amplifiers",
        "100V Line Amplifiers"
      ]
    },
    {
      id: "microphones",
      name: "Microphones",
      description: "Wired and wireless options for every application",
      image: "https://images.unsplash.com/photo-1617161712664-864a40fbcf9d?q=80&w=2068",
      catalogPath: "/catalogs/microphones.pdf",
      details: "Our microphone collection features both wired and wireless options suitable for every application from stage performance to conference rooms. We offer handheld, lapel, headset, and boundary microphones with various pickup patterns.",
      products: [
        "Dynamic Microphones",
        "Condenser Microphones",
        "Wireless Microphone Systems",
        "Conference Microphones",
        "Boundary Microphones",
        "Headset & Lapel Microphones"
      ]
    },
    {
      id: "mixers",
      name: "Mixers",
      description: "Digital and analog mixing solutions",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070",
      catalogPath: "/catalogs/mixers.pdf",
      details: "Our selection of audio mixers includes both digital and analog options from compact portable units to comprehensive studio and live performance consoles. Each mixer is designed with intuitive controls and pristine sound quality.",
      products: [
        "Analog Mixing Consoles",
        "Digital Mixing Consoles",
        "Powered Mixers",
        "Rack-mount Mixers",
        "Zone Mixers",
        "DJ Mixers"
      ]
    },
    {
      id: "processors",
      name: "Processors",
      description: "Advanced audio processing equipment",
      image: "https://images.unsplash.com/photo-1601142634808-38923eb7615f?q=80&w=2070",
      catalogPath: "/catalogs/processors.pdf",
      details: "Our audio processors provide advanced signal manipulation for optimal sound in any environment. From simple equalizers to complex digital signal processors, we offer solutions that enhance audio quality and system management.",
      products: [
        "Digital Signal Processors",
        "Equalizers",
        "Compressors/Limiters",
        "Crossovers",
        "Feedback Suppressors",
        "Multi-effects Processors"
      ]
    },
    {
      id: "transducers",
      name: "Transducers",
      description: "High-quality audio conversion devices",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2069",
      catalogPath: "/catalogs/transducers.pdf",
      details: "Our transducer collection features high-quality audio conversion devices that translate electrical signals into sound waves with precision and fidelity. These components are at the heart of quality sound reproduction systems.",
      products: [
        "Drivers",
        "Horns",
        "Compression Drivers",
        "Woofers",
        "Tweeters",
        "Full-Range Drivers"
      ]
    }
  ];

  const handleCatalogClick = (catalogPath: string) => {
    // In production, this would download or open the actual PDF
    console.log("Opening catalog:", catalogPath);
    alert(`In a production environment, this would download the catalog from ${catalogPath}`);
    // window.open(catalogPath, '_blank');
  };

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
  };

  const handleCloseDetails = () => {
    setSelectedCategory(null);
  };

  const selectedCategoryData = categories.find(category => category.id === selectedCategory);

  return (
    <section id="products" className="scroll-section py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-amber-500">Products</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={2} direction="bottom">
          <p className="text-center text-navy-700 max-w-3xl mx-auto mb-16 text-lg">
            We offer a comprehensive ecosystem of professional audio equipment across multiple categories. Our product range features industry-leading brands and innovative solutions for every audio requirement.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <ScrollReveal key={category.name} delay={(index % 5) + 1 as 1 | 2 | 3 | 4 | 5}>
              <div className="category-card h-64 relative group cursor-pointer" onClick={() => handleCategoryClick(category.id)}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent rounded-lg"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-gray-100 text-sm">{category.description}</p>
                </div>
                <div className="category-overlay">
                  <div className="space-y-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCatalogClick(category.catalogPath);
                      }}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FileText size={18} />
                      View Catalogue
                    </button>
                    <button 
                      className="text-white hover:text-amber-300 transition-colors text-sm"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={5}>
          <div className="mt-16 text-center">
            <button 
              onClick={() => handleCatalogClick("/catalogs/complete-catalog.pdf")}
              className="btn-primary inline-flex items-center gap-2"
            >
              <FileText size={18} />
              Download Complete Catalogue
            </button>
            <p className="mt-4 text-sm text-navy-500">Available in PDF format (12MB)</p>
            
            <div className="mt-8 bg-navy-50 rounded-lg p-6 max-w-xl mx-auto">
              <h4 className="text-lg font-medium mb-3 text-navy-800">Request Physical Catalogue</h4>
              <p className="text-sm text-navy-600 mb-4">Prefer a printed catalogue? Complete the form in our contact section and select "Product Catalogue Request" as the subject.</p>
              <a href="#contact" className="text-amber-500 hover:text-amber-600 inline-flex items-center gap-1 text-sm">
                Go to Contact Form <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Product Category Detail Dialog */}
      <Dialog open={!!selectedCategory} onOpenChange={handleCloseDetails}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedCategoryData?.name}</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <img 
                src={selectedCategoryData?.image} 
                alt={selectedCategoryData?.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-navy-700 mb-6">{selectedCategoryData?.details}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Products in this Category:</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedCategoryData?.products.map(product => (
                  <div key={product} className="flex items-center gap-2 p-2 bg-navy-50 rounded">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span className="text-sm">{product}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <p className="text-sm text-navy-500">For detailed specifications and pricing</p>
              <button 
                onClick={() => selectedCategoryData && handleCatalogClick(selectedCategoryData.catalogPath)}
                className="btn-primary inline-flex items-center gap-2"
              >
                <FileText size={16} />
                Download Catalogue
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
