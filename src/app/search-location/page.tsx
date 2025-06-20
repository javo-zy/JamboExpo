import MapShow from '@/components/map.js';

export default function SearchLocationPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl text-black font-bold mb-4">Busca una dirección</h1>
            <p className="text-lg text-gray-700 mb-8">Selecciona una dirección para comenzar</p>
            <MapShow />
        </div>
    );
}
