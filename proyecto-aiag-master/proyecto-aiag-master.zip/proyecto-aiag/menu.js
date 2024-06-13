document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link'); // Seleccionar todos los enlaces de navegación

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto de navegación
            const target = link.getAttribute('data-target'); // Obtener el target desde el atributo data

            // Aquí puedes implementar una carga de contenido dinámico o simplemente navegar
            switch (target) {
                case 'inicio':
                    window.location.href = 'index.html';
                    break;
                case 'acerca':
                    window.location.href = 'acerca.html';
                    break;
                case 'servicios':
                    window.location.href = 'servicio.html';
                    break;
                case 'contacto':
                    window.location.href = 'contacto.html';
                    break;
                default:
                    console.log('No se ha definido acción para:', target);
            }
        });
    });
});