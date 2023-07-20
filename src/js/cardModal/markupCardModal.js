// return markup pop-up
function markupCardModal(book) {
  const { book_image, title, author, description, buy_links } = book;

  return `<div class="card-modal" data-modal-card>
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
      <img class="card-image" src="${
        book_image ? book_image : "'../../img/book_card_plug.png'"
      }" alt="book_image"/>
      <div class="card-description">
        <h1 class="card-name">${title}</h1>
        <p class="card-author">${
          author !== '' ? author : 'Author was stolen'
        }</p>
        <p class="card-text">${
          description !== '' ? description : 'Description is empty'
        }</p>
        <ul class="card-buy-items">
          <li class="card-item">
            
            <a href="${buy_links[0].url}">
              <img class="card-link-image" src="./cardModalImages/amazon.png" alt="amazon"/>
            </a>
          </li>

          <li class="card-item">
            <a href="${buy_links[1].url}">
              <img class="card-link-image" src="./cardModalImages/book.png" alt="book"/>
            </a>
          
          </li>
          <li class="card-item">
            <a href="${buy_links[2].url}">
              <img class="card-link-image" src="./cardModalImages/bookShop.png" alt="bookShop"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-button-wrapper"></div>
  </div>
   <p class="card-footer-congrad"></p>
</div>`;
}

export default markupCardModal;
