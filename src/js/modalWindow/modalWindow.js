export class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
  }

  backdrop() {
    this.modalElement.parentElement.classList.toggle('visually-hidden');
  }

  backdropClose() {
    this.modalElement.parentElement.classList.add('visually-hidden');
  }

  open() {
    this.modalElement.classList.add('modal-active');
  }

  close() {
    this.modalElement.classList.remove('modal-active');
  }
}
