// src/app/utils/api.ts

const simulateNetworkDelay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

interface AuthResponse {
    token?: string;
    userId?: string;
    message: string;
}

/**
 * Simula el registro de un nuevo usuario.
 */
export async function registerUser(username: string, email: string, phoneNumber: string, password: string): Promise<AuthResponse> {
    await simulateNetworkDelay(1500); // Simula 1.5 segundos de retardo

    // Lógica de simulación: éxito si no hay "fail" en el email.
    if (email.includes('fail')) {
        throw new Error('El registro falló por un error simulado.');
    }
    if (username === 'existinguser') {
        throw new Error('El nombre de usuario ya está en uso (simulado).');
    }

    return { userId: 'sim_user_' + Math.random().toString(36).substring(7), message: 'Registro exitoso.', token: 'mock_jwt_register_token' };
}

/**
 * Simula el inicio de sesión vía proveedores sociales.
 */
export async function socialLoginUser(provider: string): Promise<AuthResponse> {
    await simulateNetworkDelay(1000); // Simula 1 segundo de retardo

    if (provider === 'Apple' && Math.random() < 0.2) { // 20% de probabilidad de error para Apple
        throw new Error('Error al iniciar sesión con Apple (simulado).');
    }

    return { token: `mock_jwt_social_${provider}_token`, message: `Inicio de sesión con ${provider} exitoso.` };
}

// Función de login anterior (mantenida por si la usas en otro contexto, pero no en este componente)
export async function loginUser(emailOrPhone: string, password: string): Promise<AuthResponse> {
    await simulateNetworkDelay(1000);

    if (emailOrPhone === 'test@example.com' && password === 'password123') {
        return { token: 'mock-jwt-token-12345', message: 'Inicio de sesión simulado exitoso.' };
    } else if (emailOrPhone.includes('error')) {
        throw new Error('Simulated network error or invalid credentials.');
    } else {
        throw new Error('Credenciales incorrectas (simulado). Intenta con test@example.com / password123.');
    }
}