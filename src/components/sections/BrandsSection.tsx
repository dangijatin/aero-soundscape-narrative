
import React, { useRef } from 'react';
import ScrollReveal from '../ScrollReveal';

const BrandsSection = () => {
  const brands = [
    {
      name: "Aerons",
      description: "Our own legacy brand offering reliable professional audio solutions.",
      year: "Since 1962",
      highlight: "Own Brand",
      logo: "https://placehold.co/400x200/e2e8f0/1e293b?text=AERONS"
    },
    {
      name: "Ahuja Radios",
      description: "India's leading PA brand with over 80 years legacy in sound reinforcement.",
      year: "Est. 1940",
      highlight: "Legacy Brand",
      logo: "https://placehold.co/400x200/e2e8f0/1e293b?text=AHUJA"
    },
    {
      name: "Studiomaster Professional",
      description: "Premium Pro Audio solutions for DJ, education, religious, and corporate sectors.",
      year: "Est. 1994",
      highlight: "Make in India",
      logo: "https://placehold.co/400x200/e2e8f0/1e293b?text=STUDIOMASTER"
    },
    {
      name: "Audiocenter",
      description: "Full portfolio distribution as exclusive national partner.",
      year: "Partnership Est. 2022",
      highlight: "Exclusive Distribution",
      logo: "https://placehold.co/400x200/e2e8f0/1e293b?text=AUDIOCENTER"
    },
    {
      name: "FaitalPRO",
      description: "Italian high-quality loudspeakers and drivers.",
      year: "Exclusive Distribution",
      highlight: "Italian Quality",
      logo: "https://placehold.co/400x200/e2e8f0/1e293b?text=FAITALPRO"
    },
    {
      name: "Fidek",
      description: "Specialized audio solutions for various applications.",
      year: "Distributed Brand",
      highlight: "Specialized Solutions",
      logo: "https://placehold.co/400x200/e2e8f0/1e293b?text=FIDEK"
    }
  ];

  const otherBrands = ["Behringer", "DJ Tech", "Ciare"];
  const brandsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="brands" className="scroll-section py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-aerons-copper">Brands</span>
          </h2>
        </ScrollReveal>
        
        <div ref={brandsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <ScrollReveal key={brand.name} delay={(index % 5) + 1 as 1 | 2 | 3 | 4 | 5}>
              <div className="bg-white border border-aerons-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4 overflow-hidden rounded">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="w-full h-20 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{brand.name}</h3>
                    <span className="text-xs bg-aerons-100 text-aerons-600 px-2 py-1 rounded">
                      {brand.year}
                    </span>
                  </div>
                  <p className="text-aerons-600 mb-4 flex-grow">{brand.description}</p>
                  <div className="mt-auto">
                    <span className="inline-block text-xs font-medium text-aerons-copper border border-aerons-copper px-2 py-1 rounded">
                      {brand.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={3}>
          <div className="mt-16 text-center">
            <h4 className="text-lg font-medium mb-4">Other Sourced/Partnered Brands</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {otherBrands.map(brand => (
                <span 
                  key={brand}
                  className="bg-aerons-100 text-aerons-700 px-4 py-2 rounded-full"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandsSection;
