'use client'; // Indispensable para usar Hooks de React en el App Router

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Para redirecciones en Next.js App Router

// Importa las funciones simuladas de la API.
// La ruta es '../../utils/api' según tu estructura confirmada.
import { registerUser, socialLoginUser } from '../../utils/api';

export default function CreateAccountView() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    // Función de validación del formulario
    const validateForm = (): boolean => {
        if (!username.trim()) {
            setError('El nombre de usuario es requerido.');
            return false;
        }
        if (!email.trim() || !email.includes('@')) {
            setError('Ingresa una dirección de correo electrónico válida.');
            return false;
        }
        if (!phoneNumber.trim() || phoneNumber.length < 8) { // Validación básica del número de teléfono
            setError('Ingresa un número de teléfono válido.');
            return false;
        }
        if (!password.trim() || password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return false;
        }
        setError(''); // Limpiar cualquier error previo
        return true;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            // Llamada a la función simulada de registro
            const data = await registerUser(username, email, phoneNumber, password);
            console.log('Registro simulado exitoso:', data);

            // Simular guardar un token o indicar éxito
            if (typeof window !== 'undefined') {
                localStorage.setItem('user_token', data.token || 'mock_register_token');
            }
            router.push('/registration-success'); // Redirige a una página de éxito de registro
        } catch (err: any) {
            console.error('Error de registro simulado:', err);
            setError(err.message || 'Error al crear la cuenta. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async (provider: string) => {
        setLoading(true);
        setError('');
        try {
            const data = await socialLoginUser(provider);
            console.log(`Login con ${provider} simulado exitoso:`, data);
            if (typeof window !== 'undefined') {
                localStorage.setItem('user_token', data.token || `mock_social_${provider}_token`);
            }
            router.push('/dashboard'); // Redirige al dashboard después del login social
        } catch (err: any) {
            console.error(`Error de login social con ${provider}:`, err);
            setError(`No se pudo iniciar sesión con ${provider}. Intenta de nuevo.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Create your account</h2>
            <p className="text-gray-600 mb-8">Welcome! Please fill in the details to get started</p>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => handleSocialLogin('Apple')}
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Sign in with Apple"
                >
                    {/* Reemplazar con íconos reales de Apple, Facebook, Google, Microsoft */}
                    <span className="text-2xl"></span>
                </button>
                <button
                    onClick={() => handleSocialLogin('Facebook')}
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Sign in with Facebook"
                >
                    <span className="text-2xl">📘</span>
                </button>
                <button
                    onClick={() => handleSocialLogin('Google')}
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Sign in with Google"
                >
                    <span className="text-2xl">G</span>
                </button>
                <button
                    onClick={() => handleSocialLogin('Microsoft')}
                    className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Sign in with Microsoft"
                >
                    <span className="text-2xl">⬜</span>
                </button>
            </div>

            <div className="flex items-center justify-center my-6 text-gray-500">
                <span className="flex-grow border-t border-gray-200"></span>
                <span className="mx-4 text-sm">Or</span>
                <span className="flex-grow border-t border-gray-200"></span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="text-left mb-5">
                    <label htmlFor="username" className="block text-sm text-gray-600 mb-2 sr-only">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Username"
                        required
                        aria-label="Username"
                    />
                </div>

                <div className="text-left mb-5">
                    <label htmlFor="email" className="block text-sm text-gray-600 mb-2 sr-only">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email address"
                        required
                        aria-label="Email address"
                    />
                </div>

                <div className="text-left mb-5">
                    <label htmlFor="phoneNumber" className="block text-sm text-gray-600 mb-2 sr-only">Phone number</label>
                    <div className="flex border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                        <span className="p-3 bg-gray-50 text-gray-600 border-r border-gray-300 rounded-l-md">+503</span>
                        <input
                            type="tel" // Use type="tel" for phone numbers
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="flex-grow p-3 text-base focus:outline-none bg-transparent"
                            placeholder="Enter your phone number"
                            required
                            aria-label="Phone number"
                        />
                    </div>
                </div>

                <div className="text-left mb-5">
                    <label htmlFor="password" className="block text-sm text-gray-600 mb-2 sr-only">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your password"
                        required
                        aria-label="Password"
                    />
                </div>

                {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

                <button
                    type="submit"
                    className="bg-red-600 text-white py-3 px-6 rounded-md text-lg font-semibold cursor-pointer transition-colors duration-200 ease-in-out mb-6
                     hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={loading}
                >
                    {loading ? 'Cargando...' : 'Continue'}
                </button>
            </form>

            <p className="text-gray-500 text-sm">
                Already have an account?{" "}
                {/* Usar <a> para simplificar en el frontend, pero <Link> de Next.js es mejor para navegación SPA */}
                <a href="/login" className="text-red-600 font-semibold hover:underline">Sing in</a>
            </p>

        </div>
    );
}