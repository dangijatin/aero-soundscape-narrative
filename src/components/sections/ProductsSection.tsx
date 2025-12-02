import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import { FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [{
    id: "speakers",
    name: "Speakers",
    description: "Active, passive, wall-mount & ceiling types",
    image: "/images/products/speakers.png",
    catalogPath: "/catalogs/speakers.pdf",
    details: "Our comprehensive range of speakers includes active and passive options for various applications, as well as specialized wall-mount and ceiling types for integrated installations. Each speaker is designed with sound quality and reliability as the primary focus.",
    products: ["Column Speakers", "Wall-Mount Speakers", "Ceiling Speakers", "Active PA Speakers", "Line Array Systems", "Subwoofers"]
  }, {
    id: "amplifiers",
    name: "Amplifiers",
    description: "DJ power amps, transformer & direct coupled",
    image: "/images/products/amplifiers.png",
    catalogPath: "/catalogs/amplifiers.pdf",
    details: "Our amplifier range includes DJ power amplifiers for high-energy environments, as well as transformer-coupled and direct-coupled options for different applications. Each amplifier is engineered for reliability and clean sound reproduction.",
    products: ["Power Amplifiers", "Mixer-Amplifiers", "Multi-Channel Amplifiers", "Installation Amplifiers", "100V Line Amplifiers"]
  }, {
    id: "microphones",
    name: "Microphones",
    description: "Wired and wireless options for every application",
    image: "/images/products/microphones.png",
    catalogPath: "/catalogs/microphones.pdf",
    details: "Our microphone collection features both wired and wireless options suitable for every application from stage performance to conference rooms. We offer handheld, lapel, headset, and boundary microphones with various pickup patterns.",
    products: ["Dynamic Microphones", "Condenser Microphones", "Wireless Microphone Systems", "Conference Microphones", "Boundary Microphones", "Headset & Lapel Microphones"]
  }, {
    id: "mixers",
    name: "Mixers",
    description: "Digital and analog mixing solutions",
    image: "/images/products/mixers.png",
    catalogPath: "/catalogs/mixers.pdf",
    details: "Our selection of audio mixers includes both digital and analog options from compact portable units to comprehensive studio and live performance consoles. Each mixer is designed with intuitive controls and pristine sound quality.",
    products: ["Analog Mixing Consoles", "Digital Mixing Consoles", "Powered Mixers", "Rack-mount Mixers", "Zone Mixers", "DJ Mixers"]
  }, {
    id: "processors",
    name: "Processors",
    description: "Advanced audio processing equipment",
    image: "/images/products/processors.png",
    catalogPath: "/catalogs/processors.pdf",
    details: "Our audio processors provide advanced signal manipulation for optimal sound in any environment. From simple equalizers to complex digital signal processors, we offer solutions that enhance audio quality and system management.",
    products: ["Digital Signal Processors", "Equalizers", "Compressors/Limiters", "Crossovers", "Feedback Suppressors", "Multi-effects Processors"]
  }, {
    id: "transducers",
    name: "Transducers",
    description: "High-quality audio conversion devices",
    image: "/images/products/transducers.png",
    catalogPath: "/catalogs/transducers.pdf",
    details: "Our transducer collection features high-quality audio conversion devices that translate electrical signals into sound waves with precision and fidelity. These components are at the heart of quality sound reproduction systems.",
    products: ["Drivers", "Horns", "Compression Drivers", "Woofers", "Tweeters", "Full-Range Drivers"]
  }];
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
  return <section id="products" className="scroll-section py-24 bg-white">
    <div className="container mx-0 px-[60px]">
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
        {categories.map((category, index) => <ScrollReveal key={category.name} delay={index % 5 + 1 as 1 | 2 | 3 | 4 | 5}>
          <div className="h-64 relative group cursor-pointer rounded-lg overflow-hidden" onClick={() => handleCategoryClick(category.id)}>
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">{category.name}</h3>
              <p className="text-gray-100 text-sm">{category.description}</p>
            </div>
            <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="text-white hover:text-amber-300 transition-colors text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </ScrollReveal>)}
      </div>

      {/* Catalogue Downloads */}
      <ScrollReveal delay={5}>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-navy-800 mb-8">Download Product Catalogues</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => handleCatalogClick("/catalogs/ahuja-catalog.pdf")}
              className="btn-primary inline-flex items-center gap-2"
            >
              <FileText size={18} />
              Ahuja Catalogue
            </button>
            <button
              onClick={() => handleCatalogClick("/catalogs/studiomaster-catalog.pdf")}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FileText size={18} />
              Studio Master Catalogue
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Physical Catalogue Request Form */}
      <ScrollReveal delay={5}>
        <div className="mt-16 bg-navy-50 rounded-lg p-8 max-w-2xl mx-auto">
          <h4 className="text-xl font-bold text-navy-800 mb-4 text-center">Request Physical Catalogues</h4>
          <p className="text-navy-600 mb-6 text-center">Get printed catalogues delivered to your location</p>

          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name') as string;
            const email = formData.get('email') as string;
            const phone = formData.get('phone') as string;
            const address = formData.get('address') as string;
            const ahuja = formData.get('ahuja') === 'on';
            const studiomaster = formData.get('studiomaster') === 'on';

            if (!name || !email || !phone || !address || (!ahuja && !studiomaster)) {
              alert('Please fill all fields and select at least one catalogue');
              return;
            }

            const catalogues = [];
            if (ahuja) catalogues.push('Ahuja Catalogue');
            if (studiomaster) catalogues.push('Studio Master Catalogue');

            const message = `Catalogue Request:%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0AAddress: ${encodeURIComponent(address)}%0A%0ACatalogues Requested:%0A${catalogues.map(c => `- ${c}`).join('%0A')}`;

            window.open(`https://wa.me/919820048549?text=${message}`, '_blank');
            e.currentTarget.reset();
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1">Complete Address</label>
              <textarea
                rows={3}
                name="address"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter your complete mailing address"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 mb-2">Select Catalogues</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" name="ahuja" className="mr-2 text-amber-500 focus:ring-amber-500" />
                  <span className="text-navy-700">Ahuja Catalogue</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="studiomaster" className="mr-2 text-amber-500 focus:ring-amber-500" />
                  <span className="text-navy-700">Studio Master Catalogue</span>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Request Physical Catalogues
              </button>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>

    {/* Product Category Detail Dialog */}
    <Dialog open={!!selectedCategory} onOpenChange={handleCloseDetails}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold">{selectedCategoryData?.name}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(80vh-100px)] px-6">
          <div className="pb-6">
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <img src={selectedCategoryData?.image} alt={selectedCategoryData?.name} loading="lazy" className="w-full h-full object-cover" />
            </div>

            <p className="text-navy-700 mb-6">{selectedCategoryData?.details}</p>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Products in this Category:</h4>
              <div className="grid grid-cols-1 gap-2">
                {selectedCategoryData?.products.map(product => <div key={product} className="flex items-center gap-2 p-2 bg-navy-50 rounded">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span className="text-sm">{product}</span>
                </div>)}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-navy-500 text-center">For detailed specifications and pricing, please contact us</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  </section>;
};
export default ProductsSection;