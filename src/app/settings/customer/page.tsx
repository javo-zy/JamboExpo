import Button from '@/components/Button';
import Link from 'next/link';

export default function CustomerSettingsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Configuración del Perfil de Cliente
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Primer Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                defaultValue="Juan"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                defaultValue="Pérez"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              defaultValue="juan.perez@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              defaultValue="+503 1234-5678"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Dirección Personal
            </label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="street-address"
              defaultValue="Calle Principal #123, Colonia Las Flores"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                País
              </label>
              <input
                type="text"
                id="country"
                name="country"
                autoComplete="country-name"
                defaultValue="El Salvador"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                Ciudad
              </label>
              <input
                type="text"
                id="city"
                name="city"
                autoComplete="address-level2"
                defaultValue="San Salvador"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit">Guardar Cambios</Button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Otras Configuraciones</h3>
            <div className="flex flex-col space-y-2">
                <Link href="/settings/security" className="text-red-600 hover:text-red-800">
                    Seguridad
                </Link>
                <Link href="/settings/notifications" className="text-red-600 hover:text-red-800">
                    Notificaciones
                </Link>
                <Link href="/settings/help" className="text-red-600 hover:text-red-800">
                    Ayuda
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}