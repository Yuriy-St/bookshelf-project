export class Modal {
  constructor(modalElement) {
    this.modalElement = modalElement;
  }

  open() {
    this.modalElement.classList.add('active-modal');
  }

  close() {
    this.modalElement.classList.remove('active-modal');
  }
}
