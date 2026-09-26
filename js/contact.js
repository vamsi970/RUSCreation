// contact.js — Form validation & submission

const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('show'); }
}
function clearError(id) {
  const el = document.getElementById(id);
  if (el) { el.textContent = ''; el.classList.remove('show'); }
}

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const name  = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg   = document.getElementById('message').value.trim();

    clearError('nameErr');
    clearError('emailErr');
    clearError('msgErr');

    if (!name) { showError('nameErr', 'Please enter your name.'); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('emailErr', 'Please enter a valid email address.'); valid = false;
    }
    if (!msg) { showError('msgErr', 'Please add a message.'); valid = false; }

    if (valid) {
      // Simulate send
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        form.style.display = 'none';
        formSuccess.style.display = 'block';
        document.querySelector('.form-header').style.display = 'none';
      }, 1200);
    }
  });

  // Live clear errors
  ['name','email','message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => clearError(id + 'Err'));
  });
}
