import Link from 'next/link';
import Button from '@/components/Button';

export default function WelcomeBackPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-blue-500 text-6xl mb-4">👋</div> {/* Ícono de saludo */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ¡Bienvenido de nuevo a Jambo!
        </h2>
        <p className="mt-2 text-center text-lg text-gray-600">
          Nos alegra verte de nuevo.
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ahora puedes acceder a tu panel de control y continuar con tus actividades.
        </p>
        <div className="mt-6">
          <Button as={Link} href="/" className="w-full">
            Ir a la página principal
          </Button>
        </div>
      </div>
    </div>
  );
}