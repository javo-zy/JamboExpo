import ProfessionalCard from '@/components/ProfessionalCard';

export default function SearchPage() {
  const professionals = [
    {
      id: '1',
      name: 'Olivia Gómez',
      category: 'Electricista',
      schedule: '8am-7pm',
      phone: '1234-5678',
      rating: 5,
      imageUrl: '/images/professionals/olivia-gomez.jpg',
    },
    {
      id: '2',
      name: 'Francisco Sanchez',
      category: 'Fontanero',
      schedule: '7am-6pm',
      phone: '4321-8765',
      rating: 4,
      imageUrl: '/images/professionals/francisco-sanchez.jpg',
    },
    {
      id: '3',
      name: 'Sandra Martinez',
      category: 'Niñera',
      schedule: '9am-5pm',
      phone: '6960-1214',
      rating: 5,
      imageUrl: '/images/professionals/sandra-martinez.jpg',
    },
    {
      id: '4',
      name: 'Elias Chicas',
      category: 'Soldador',
      schedule: '8am-4pm',
      phone: '1367-2468',
      rating: 3,
    },
    {
      id: '5',
      name: 'Javier Medina',
      category: 'Albañil',
      schedule: '7am-5pm',
      phone: '1098-7654',
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Buscar Profesionales
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Columna de Filtros */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md flex-shrink-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Filtros</h2>

          {/* Categorías */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Categorías</h3>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-red-600 rounded" />
              <span className="ml-2 text-gray-700">Electricista</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-red-600 rounded" />
              <span className="ml-2 text-gray-700">Fontanero</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-red-600 rounded" />
              <span className="ml-2 text-gray-700">Albañil</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-red-600 rounded" />
              <span className="ml-2 text-gray-700">Niñera</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-red-600 rounded" />
              <span className="ml-2 text-gray-700">Más...</span>
            </label>
          </div>

          {/* Precios */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Precios</h3>
            <label className="flex items-center mb-2">
              <input type="radio" name="price" className="form-radio text-red-600" />
              <span className="ml-2 text-gray-700">$10-20</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="price" className="form-radio text-red-600" />
              <span className="ml-2 text-gray-700">$20-60</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="price" className="form-radio text-red-600" />
              <span className="ml-2 text-gray-700">$30-50</span>
            </label>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Ubicación</h3>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-red-600 rounded" />
              <span className="ml-2 text-gray-700">Lourdes</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="form-checkbox text-red-600 rounded" />
              <span className="ml-2 text-gray-700">Ciudad Arce</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-red-600 rounded" />
              <span className="ml-2 text-gray-700">Santa Ana</span>
            </label>
          </div>

          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Nivel</h3>
            <label className="flex items-center mb-2">
              <input type="radio" name="level" className="form-radio text-red-600" />
              <span className="ml-2 text-gray-700">Nuevo</span>
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="level" className="form-radio text-red-600" />
              <span className="ml-2 text-gray-700">Experimentado</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="level" className="form-radio text-red-600" />
              <span className="ml-2 text-gray-700">Avanzado</span>
            </label>
          </div>
        </aside>

        
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 gap-6">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} {...professional} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}