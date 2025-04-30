import React from 'react';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

// San Francisco coordinates
const center = {
  lat: 37.7749,
  lng: -122.4194,
};

// Libraries to load
const libraries: ["places"] = ["places"];

const GoogleMapComponent: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY', // Replace with actual API key in production
    libraries,
  });

  if (loadError) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg border border-gray-300">
        <p className="text-red-500">Error loading maps</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg border border-gray-300">
        <div className="animate-pulse">
          <p className="text-gray-500">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
      options={{
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: true,
        mapTypeControl: true,
        fullscreenControl: false,
      }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};

// Fallback component when API key is not configured
const MapFallback: React.FC = () => (
  <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg border border-gray-300 p-4">
    <div className="text-center">
      <p className="text-gray-700 mb-2">Map preview unavailable</p>
      <p className="text-sm text-gray-500">
        API key required for Google Maps integration
      </p>
      <div className="mt-4">
        <a 
          href="https://developers.google.com/maps/documentation/javascript/get-api-key"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          Get Google Maps API Key
        </a>
      </div>
    </div>
  </div>
);

// Use this component in production
const GoogleMapWrapper: React.FC = () => {
  // Check if we have an API key
  const hasApiKey = false; // Set to true when you add your API key
  
  return hasApiKey ? <GoogleMapComponent /> : <MapFallback />;
};

export default GoogleMapWrapper;