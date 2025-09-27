// scripts.js — handles timestamp, card animations, modal behavior, accessibility, and validation
(function() {
  // ========== YEAR AUTO-FILL ==========
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ========== TIMESTAMP ==========
  const tsEl = document.getElementById('ts');
  if (tsEl) tsEl.value = new Date().toISOString();

  // ========== CARD ANIMATION ==========
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate', `delay-${index + 1}`);
    }, 80 * index);
  });

  // ========== MODAL HANDLING ==========
  function openModal(modal) {
    modal.setAttribute('aria-hidden', 'false');
    modal._opener = document.activeElement; // save opener for return focus
    const closeBtn = modal.querySelector('[data-modal-close]');
    if (closeBtn) closeBtn.focus();

    document.addEventListener('focus', trapFocus, true);
    document.addEventListener('keydown', escHandler);
  }

  function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    if (modal._opener) modal._opener.focus();

    document.removeEventListener('focus', trapFocus, true);
    document.removeEventListener('keydown', escHandler);
  }

  function trapFocus(e) {
    const openModalEl = document.querySelector('.modal[aria-hidden="false"]');
    if (!openModalEl) return;
    if (!openModalEl.contains(e.target)) {
      e.stopPropagation();
      const closeBtn = openModalEl.querySelector('[data-modal-close]');
      if (closeBtn) closeBtn.focus();
    }
  }

  function escHandler(e) {
    if (e.key === 'Escape') {
      const openModalEl = document.querySelector('.modal[aria-hidden="false"]');
      if (openModalEl) closeModal(openModalEl);
    }
  }

  // Attach triggers
  document.querySelectorAll('[data-modal-trigger]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal-trigger');
      const modal = document.getElementById(modalId);
      if (modal) openModal(modal);
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  // ========== TITLE FIELD VALIDATION ==========
  const titleField = document.getElementById('orgTitle');
  if (titleField) {
    const pattern = new RegExp(titleField.getAttribute('pattern'));
    titleField.addEventListener('input', () => {
      if (titleField.value && !pattern.test(titleField.value)) {
        titleField.setCustomValidity(
          'Please use only letters, spaces, or hyphens, minimum 7 characters.'
        );
      } else {
        titleField.setCustomValidity('');
      }
    });
  }

  // ========== RESPONSIVE NAVIGATION (Optional Hamburger Trigger) ==========
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.main-nav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('open');
    });
  }
})();
