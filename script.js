// Navigation scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in, .section-title, .timeline-item, .project-card, .skill-group, .education-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
  observer.observe(el);
});

document.querySelectorAll('.section-title, .timeline-item, .project-card, .skill-group, .education-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = navLinks.querySelectorAll('a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(item => {
    item.style.color = item.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
