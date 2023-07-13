export function markupBookCard(data = {}) {
  if (typeof data !== 'object') return;

  const {
    bookId = '',
    bookImage = '../../img/book_card_plug.png',
    bookAuthorName = 'Author was stolen',
    bookTitle = 'Opps, something is wrong :(',
  } = data;

  return `<li class="book_card" data-bookId="${bookId}">
      <div class="book_container--img">
        <img loading="lazy" src="${bookImage}" alt="${bookTitle}, Author:${bookAuthorName}" class="book_card--img" />
        <p class="quick-view">quick view</p>
      </div>
      <h3 class="book_card--title">${bookTitle}</h3>
      <p class="book_card--author">${bookAuthorName}</p>
    </li>`;
}
