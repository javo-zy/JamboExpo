import Button from '@/components/Button';
import Link from 'next/link';

interface ProfessionalDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProfessionalDetailPage({ params }: ProfessionalDetailPageProps) {
  const { id } = params;

  const professional = {
    id: '1',
    name: 'José Ramírez',
    category: 'Albañil',
    age: 35,
    gender: 'Masculino',
    location: 'Tamanique',
    workSchedule: 'Lunes a Viernes',
    workHours: '7:00 am - 5:00 pm',
    description: 'Hola! Mi nombre es José Ramírez, y soy un albañil con más de 15 años de experiencia. Me especializo en construcción de casas, muros y pequeñas estructuras. He trabajado en más de 100 proyectos de construcción en diferentes comunidades. Soy responsable, trabajador y siempre doy lo mejor de mí para que mis clientes estén felices.',
    services: [
      'Construcción de casas',
      'Construcción de muros',
      'Reparación de paredes agrietadas',
      'Colocación de ladrillos y bloques',
      'Enlucido y acabados de paredes',
      'Instalación de pisos de cemento o baldosa',
      'Construcción de aceras o pequeños senderos',
    ],
    comments: [
      { author: 'Alberto Lopez', text: 'Excelente trabajo, muy profesional y atento a los detalles.' },
      { author: 'Samuel Rodriguez', text: 'Lo recomiendo totalmente, llegó a tiempo y el trabajo fue impecable.' },
      { author: 'María Fernanda', text: 'Un verdadero experto, solucionó el problema en poco tiempo.' },
    ],
    rating: 5,
    imageUrl: '/images/professionals/jose-ramirez.jpg', // Si tienes la imagen
  };

  if (!professional || professional.id !== id) { // Simulación para cuando el ID no coincida
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-red-700">Profesional no encontrado</h1>
        <p className="mt-4 text-gray-600">Lo sentimos, el perfil que buscas no existe.</p>
        <Link href="/search">
          <Button className="mt-6">Volver a la búsqueda</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          {/* Imagen y Nombre del Profesional */}
          {professional.imageUrl ? (
            <img
              src={professional.imageUrl}
              alt={professional.name}
              className="w-32 h-32 rounded-full object-cover shadow-lg flex-shrink-0"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-5xl font-bold shadow-lg flex-shrink-0">
              {professional.name.charAt(0)}
            </div>
          )}
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-4xl font-extrabold text-gray-900">{professional.name}</h1>
            <p className="text-2xl font-semibold text-red-700 mt-1">{professional.category}</p>
            {professional.rating && (
              <div className="flex justify-center md:justify-start items-center mt-2 text-yellow-500 text-xl">
                {'⭐'.repeat(professional.rating)}
                {'☆'.repeat(5 - professional.rating)}
              </div>
            )}
            <div className="mt-4">
              <Button>Enviar Mensaje</Button>
            </div>
          </div>
        </div>

        {/* Datos Personales */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-700 pb-2 mb-4">Datos Personales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p><span className="font-semibold">Edad:</span> {professional.age} años</p>
            <p><span className="font-semibold">Género:</span> {professional.gender}</p>
            <p><span className="font-semibold">Ubicación:</span> {professional.location}</p>
            <p><span className="font-semibold">Horario de trabajo:</span> {professional.workSchedule}</p>
            <p><span className="font-semibold">Horas de trabajo:</span> {professional.workHours}</p>
          </div>
        </section>

        {/* Descripción */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-700 pb-2 mb-4">Descripción</h2>
          <p className="text-gray-700 leading-relaxed">{professional.description}</p>
        </section>

        {/* Servicios */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-700 pb-2 mb-4">Servicios</h2>
          <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2">
            {professional.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>

        {/* Comentarios de la gente */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-700 pb-2 mb-4">Comentarios de la gente</h2>
          <div className="space-y-4">
            {professional.comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800">{comment.author}</p>
                <p className="text-gray-700 text-sm">{comment.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}