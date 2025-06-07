import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header'; // Importa el Header
import Footer from '@/components/Footer'; // Importa el Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jambo - Conectando habilidades con necesidad',
  description: 'Encuentra profesionales calificados para reparaciones y mantenimiento en tu hogar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} flex flex-col min-h-screen`}> {/* Añadimos clases para un layout de página completa */}
        <Header /> {/* Incluye el Header aquí */}
        <main className="flex-grow"> {/* El contenido de la página crecerá para ocupar el espacio restante */}
          {children}
        </main>
        <Footer /> {/* Incluye el Footer aquí */}
      </body>
    </html>
  );
}