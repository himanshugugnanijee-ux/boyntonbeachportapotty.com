const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));

    menuToggle.querySelectorAll('span').forEach((line, index) => {
      if (isOpen) {
        if (index === 0) line.style.transform = 'translateY(7px) rotate(45deg)';
        if (index === 1) line.style.opacity = '0';
        if (index === 2) line.style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        line.style.transform = 'none';
        line.style.opacity = '1';
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelectorAll('span').forEach((line) => {
        line.style.transform = 'none';
        line.style.opacity = '1';
      });
    });
  });
}
