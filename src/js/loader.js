export function add(parentRef) {
  parentRef.insertAdjacentHTML('afterbegin', '<span class="loader"></span>');
}

export function remove(parentRef) {
  parentRef.querySelector('.loader').remove();
}
