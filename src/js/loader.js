export function add(parentRef) {
  parentRef.innerHtml = '<span class="loader"></span>';
}

export function remove(parentRef) {
  parentRef.querySelector('.loader').remove();
}
