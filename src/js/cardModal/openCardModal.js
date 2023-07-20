import { Modal } from '../modalWindow/modalWindow';

//open card modal
const openCardModal = () => {
  try {
    const bookModal = new Modal(document.querySelector('[data-modal-card]'));
    bookModal.backdrop();
    bookModal.open();
  } catch (err) {
    throw err;
  }
};

export default openCardModal;
