export function renderError(parentRef) {
  if (!parentRef) {
    console.error('Can not find target element');
    return;
  }

  parentRef.classList.add('error');
  parentRef.innerHTML = `
    <div class="error_container">
      <p class="error_container--message">
          Oops! Sorry, but we weren't able to get a category list.
          <br>
          Please,
          try reload the page.
      </p>
    </div>
    `;
}
