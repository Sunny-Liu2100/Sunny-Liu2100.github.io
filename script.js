// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 0);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav-links');
const linkItems = document.querySelectorAll('.nav-links a');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

linkItems.forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe section titles and cards
document.querySelectorAll('.section-title, .about-card, .knowledge-card, .reading-item, .social-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Add staggered delays to grid items
const addDelays = (selector) => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add(`delay-${(i % 6) + 1}`);
  });
};

addDelays('.about-card');
addDelays('.knowledge-card');
addDelays('.reading-item');
addDelays('.social-card');
