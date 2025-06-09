import Link from 'next/link';
import Button from '@/components/Button';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-16rem)] py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crea tu cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¡Bienvenido! Por favor, completa los detalles para empezar
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <button className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {/* Aquí podrías poner un ícono de Google SVG */}
            <span className="mr-2">G</span> Registrarse con Google
          </button>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            O
          </span>
          <div className="absolute inset-y-0 left-0 w-full flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>

        
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="username" className="sr-only">Nombre de usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Nombre de usuario"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">Correo electrónico</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div>
            <label htmlFor="phone-number" className="sr-only">Número de teléfono</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 sm:text-sm">
                SV +503
              </span>
              <input
                id="phone-number"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-md relative block w-full pl-20 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Ingresa tu número de teléfono"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <Link href="/">
          <Button type="submit" className="w-full">
            Continuar
          </Button>
          </Link>
        </form>

        <div className="text-center text-sm text-black">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/signin" className="font-medium text-red-600 hover:text-red-500">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}