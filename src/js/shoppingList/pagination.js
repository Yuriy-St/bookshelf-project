import Pagination from 'tui-pagination';

export function createPaginationOptions(
  paginatedItems, paginationVisiblePages
) {
  return {
    totalItems: paginatedItems.length,
    itemsPerPage: 1,
    visiblePages: paginationVisiblePages,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{ type }}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{ type }}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
}

export function initializePagination(options, paginatedItems, renderFunction) {
  const paginationContainer = document.getElementById('pagination');
  const pagination = new Pagination(paginationContainer, options);
  pagination.on('afterMove', function (event) {
    const pageIndex = event.page - 1;
    const pageItems = paginatedItems[pageIndex];
    booksContainer.innerHTML = '';
    renderFunction(pageItems);
  });
}
