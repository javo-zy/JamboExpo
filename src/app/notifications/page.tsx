'use client';
import Button from '@/components/Button';
import Link from 'next/link';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'job_offer',
      title: 'Nueva Oferta de Trabajo',
      description: 'Esaú Gomez te ofrece un trabajo. Necesita un soldador para mañana, ¿estás disponible?',
      date: 'May 16, 2025, 03:47 pm',
      link: '/job-offer/123',
    },
    {
      id: 2,
      type: 'job_offer',
      title: 'Oferta de Trabajo Urgente',
      description: 'Un cliente necesita un fontanero para una emergencia. ¿Puedes atenderlo?',
      date: 'May 20, 2025, 08:17 am',
      link: '/job-offer/124',
    },
    {
      id: 3,
      type: 'system',
      title: 'Actualización de Perfil Requerida',
      description: 'Tu perfil necesita ser actualizado para que puedas recibir más trabajos.',
      date: 'May 25, 2025, 08:30 pm',
      link: '/settings/worker',
    },
    {
      id: 4,
      type: 'job_offer',
      title: 'Solicitud de Soldador',
      description: 'Buenos días, necesito un soldador para el 25 de junio, ¿estás disponible?',
      date: 'May 31, 2025, 07:15 am',
      link: '/job-offer/125',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Notificaciones</h1>
        <Button variant="secondary" onClick={() => alert('Simulando marcar todo como leído')}>
          Marcar todo como leído
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {notifications.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li key={notification.id} className="p-4 hover:bg-gray-50 transition-colors">
                <Link href={notification.link || '#'} className="block">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-red-600 font-semibold">
                        {notification.type === 'job_offer' ? 'Oferta de Trabajo' : 'Sistema'}
                      </p>
                      <h2 className="text-lg font-bold text-gray-900 mt-1">{notification.title}</h2>
                      <p className="text-gray-700 text-sm mt-1">{notification.description}</p>
                    </div>
                    <span className="text-xs text-gray-500 flex-shrink-0 ml-4">
                      {notification.date}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-8 text-center text-gray-500">
            No tienes nuevas notificaciones.
          </div>
        )}
      </div>
    </div>
  );
}