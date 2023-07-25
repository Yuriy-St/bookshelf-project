import { renderPlaceholder } from './initializationShoppingList';

export function markupShoppingListItems(pageItems) {
  if (pageItems) return pageItems.map(markupShoppingListItem).join('');
  renderPlaceholder();
  return '';
}

function markupShoppingListItem(pageItems) {
  const { _id, list_name, author, description, title, book_image, buy_links } =
    pageItems;
  const bookCardMarkup = `
    <li class="shoppinglist-item">
      ${markupDeleteButton(_id)}
      <div class="shoppinglist-thumb">
        <img src="${book_image}" alt="${title}" class="shoppinglist-img" />
      </div>
      <div class="shoppinglist-info-book">
        <h3 class="shoppinglist-name-book">${title}</h3>
        <p class="shoppinglist-book-category">${list_name}</p>
        <p class="shoppinglist-book-text">${description}</p>
        <div class="shoppinglist-author-link-wrap">
          <p class="shoppinglist-name-author">${author}</p>
          ${markupShoppingLinksList(buy_links)}
        </div>
      </div>
    </li>
  `;
  return bookCardMarkup;
}

function markupDeleteButton(id) {
  const deleteButtonMarkup = `
    <button type="button" data-book-id="${id}" class="shoppinglist-delete-book-button">
      <svg data-book-id="${id}" 
        class="shoppinglist-delete-book-button-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  `;
  return deleteButtonMarkup;
}

function markupShoppingLinksList(linkList) {
  const amazonLinkMarkup = markupShoppinLink();
  const spritePath = '../../img/shoppingList-sprite.svg';
  const shoppingLinksMarkup = `
    <ul class="shoppinglist-link-wrap">
      ${markupShoppinLink(
        linkList[0].url,
        spritePath,
        'shoppinglist-book-link-svg-cont-amazon',
        'icon-Amazon'
      )}
      ${markupShoppinLink(
        linkList[1].url,
        spritePath,
        'shoppinglist-book-link-svg-cont',
        'icon-apple-books'
      )}
      ${markupShoppinLink(
        linkList[2].url,
        spritePath,
        'shoppinglist-book-link-svg-cont',
        'icon-book-shop'
      )}
    </ul>
  `;
  return shoppingLinksMarkup;
}

function markupShoppinLink(shrefLink, spritePath, svgClass, svgId) {
  const shoppingLinkMarkup = `
    <li>
      <a href="${shrefLink}" target="_blank" class="shoppinglist-book-link">
        <svg class="${svgClass}">
          <use class="shoppinglist-book-link-svg" href="${spritePath}#${svgId}"></use>
        </svg>
      </a>
    </li>
  `;
  return shoppingLinkMarkup;
}
