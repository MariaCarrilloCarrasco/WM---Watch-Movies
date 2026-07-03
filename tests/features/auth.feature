Feature: Autenticación y Seguridad en WOM!

  Scenario: Inicio de sesión exitoso con credenciales correctas
    Given que el usuario está en la pantalla de bienvenida de WOM!
    When ingresa el correo "maria.carrillo@movies.com" y la contraseña "123456"
    And pulsa el botón de enviar
    Then el sistema debe iniciar sesión correctamente
    And cerrar el panel de bienvenida con animación

  Scenario: Intento de inicio de sesión con formato de correo electrónico inválido
    Given que el usuario está en la pantalla de bienvenida de WOM!
    When ingresa el correo "maria.carrillo" y la contraseña "123456"
    And pulsa el botón de enviar
    Then el sistema debe bloquear el inicio de sesión
    And mostrar el mensaje de validación "El formato del correo electrónico es inválido."

  Scenario: Intento de inicio de sesión con campos obligatorios vacíos
    Given que el usuario está en la pantalla de bienvenida de WOM!
    When deja el campo de correo vacío y escribe la contraseña "123456"
    And pulsa el botón de enviar
    Then el sistema debe bloquear el inicio de sesión
    And mostrar el mensaje de validación "Todos los campos son obligatorios."

  Scenario: Redirección automática por protección de rutas (Route Guards)
    Given que el usuario no está autenticado en la plataforma
    When intenta acceder a una sección privada como "likes"
    Then el sistema debe detener la navegación
    And abrir el panel de bienvenida solicitando inicio de sesión
