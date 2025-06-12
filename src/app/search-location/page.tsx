import MapShow from '@/components/map.js';

export default function SearchLocationPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Search ubication</h1>
            <p className="text-lg text-gray-700 mb-8">Select an ubication in the map to continue.</p>
            <MapShow />
        </div>
    );
}
