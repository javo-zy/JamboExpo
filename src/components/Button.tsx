import React from 'react';

interface ButtonProps {
  children: React.ReactNode; // El contenido del botón (texto, íconos, etc.)
  onClick?: () => void; // Función que se ejecuta al hacer clic
  variant?: 'primary' | 'secondary' | 'outline'; // Estilo del botón
  type?: 'button' | 'submit' | 'reset'; // Tipo de botón HTML
  className?: string; // Clases adicionales de Tailwind
  disabled?: boolean; // Para deshabilitar el botón
}

export default function Button({
  children,
  onClick,
  variant = 'primary', // Valor por defecto
  type = 'button', // Valor por defecto
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50';

  const variants = {
    primary: 'bg-red-700 text-white hover:bg-red-800 focus:ring-red-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'border border-red-700 text-red-700 hover:bg-red-50 focus:ring-red-500',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}