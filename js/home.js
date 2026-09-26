/* =============================================
   HOME.JS — Home page specific scripts
   ============================================= */

// ── TESTIMONIAL SLIDER ──
const testimonials = document.querySelectorAll('.testimonial');
const dots         = document.querySelectorAll('.tdot');
let current = 0;
let autoSlide;

function goTo(i) {
  testimonials[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = i;
  testimonials[current].classList.add('active');
  dots[current].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);
    goTo(parseInt(dot.dataset.i));
    autoSlide = setInterval(() => goTo((current + 1) % testimonials.length), 5000);
  });
});

autoSlide = setInterval(() => goTo((current + 1) % testimonials.length), 5000);

// ── HERO PANEL — keyboard accessible ──
document.querySelectorAll('.hero-panel').forEach(panel => {
  panel.setAttribute('tabindex', '0');
  panel.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      window.location.href = 'products.html';
    }
  });
});

// ── COUNTER ANIMATION on stats ──
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1600;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsSection = document.querySelector('.intro-stats');
if (statsSection) {
  let counted = false;
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;
      const statNums = document.querySelectorAll('.stat-num');
      const data = [
        { val: 500, suffix: '+' },
        { val: 20,  suffix: '+' },
        { val: 15,  suffix: ''  },
        { val: 100, suffix: '%' },
      ];
      statNums.forEach((el, i) => {
        if (data[i]) animateCounter(el, data[i].val, data[i].suffix);
      });
    }
  }, { threshold: 0.4 });
  statsObs.observe(statsSection);
}
