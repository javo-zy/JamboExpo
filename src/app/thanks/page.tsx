import Link from 'next/link';
import Button from '@/components/Button';

export default function ThanksPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-green-500 text-6xl mb-4">✅</div> {/* Ícono de éxito */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ¡Gracias por crear tu cuenta!
        </h2>
        <p className="mt-2 text-center text-lg text-gray-600">
          Tu cuenta en Jambo ha sido creada exitosamente.
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ahora puedes iniciar sesión y explorar todos los servicios que Jambo tiene para ofrecerte.
        </p>
        <div className="mt-6">

          <Link href="/signin">
          <Button className="w-full">
            Ir a Iniciar Sesión
          </Button>
          </Link>
        </div>
        <div className="text-center text-sm mt-4">
          <Link href="/" className="font-medium text-red-600 hover:text-red-500">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
}