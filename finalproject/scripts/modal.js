// modal.js
export function setupModal() {
  const modal = document.querySelector('#modal');
  const modalContent = document.querySelector('#modal-content');
  const closeBtn = document.querySelector('#modal-close');

  function openModal(content) {
    modalContent.innerHTML = content;
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  return { openModal };
}
