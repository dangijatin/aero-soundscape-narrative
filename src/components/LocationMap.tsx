
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin } from 'lucide-react';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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
  const center = activeLocationData.coordinates;

  return (
    <div style={{ height }} className={`rounded-lg overflow-hidden ${className}`}>
      <MapContainer 
        center={center} 
        zoom={13} 
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker 
            key={location.name} 
            position={location.coordinates} 
            icon={customIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-navy-800">
                  {location.name}
                  {location.isHeadquarters && <span className="ml-2 text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">HQ</span>}
                </h3>
                <p className="text-sm whitespace-pre-line mt-1">{location.address}</p>
                <p className="text-sm mt-1">{location.phone}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationMap;
