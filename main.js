/* ==========================================================
   TidySheet – vanilla JavaScript
   1. Mobile menu toggle   2. Hero demo   3. Form validation
   ========================================================== */
(function () {
  'use strict';

  /* ---------- 1. Mobile navigation toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open)); // keeps screen readers in sync
  }

  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

  // Close the menu after choosing a link, pressing Escape, or resizing to desktop
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 960px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- 2. Hero demo: messy <-> clean ---------- */
  const demo = document.querySelector('.demo');
  const demoBtn = document.getElementById('demo-toggle');
  const cells = demo.querySelectorAll('td');
  let clean = false;

  function render() {
    cells.forEach((td) => { td.textContent = clean ? td.dataset.clean : td.dataset.raw; });
    demo.classList.toggle('is-clean', clean);
    demoBtn.textContent = clean ? 'Show original' : 'Clean it';
  }
  demoBtn.addEventListener('click', () => { clean = !clean; render(); });
  render(); // show the messy data first

  /* ---------- 3. Sign-up form validation ---------- */
  const form = document.getElementById('signup');
  const email = document.getElementById('email');
  const msg = document.getElementById('form-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // no backend in this demo
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    msg.className = 'form-msg ' + (valid ? 'ok' : 'error');
    msg.textContent = valid
      ? 'Thanks! Check your inbox for a link to start.'
      : 'Enter a valid email address, like name@example.com.';
    if (!valid) email.focus();
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
})();
