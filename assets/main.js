const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
});

let lastScroll = window.scrollY;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  header.classList.toggle('is-scrolled', currentScroll > 24);
  header.classList.toggle('is-hidden', currentScroll > lastScroll && currentScroll > 240);
  lastScroll = currentScroll;
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

const revealElements = [...document.querySelectorAll('[data-reveal]')];

const revealVisibleElements = () => {
  revealElements.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight * 0.96 && bounds.bottom > 0) {
      element.classList.add('is-visible');
      observer.unobserve(element);
    }
  });
};

revealElements.forEach((element) => observer.observe(element));
revealVisibleElements();
window.addEventListener('load', () => {
  requestAnimationFrame(() => {
    revealVisibleElements();
  });
}, { once: true });
window.addEventListener('hashchange', () => requestAnimationFrame(revealVisibleElements));
document.querySelector('[data-year]').textContent = new Date().getFullYear();
