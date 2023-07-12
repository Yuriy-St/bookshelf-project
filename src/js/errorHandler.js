export function renderError(parentRef, message = '') {
  if (!parentRef) {
    console.error('Can not find target element');
    return;
  }

  parentRef.classList.add('error');
  parentRef.innerHTML = `
    <div class="error_container">
      <div class="error_container--message">
          <p>Oops!</p>
          <p>${message || 'Something went wrong.'}</p>
          <p>Please, try reload the page.</p>
      </div>
    </div>
    `;
}
