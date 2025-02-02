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

    // Animación de timeline con Intersection Observer
    const experienciaItems = document.querySelectorAll('.experiencia-item');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animar barras de habilidad
                const skills = entry.target.querySelectorAll('.skill-progress');
                skills.forEach(skill => {
                    const level = skill.dataset.skillLevel;
                    skill.style.width = level;
                });
            }
        });
    }, observerOptions);

    experienciaItems.forEach(item => observer.observe(item));

    // Efecto parallax en tarjetas de proyecto
    const proyectoCards = document.querySelectorAll('.proyecto-card');
    proyectoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (e.clientX - card.offsetLeft - card.offsetWidth / 2) / 10;
            const yAxis = (e.clientY - card.offsetTop - card.offsetHeight / 2) / 10;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });

    // Theme switcher
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌓';
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Cargar tema guardado
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});