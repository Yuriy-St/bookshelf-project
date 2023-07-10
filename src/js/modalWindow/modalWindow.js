const loginEl = document.querySelector('#login');
const singupEl = document.querySelector('[data-modal]');
const closeModalEl = document.querySelector('[data-close-modal]');

export function openModal() {
  singupEl.classList.add('active');
}

export function closeModal() {
  singupEl.classList.remove('active');
}

// open modal
loginEl.addEventListener('click', openModal);

// close modal
closeModalEl.addEventListener('click', closeModal);

// close modal overlay
singupEl.addEventListener('click', event => {
  if (event.target !== event.currentTarget) return;

  singupEl.classList.remove('active');
});

// close modal when press Esc
document.addEventListener('keydown', event => {
  if (event.code !== 'Escape') return;
  closeModal();
});
