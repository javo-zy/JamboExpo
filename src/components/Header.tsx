import Link from 'next/link';
import Image from 'next/image'; // Para optimizar imágenes de Next.js

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="flex items-center">
          {<Image
            src="/images/jambo-logo.png" 
            alt="Jambo Logo"
            width={100}
            height={60}
            priority
          /> }
        </Link>

        
        <nav className="hidden md:flex space-x-6">
          <Link href="/categories" className="text-gray-700 hover:text-red-700 font-medium">
            Categorías
          </Link>
          <Link href="/departments" className="text-gray-700 hover:text-red-700 font-medium">
            Departamentos
          </Link>
          <Link href="/search-location" className="text-gray-700 hover:text-red-700 font-medium">
            Buscar por ubicación
          </Link>
        </nav>

        
        <div className="flex items-center space-x-4">
          <Link href="/signin" className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors">
            Iniciar sesión
          </Link>
        
        </div>

        
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}