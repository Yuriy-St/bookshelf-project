export function add(parentRef) {
  parentRef.insertAdjacentHTML('beforeend', '<span class="loader"></span>');
}

export function remove(parentRef) {
  parentRef.querySelector('.loader').remove();
}
