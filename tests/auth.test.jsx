import { describe, test, expect, beforeAll, beforeEach, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

// Mock browser interfaces
beforeAll(() => {
  window.alert = vi.fn();
  window.confirm = vi.fn(() => true);
  
  // Mock localStorage
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => { store[key] = value.toString(); },
      removeItem: (key) => { delete store[key]; },
      clear: () => { store = {}; }
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  
  // Mock sessionStorage
  const sessionStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => { store[key] = value.toString(); },
      removeItem: (key) => { delete store[key]; },
      clear: () => { store = {}; }
    };
  })();
  Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });
});

beforeEach(() => {
  document.body.innerHTML = '';
  localStorage.clear();
  sessionStorage.clear();
  window.alert.mockClear();
});

describe('Gherkin Scenario: Autenticación y Seguridad en WOM!', () => {

  test('Scenario 1: Inicio de sesión exitoso con credenciales correctas', async () => {
    render(<App />);

    // Given que el usuario está en la pantalla de bienvenida de WOM!
    const welcomeTitle = screen.getByText(/Bienvenido/i);
    expect(welcomeTitle).toBeInTheDocument();

    // When ingresa el correo y la contraseña correctos
    const emailInput = screen.getByPlaceholderText('maria.carrillo@movies.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    
    fireEvent.change(emailInput, { target: { value: 'maria.carrillo@movies.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // And pulsa el botón de enviar
    const submitBtn = screen.getByRole('button', { name: /Continuar/i });
    fireEvent.click(submitBtn);

    // Then el sistema debe iniciar sesión correctamente
    await waitFor(() => {
      const stored = localStorage.getItem('wm_user');
      expect(stored).not.toBeNull();
      expect(JSON.parse(stored).email).toBe('maria.carrillo@movies.com');
    });
  });

  test('Scenario 2: Intento de inicio de sesión con formato de correo electrónico inválido', async () => {
    render(<App />);

    // Given que el usuario está en la pantalla de bienvenida de WOM!
    const emailInput = screen.getByPlaceholderText('maria.carrillo@movies.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    
    // When ingresa un formato de correo incorrecto
    fireEvent.change(emailInput, { target: { value: 'maria.carrillo' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // And pulsa el botón de enviar
    const submitBtn = screen.getByRole('button', { name: /Continuar/i });
    fireEvent.click(submitBtn);

    // Then el sistema debe bloquear el inicio de sesión y mostrar el mensaje de error
    const errorAlert = await screen.findByText('El formato del correo electrónico es inválido.');
    expect(errorAlert).toBeInTheDocument();
  });

  test('Scenario 3: Intento de inicio de sesión con campos obligatorios vacíos', async () => {
    render(<App />);

    // Given que el usuario está en la pantalla de bienvenida de WOM!
    const emailInput = screen.getByPlaceholderText('maria.carrillo@movies.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');

    // When deja el correo vacío
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    // And pulsa el botón de enviar
    const submitBtn = screen.getByRole('button', { name: /Continuar/i });
    fireEvent.click(submitBtn);

    // Then el sistema muestra campos obligatorios
    const errorAlert = await screen.findByText('Todos los campos son obligatorios.');
    expect(errorAlert).toBeInTheDocument();
  });

  test('Scenario 4: Redirección automática por protección de rutas (Route Guards)', async () => {
    render(<App />);

    // When intenta acceder a una sección privada (Likes)
    const likesMenuBtns = screen.getAllByRole('button', { name: /Likes/i });
    fireEvent.click(likesMenuBtns[0]); // Click desktop menu button

    // Then el sistema detiene la navegación e interrumpe con alerta
    expect(window.alert).toHaveBeenCalled();
  });

});
