import Link from 'next/link';
import Button from './Button'; // Importamos nuestro componente Button

interface ProfessionalCardProps {
  id: string; // Para la URL del perfil
  name: string;
  category: string;
  schedule: string;
  phone: string;
  rating?: number; // Opcional, para la calificación con estrellas
  imageUrl?: string; // URL de la imagen del profesional
}

export default function ProfessionalCard({
  id,
  name,
  category,
  schedule,
  phone,
  rating,
  imageUrl,
}: ProfessionalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center p-4">
      {/* Imagen del profesional */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-4 flex-shrink-0"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-bold mb-4 md:mb-0 md:mr-4 flex-shrink-0">
          {name.charAt(0)}
        </div>
      )}

      {/* Información del profesional */}
      <div className="flex-grow text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-red-700 font-medium">{category}</p>
        <p className="text-gray-600 text-sm mt-1">{schedule}</p>
        <p className="text-gray-600 text-sm">{phone}</p>
        {rating && (
          <div className="flex justify-center md:justify-start items-center mt-2 text-yellow-500">
            {/* Simple representación de estrellas. Podríamos hacer un componente StarRating más adelante */}
            {'⭐'.repeat(rating)}
            {'☆'.repeat(5 - rating)}
          </div>
        )}
      </div>

      {/* Botón de Contacto */}
      <div className="flex-shrink-0">
        <Link href={`/professionals/${id}`} passHref>
          <Button>Contactar</Button>
        </Link>
      </div>
    </div>
  );
}