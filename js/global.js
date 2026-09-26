/* =============================================
   GLOBAL.JS — Shared scripts across all pages
   ============================================= */

// ── NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
if (navbar) {
  // Always show scrolled style on inner pages
  const isInnerPage = !document.querySelector('.hero');
  if (isInnerPage) navbar.classList.add('scrolled');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else if (!isInnerPage) {
      navbar.classList.remove('scrolled');
    }
  });
}

// ── MOBILE MENU ──
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu  = document.getElementById('closeMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── SOCIAL FAB MENU ──
const socialFab = document.getElementById('socialFab');
const fabToggle = document.getElementById('fabToggle');
if (socialFab && fabToggle) {
  fabToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    socialFab.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!socialFab.contains(e.target)) socialFab.classList.remove('open');
  });
}

// ── SCROLL REVEAL (simple, no library) ──
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));
}
