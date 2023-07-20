// init card buttons
const initCardButton = isCard => {
  const cardFooterEl = document.querySelector('.card-footer-congrad');
  const cardButtonWrapper = document.querySelector('.card-button-wrapper');

  if (!isCard) {
    cardButtonWrapper.innerHTML = `<button class="card-button card-button-add">Add to shopping list</button>`;
    cardFooterEl.textContent = '';
    return;
  }

  cardButtonWrapper.innerHTML = `<button class="card-button card-button-remove">remove from the shopping list</button>`;
  cardFooterEl.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete,press the button “Remove from the shopping list”.';
};

export default initCardButton;
