export class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
  }

  backdrop() {
    this.modalElement.parentElement.classList.toggle('active-modal');
  }

  backdropClose() {
    this.modalElement.parentElement.classList.remove('active-modal');
  }

  open() {
    this.modalElement.classList.add('modal-active');
  }

  close() {
    this.modalElement.classList.remove('modal-active');
  }
}
