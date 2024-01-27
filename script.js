document.addEventListener('DOMContentLoaded', () => {
    // Manejo del formulario
    const formulario = document.getElementById('form-contacto');
    
    if(formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simular envío exitoso
            formulario.reset();
            alert('¡Mensaje enviado con éxito!');
        });
    }

    // Scroll suave para navegación
    document.querySelectorAll('.nav-link').forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const seccionId = enlace.getAttribute('href');
            document.querySelector(seccionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto de carga suave
    window.addEventListener('load', () => {
        document.body.style.opacity = 1;
    });
});