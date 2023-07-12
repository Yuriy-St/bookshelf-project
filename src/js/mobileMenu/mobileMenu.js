(() => {
  const burgerMenuRef = document.querySelector('.burger-menu');
  burgerMenuRef.addEventListener('click', () => {
    const mobileMenuRef = document.querySelector('.mobile-menu-container');
    console.log(mobileMenuRef.classList);
    mobileMenuRef.classList.toggle('visually-hidden');
  });
})();
