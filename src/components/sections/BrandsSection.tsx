import React, { useRef, useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
const BrandsSection = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const brands = [{
    id: "ahuja",
    name: "Ahuja Radios",
    description: "India's leading PA brand with over 80 years legacy in sound reinforcement.",
    year: "Est. 1940",
    highlight: "Legacy Brand",
    logo: "https://placehold.co/400x200/e2e8f0/1e293b?text=AHUJA",
    detailedDescription: "AHUJA RADIOS is today India's leading manufacturer & exporter of Public Address Equipment. Established in 1940, in last 8 decades we have been able to cement AHUJA as the most trusted brand in sound reinforcement industry by introducing reliable products through continuous research & development. Right since the inception company has aspired and worked diligently towards offering wide range of products to fulfill every conceivable PA application requirement."
  }, {
    id: "studiomaster",
    name: "Studiomaster Professional",
    description: "Premium Pro Audio solutions for DJ, education, religious, and corporate sectors.",
    year: "Est. 1994",
    highlight: "Make in India",
    logo: "https://placehold.co/400x200/e2e8f0/1e293b?text=STUDIOMASTER",
    detailedDescription: "Studiomaster Professional, a brand under Audioplus and part of the Ahuja Radios legacy, is a leading Indian manufacturer of professional audio equipment. Since 1994, we've delivered reliable, high-quality solutions tailored to the Indian market—including mixers, amplifiers, speakers, microphones, DJ gear, and more. With cutting-edge manufacturing near Mumbai, a strong R&D team, and nationwide service support, we're trusted across education, corporate, religious, and entertainment sectors."
  }];
  const otherBrands = ["Behringer", "DJ Tech", "Ciare"];
  const brandsRef = useRef<HTMLDivElement>(null);
  const handleOpenBrandDetails = (id: string) => {
    setSelectedBrand(id);
  };
  const handleCloseBrandDetails = () => {
    setSelectedBrand(null);
  };
  const selectedBrandData = brands.find(brand => brand.id === selectedBrand);
  return <section id="brands" className="scroll-section py-24 bg-white">
      <div className="container mx-auto px-[30px]">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-amber-500">Brands</span>
          </h2>
        </ScrollReveal>
        
        <div ref={brandsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center">
          {brands.map((brand, index) => <ScrollReveal key={brand.name} delay={index % 5 + 1 as 1 | 2 | 3 | 4 | 5}>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer w-full max-w-sm h-full" onClick={() => handleOpenBrandDetails(brand.id)}>
                <div className="p-6 flex flex-col h-full items-center justify-between min-h-[400px]">
                  <div className="flex flex-col items-center text-center space-y-4 flex-grow">
                    <div className="mb-2 overflow-hidden rounded w-full flex justify-center items-center h-20">
                      <img src={brand.logo} alt={`${brand.name} logo`} className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105 max-w-[180px]" />
                    </div>
                    <h3 className="text-xl font-bold text-center">{brand.name}</h3>
                    <span className="text-xs bg-gray-100 text-navy-600 px-3 py-1 rounded-full">
                      {brand.year}
                    </span>
                    <p className="text-navy-600 text-center text-sm leading-relaxed">{brand.description}</p>
                  </div>
                  <div className="flex flex-col items-center gap-3 mt-6">
                    <span className="inline-block text-xs font-medium text-amber-500 border border-amber-500 px-3 py-1 rounded-full">
                      {brand.highlight}
                    </span>
                    <span className="text-sm text-navy-600 hover:text-amber-500 cursor-pointer transition-colors duration-200">Learn more →</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>)}
        </div>
        
  {/* Removed empty ScrollReveal to fix syntax error */}
      </div>

      {/* Brand Detail Dialog */}
      <Dialog open={!!selectedBrand} onOpenChange={handleCloseBrandDetails}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <img src={selectedBrandData?.logo} alt={selectedBrandData?.name} className="h-10 w-auto" />
              {selectedBrandData?.name}
            </DialogTitle>
            <DialogDescription className="text-base text-navy-700 mt-4">
              <span className="inline-block bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm mb-4">{selectedBrandData?.year}</span>
              <p className="mb-4 leading-relaxed">{selectedBrandData?.detailedDescription}</p>
              {selectedBrandData?.id === "ahuja" && <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Products Include:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-navy-600">
                    <li>Public Address Systems</li>
                    <li>Commercial Sound Systems</li>
                    <li>Professional Audio Equipment</li>
                    <li>Mixer Amplifiers & Power Amplifiers</li>
                    <li>Microphones & Conference Systems</li>
                  </ul>
                </div>}
              {selectedBrandData?.id === "studiomaster" && <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-2">Sectors Served:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Education</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Corporate</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Religious</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">DJ & Entertainment</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Broadcasting</span>
                  </div>
                </div>}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>;
};
export default BrandsSection;