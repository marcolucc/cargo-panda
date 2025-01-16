import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    console.log('Initializing map');

    // Initialize map
    mapRef.current = L.map(mapContainerRef.current).setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    // Add a sample marker
    L.marker([51.5, -0.09])
      .addTo(mapRef.current)
      .bindPopup('A sample vehicle location')
      .openPopup();

    // Cleanup
    return () => {
      console.log('Cleaning up map');
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="h-full w-full rounded-lg" />
  );
};

export default Map;