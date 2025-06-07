export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-4">JAMBO</p>
        <div className="flex flex-wrap justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-red-500 transition-colors">Acerca de nosotros</a>
          <a href="#" className="hover:text-red-500 transition-colors">Servicios</a>
          <a href="#" className="hover:text-red-500 transition-colors">Cómo funciona</a>
          <a href="#" className="hover:text-red-500 transition-colors">Preguntas frecuentes</a>
          <a href="#" className="hover:text-red-500 transition-colors">Contacto</a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Jambo. Conectando habilidades con necesidad. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}