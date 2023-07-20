export class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
  }

  bodyEl = document.querySelector('body');

  backdrop() {
    this.modalElement.parentElement.classList.toggle('visually-hidden');
    this.bodyEl.classList.add('modal-scroll');
  }

  backdropClose() {
    this.modalElement.parentElement.classList.add('visually-hidden');
    this.bodyEl.classList.remove('modal-scroll');
  }

  open() {
    this.modalElement.classList.add('modal-active');
  }

  close() {
    this.modalElement.classList.remove('modal-active');
  }
}
