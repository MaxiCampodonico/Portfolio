document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation(); // Evitar que se propague el evento
      navLinks.classList.toggle('show');
      
      // Cambiar icono
      const icon = menuToggle.querySelector('i');
      if (navLinks.classList.contains('show')) {
        icon.className = 'bx bx-x';
      } else {
        icon.className = 'bx bx-menu';
      }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
        menuToggle.querySelector('i').className = 'bx bx-menu';
      }
    });
  }
});