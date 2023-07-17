import { fetchBookById } from '../booksAPI/booksApi';

const bookShelfEl = document.querySelector('#bookshelf');

bookShelfEl.addEventListener('click', async event => {
  const targetElement = event.target.closest('li');

  if (targetElement && targetElement.classList.contains('book_card')) {
    const book = await fetchBookById(targetElement.dataset.bookid);
    renderCardModal(book);
  }
});

function renderCardModal(book) {
  const modalBackdrop = document.querySelector('.backdrop');
  console.log('123');
  const { book_image, title, author, description, buy_links } = book;

  modalBackdrop.insertAdjacentHTML(
    'afterbegin',
    `
  <div class="card-modal" data-modal-card>
  <button class="close-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M21 7L7 21M7 7L21 21"
        stroke="#111111"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>

  <div class="card-wrapper">
    <div class="card-info">
      <img class="card-image" src="${book_image}" alt="book_image"/>
      <div class="card-description">
        <h1 class="card-name">${title}</h1>
        <p class="card-author">${author}</p>
        <p class="card-text">${description}</p>
        <ul class="card-buy-links">
          <li class="card-link">
            <a href="${buy_links}"></a>
          </li>

          <li class="card-link">
            <a href="${buy_links}">
          </a>
          
          </li>
          <li class="card-link">
            <a href="${buy_links}">
          </a>
          </li>
        </ul>
      </div>
    </div>
    <button class="card-button">Add to shopping list</button>
    <p class="card-footer-congrad">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>
  </div>
</div>`
  );
}
