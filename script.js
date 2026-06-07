document.querySelectorAll('.faq-btn').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    
    // Cerrar otros abiertos (opcional)
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) item.classList.remove('active');
    });

    faqItem.classList.toggle('active');
  });
});

// Lógica de Cambio de Tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Actualizar icono
  if (body.classList.contains('dark-mode')) {
    themeIcon.setAttribute('data-lucide', 'sun');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.setAttribute('data-lucide', 'moon');
    localStorage.setItem('theme', 'light');
  }
  
  // Refrescar iconos de Lucide para el botón
  lucide.createIcons();
});

// Cargar preferencia guardada
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.setAttribute('data-lucide', 'sun');
}

// Lógica de Menú Hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Cambiar icono entre menú y X
  const isOpen = navMenu.classList.contains('active');
  menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons();
});

// Cerrar menú al hacer click en un enlace (móvil)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});

// Animación de entrada al hacer scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.1 // Se activa cuando el 10% del elemento es visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Solo anima una vez
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));