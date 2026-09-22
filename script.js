(() => {
  'use strict';

  const initMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#site-menu');

    if (!menuToggle || !mainNav) return;

    const navLinks = mainNav.querySelectorAll('a');
    const menuLines = menuToggle.querySelectorAll('span');

    const setMenuState = (open) => {
      mainNav.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('menu-is-open', open);

      menuLines.forEach((line, index) => {
        line.style.transform = open
          ? index === 0
            ? 'translateY(7px) rotate(45deg)'
            : index === 2
              ? 'translateY(-7px) rotate(-45deg)'
              : 'none'
          : 'none';
        line.style.opacity = open && index === 1 ? '0' : '1';
      });
    };

    menuToggle.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      setMenuState(!mainNav.classList.contains('is-open'));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => setMenuState(false));
    });

    document.addEventListener('click', (event) => {
      if (
        mainNav.classList.contains('is-open') &&
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        setMenuState(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
        setMenuState(false);
        menuToggle.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) setMenuState(false);
    });

    setMenuState(false);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
