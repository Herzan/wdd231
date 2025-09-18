// scripts.js — handles timestamp, card animations, modal behavior and accessibility
(function(){
  // populate year(s)
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // timestamp hidden field
  const ts = document.getElementById('ts');
  if(ts) ts.value = new Date().toISOString();

  // animate cards on initial load
  const cards = Array.from(document.querySelectorAll('.card'));
  cards.forEach((c, i) => {
    // add classes slightly staggered
    setTimeout(() => {
      c.classList.add('animate', 'delay-' + (i+1));
    }, 80 * i);
  });

  // modal logic
  function openModal(modal){
    modal.setAttribute('aria-hidden','false');
    // save opener
    modal._opener = document.activeElement;
    const close = modal.querySelector('[data-modal-close]');
    if(close) close.focus();
    // trap focus minimal: focus stays inside modal by preventing tabbing out
    document.addEventListener('focus', enforceFocus, true);
    document.addEventListener('keydown', escHandler);
  }
  function closeModal(modal){
    modal.setAttribute('aria-hidden','true');
    if(modal._opener) modal._opener.focus();
    document.removeEventListener('focus', enforceFocus, true);
    document.removeEventListener('keydown', escHandler);
  }
  function enforceFocus(e){
    const open = document.querySelector('.modal[aria-hidden="false"]');
    if(!open) return;
    if(!open.contains(e.target)){
      e.stopPropagation();
      open.querySelector('[data-modal-close]').focus();
    }
  }
  function escHandler(e){ if(e.key === 'Escape'){ const open = document.querySelector('.modal[aria-hidden="false"]'); if(open) closeModal(open);} }

  // attach triggers
  document.querySelectorAll('[data-modal-trigger]').forEach(btn => {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('data-modal-trigger');
      const modal = document.getElementById(id);
      if(modal) openModal(modal);
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', function(){
      const modal = this.closest('.modal');
      if(modal) closeModal(modal);
    });
  });

  // basic client-side validation hinting for the orgTitle pattern
  const orgTitle = document.getElementById('orgTitle');
  if(orgTitle){
    orgTitle.addEventListener('input', function(){
      const pattern = new RegExp(this.getAttribute('pattern'));
      if(this.value && !pattern.test(this.value)){
        this.setCustomValidity('Please use only letters, spaces, or hyphens, minimum 7 characters.');
      } else {
        this.setCustomValidity('');
      }
    });
  }

})();
