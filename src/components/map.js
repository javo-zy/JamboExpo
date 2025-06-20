'use client';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

export default function MapShow() {
    useEffect(() => {
        import('leaflet').then(L => {
            if (!document.getElementById('map')) {
                console.error('Map container not found');
                return;
            }

            // Remove any existing map instance if any (to prevent duplicates)
            if (L.DomUtil.get('map') != null) {
                L.DomUtil.get('map')._leaflet_id = null;
            }

            const map = L.map('map').setView([13.6929, -89.2182], 10);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map);

            //L.marker([13.6929, -89.2182])
                //.addTo(map)
                //.bindPopup('San Salvador')
                //.openPopup();
        });
    }, []);

    return (
        <div
            id="map"
            style={{ height: '60vh', width: '100%', maxWidth: '800px' }}
            className="rounded-lg shadow-md"
        />
    );
}
