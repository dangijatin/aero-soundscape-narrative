import React from 'react';
import { MapPin } from 'lucide-react';

export interface Location {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  address: string;
  phone: string;
  email: string;
  isHeadquarters?: boolean;
}

interface LocationMapProps {
  locations: Location[];
  activeLocation?: string;
  height?: string;
  className?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ 
  locations, 
  activeLocation, 
  height = "400px",
  className = ""
}) => {
  // Find center point for the map based on active location or first location
  const activeLocationData = locations.find(loc => loc.name === activeLocation) || locations[0];
  
  // Generate OpenStreetMap embed URL
  const lat = activeLocationData.coordinates[0];
  const lng = activeLocationData.coordinates[1];
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div style={{ height }} className={`rounded-lg overflow-hidden ${className} relative`}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        src={mapUrl}
        title={`Map showing ${activeLocationData.name} location`}
      />
      <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="text-amber-500" size={16} />
          <span className="font-medium text-navy-800">{activeLocationData.name}</span>
          {activeLocationData.isHeadquarters && (
            <span className="text-xs bg-amber-500 text-white px-1.5 py-0.5 rounded">HQ</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
