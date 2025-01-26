document.addEventListener('DOMContentLoaded', function () {
    // Menú móvil
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    menuIcon.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    

    // Validación de formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Validación simple del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name === '' || email === '' || message === '') {
            alert('Por favor, complete todos los campos.');
        } else {
            alert('Formulario enviado correctamente.');
            form.reset();
        }
    });

    // Funcionalidad del carrusel
    const images = document.querySelectorAll('.carousel-images img');
    const desc = document.getElementById('carousel-desc');
    const descriptions = [
        "Las tecnologías web han cambiado la forma en que nos comunicamos y accedemos a la información.",
        "La comunicación se ha mejorado significativamente gracias a las tecnologías web.",
        "El acceso a la información global se ha vuelto más fácil y rápido."
    ];
    let currentIndex = 0;

    // Botones de navegación del carrusel
    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    function updateCarousel() {
        document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
        desc.textContent = descriptions[currentIndex];
    }
    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("show");
        }
    // Envío de formulario de contacto con detalles
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        // Captura los datos del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        const fileInput = document.getElementById("file");
        const file = fileInput.files[0] ? fileInput.files[0].name : "No se adjuntó archivo";

        // Muestra el mensaje de alerta con los datos capturados
        alert(`Mensaje enviado correctamente. 
Gracias por contactarnos, ${name}!

Detalles:
- Correo Electrónico: ${email}
- Teléfono: ${phone}
- Asunto: ${subject}
- Mensaje: ${message}
- Archivo: ${file}`);

        // Resetea el formulario
        contactForm.reset();
    });
});
