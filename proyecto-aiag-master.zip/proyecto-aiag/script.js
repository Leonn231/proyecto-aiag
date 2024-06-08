document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotForm = document.getElementById('forgot-form');
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    const linkRegister = document.querySelector('.register-link');
    const linkLogin = document.querySelectorAll('.login-link');
    const linkForgot = document.querySelector('.forgot-link');

    // Mostrar el formulario de inicio de sesión
    function showLoginForm() {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        forgotForm.classList.remove('active');
        wrapper.classList.add('active-popup');
    }

    // Mostrar el formulario de registro
    function showRegisterForm() {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        forgotForm.classList.remove('active');
        wrapper.classList.add('active-popup');
    }

    // Mostrar el formulario de restablecimiento de contraseña
    function showForgotForm() {
        forgotForm.classList.add('active');
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
        wrapper.classList.add('active-popup');
    }

    // Evento para abrir el popup de inicio de sesión/registro
    btnLoginPopup.addEventListener('click', showLoginForm);

    // Evento para cerrar el popup
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
        forgotForm.classList.remove('active');
    });

    // Eventos para mostrar los formularios
    linkRegister.addEventListener('click', showRegisterForm);
    linkLogin.forEach(link => link.addEventListener('click', showLoginForm));
    linkForgot.addEventListener('click', showForgotForm);

    // Selección de elementos del DOM
    const contenedor = document.querySelector('.wrapper');

    // Evento para mostrar el formulario de registro
    const enlaceRegistro = document.querySelector('.register-link');
    enlaceRegistro.addEventListener('click', () => {
        contenedor.classList.add('active');
        contenedor.classList.remove('active-forgot');
    });

    // Evento para mostrar el formulario de inicio de sesión
    const enlaceInicioSesion = document.querySelector('.login-link');
    enlaceInicioSesion.addEventListener('click', () => {
        contenedor.classList.remove('active');
        contenedor.classList.remove('active-forgot');
    });

    // Evento para mostrar el formulario de restablecimiento de contraseña
    const enlaceOlvidasteContrasena = document.querySelector('.forgot-link');
    enlaceOlvidasteContrasena.addEventListener('click', () => {
        contenedor.classList.add('active-forgot');
        contenedor.classList.remove('active');
    });

    // Manejo del formulario de registro
    const formularioRegistro = document.querySelector('.form-box.register form');
    formularioRegistro.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombreUsuario = formularioRegistro.querySelector('input[type="text"]').value;
        const correoElectronico = formularioRegistro.querySelector('input[type="email"]').value;
        const contraseña = formularioRegistro.querySelector('input[type="password"]').value;
        usuarios.push({ nombreUsuario, correoElectronico, contraseña });
        alert('¡Registro exitoso!');
        contenedor.classList.remove('active');
    });

    // Manejo del formulario de inicio de sesión
    const formularioInicioSesion = document.querySelector('.form-box.login form');
    formularioInicioSesion.addEventListener('submit', (event) => {
        event.preventDefault();
        const correoElectronico = formularioInicioSesion.querySelector('input[type="email"]').value;
        const contraseña = formularioInicioSesion.querySelector('input[type="password"]').value;
        const usuario = usuarios.find(usuario => usuario.correoElectronico === correoElectronico && usuario.contraseña === contraseña);
        if (usuario) {
            alert('¡Inicio de sesión exitoso!');
            window.location.href = 'catalogo.html';
        } else {
            alert('¡Correo electrónico o contraseña incorrectos!');
        }
    });

    // Manejo del formulario de restablecimiento de contraseña
    const formularioRestablecer = document.querySelector('.form-box.forgot form');
    formularioRestablecer.addEventListener('submit', (event) => {
        event.preventDefault();
        const correoElectronico = formularioRestablecer.querySelector('input[type="email"]').value;
        const usuario = usuarios.find(usuario => usuario.correoElectronico === correoElectronico);
        if (usuario) {
            const nuevaContrasena = prompt('Introduce tu nueva contraseña:');
            usuario.contraseña = nuevaContrasena;
            alert('¡Contraseña restablecida exitosamente!');
            contenedor.classList.remove('active-forgot');
            contenedor.classList.add('active');
        } else {
            alert('¡Correo electrónico no encontrado!');
        }
    });
});







