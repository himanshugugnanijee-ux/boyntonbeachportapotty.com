(() => {
  'use strict';

  const initMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#site-menu');
    const overlay = document.querySelector('.menu-overlay');

    if (!menuToggle || !mainNav) return;

    const menuLines = menuToggle.querySelectorAll('span');
    const navLinks = mainNav.querySelectorAll('a');

    const setMenuState = (open) => {
      mainNav.classList.toggle('is-open', open);
      overlay?.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');

      menuLines.forEach((line, index) => {
        if (!open) {
          line.style.transform = 'none';
          line.style.opacity = '1';
          return;
        }

        if (index === 0) line.style.transform = 'translateY(7px) rotate(45deg)';
        if (index === 1) line.style.opacity = '0';
        if (index === 2) line.style.transform = 'translateY(-7px) rotate(-45deg)';
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

    overlay?.addEventListener('click', () => setMenuState(false));

    document.addEventListener('click', (event) => {
      const clickedOnToggle = menuToggle.contains(event.target);
      const clickedInsideNav = mainNav.contains(event.target);

      if (mainNav.classList.contains('is-open') && !clickedOnToggle && !clickedInsideNav) {
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
