import Button from '@/components/Button';
import Link from 'next/link';

export default function WorkerSettingsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Configuración del Perfil de Profesional
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto">
        <form className="space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-700 pb-2 mb-6">
              Información Personal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  defaultValue="José Ramírez"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Edad
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  defaultValue="35"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Género
                </label>
                <select
                  id="gender"
                  name="gender"
                  defaultValue="Masculino"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                >
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Ubicación (Ciudad/Municipio)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  defaultValue="Tamanique"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="mainOffice" className="block text-sm font-medium text-gray-700">
                  Oficina Principal (Opcional)
                </label>
                <input
                  type="text"
                  id="mainOffice"
                  name="mainOffice"
                  placeholder="Ej: Oficina Central, Mi Taller"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-700">
                  Años de Experiencia
                </label>
                <input
                  type="number"
                  id="yearsExperience"
                  name="yearsExperience"
                  defaultValue="15"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Número de Teléfono
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  autoComplete="tel"
                  defaultValue="+503 9876-5432"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700">
                  Foto de Perfil
                </label>
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                />
              </div>
            </div>
            <div className="mt-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Descripción (Sobre ti y tu experiencia)
                </label>
                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    defaultValue="Hola! Mi nombre es José Ramírez, y soy un albañil con más de 15 años de experiencia. Me especializo en construcción de casas, muros y pequeñas estructuras. He trabajado en más de 100 proyectos de construcción en diferentes comunidades. Soy responsable, trabajador y siempre doy lo mejor de mí para que mis clientes estén felices."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                ></textarea>
            </div>
          </section>

          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-700 pb-2 mb-6">
              Servicios y Disponibilidad
            </h2>
            <div>
              <label htmlFor="servicesOffered" className="block text-sm font-medium text-gray-700 mb-2">
                Servicios Ofrecidos (Separados por coma)
              </label>
              <textarea
                id="servicesOffered"
                name="servicesOffered"
                rows={3}
                defaultValue="Construcción de casas, Construcción de muros, Reparación de paredes agrietadas, Colocación de ladrillos y bloques"
                placeholder="Ej: Fontanería, Electricidad, Jardinería"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="workingDays" className="block text-sm font-medium text-gray-700">
                  Días de Trabajo
                </label>
                <input
                  type="text"
                  id="workingDays"
                  name="workingDays"
                  defaultValue="Lunes a Viernes"
                  placeholder="Ej: Lunes - Sábado"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="workingHours" className="block text-sm font-medium text-gray-700">
                  Horas de Trabajo
                </label>
                <input
                  type="text"
                  id="workingHours"
                  name="workingHours"
                  defaultValue="7:00 am - 5:00 pm"
                  placeholder="Ej: 8:00 am - 6:00 pm"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="approxPrices" className="block text-sm font-medium text-gray-700">
                  Precios Aproximados (Referencia)
                </label>
                <input
                  type="text"
                  id="approxPrices"
                  name="approxPrices"
                  defaultValue="Desde $20 por hora"
                  placeholder="Ej: $25 - $50 por hora"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>
          </section>

          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-red-700 pb-2 mb-6">
              Certificaciones (Opcional)
            </h2>
            <div>
              <label htmlFor="certificates" className="block text-sm font-medium text-gray-700 mb-2">
                Sube tus certificados relevantes
              </label>
              <input
                type="file"
                id="certificates"
                name="certificates"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="mt-2 text-sm text-gray-500">Puedes subir múltiples archivos (PDF, JPG, PNG, DOCX).</p>
            </div>
          </section>

          <div className="flex justify-end pt-4">
            <Button type="submit">Guardar Cambios del Profesional</Button>
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