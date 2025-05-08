
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

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
  const [selectedLocation, setSelectedLocation] = React.useState<Location | null>(null);
  
  // Find center point for the map based on active location or first location
  const activeLocationData = locations.find(loc => loc.name === activeLocation) || locations[0];
  
  // Google Maps configuration - using a restricted API key
  // This key should be restricted to your domain in the Google Cloud Console
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'
  });

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem'
  };

  const center = {
    lat: activeLocationData.coordinates[0],
    lng: activeLocationData.coordinates[1]
  };
  
  const options = {
    disableDefaultUI: false,
    zoomControl: true,
  };
  
  if (loadError) return <div style={{ height }} className={`bg-red-100 text-red-700 flex items-center justify-center p-4 rounded-lg ${className}`}>Error loading maps</div>;
  if (!isLoaded) return <div style={{ height }} className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>Loading Map...</div>;

  return (
    <div style={{ height }} className={`rounded-lg overflow-hidden ${className}`}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
        options={options}
      >
        {locations.map((location) => (
          <Marker
            key={location.name}
            position={{ lat: location.coordinates[0], lng: location.coordinates[1] }}
            onClick={() => setSelectedLocation(location)}
          />
        ))}
        
        {selectedLocation && (
          <InfoWindow
            position={{ lat: selectedLocation.coordinates[0], lng: selectedLocation.coordinates[1] }}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2">
              <h3 className="font-bold text-gray-800">
                {selectedLocation.name}
                {selectedLocation.isHeadquarters && <span className="ml-2 text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">HQ</span>}
              </h3>
              <p className="text-sm whitespace-pre-line mt-1">{selectedLocation.address}</p>
              <p className="text-sm mt-1">{selectedLocation.phone}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default LocationMap;
