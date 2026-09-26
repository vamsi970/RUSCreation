// products.js — Category showcase image crossfade rotator

const showcases = document.querySelectorAll('.category-showcase');

showcases.forEach((card, cardIndex) => {
  const layers = card.querySelectorAll('.showcase-img');
  let images = [];
  try { images = JSON.parse(card.dataset.images); } catch (e) { images = []; }
  if (layers.length < 2 || images.length < 2) return;

  let activeLayer = 0; // index into `layers` that is currently visible
  let imgIndex = 0;    // index into `images` currently shown

  function showNext() {
    const nextImgIndex = (imgIndex + 1) % images.length;
    const incoming = layers[1 - activeLayer];
    const outgoing = layers[activeLayer];

    // Preload fully before fading in, so the crossfade never reveals a blank layer.
    const preloader = new Image();
    preloader.onload = () => {
      incoming.src = images[nextImgIndex];
      incoming.classList.add('active');
      outgoing.classList.remove('active');
      activeLayer = 1 - activeLayer;
      imgIndex = nextImgIndex;
    };
    preloader.src = images[nextImgIndex];
  }

  // Stagger both the start time and the cadence slightly so cards never flip in unison.
  const interval = 7000 + (cardIndex % 4) * 350;
  const initialDelay = 7000 + cardIndex * 650;

  setTimeout(() => {
    showNext();
    setInterval(showNext, interval);
  }, initialDelay);
});

// Initial stagger fade-in on load
showcases.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  setTimeout(() => {
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.4s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, i * 80);
});
