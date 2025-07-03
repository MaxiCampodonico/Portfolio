// Seleccionamos el botón y el menú
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Escuchamos el click en el botón
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
