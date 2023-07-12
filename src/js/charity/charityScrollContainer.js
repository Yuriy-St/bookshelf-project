import charityArray from './charityArray.js';

const charityBlock = document.querySelector('.charity');

charityBlock.innerHTML = `<div class="charity-header"><h2 class="charity-title">Support Ukraine</h2>
    <svg class="charity-logo"><use href="./svg/charity.svg#ua"></use></svg>
    </div>
    <ul class="charity-list"></ul>
    <button class="btn-scroll" type="button">
    <svg class="arrow-down" >
      <use href="./svg/charity.svg#downarrow"></use>
    </svg>
    </button>`;

const charityList = document.querySelector('.charity-list');
const btnScroll = document.querySelector('.btn-scroll');
const imgArrow = document.querySelector('.arrow-down');

function markupCharityList() {
  return charityArray.map(
    (e, i) => `<li class="charity-item">
    <p class="counter">${addLeadingZero(i + 1)}</p>
    <a href=${e.url} target="_blank"><img src=${e.img} alt="${
      e.title
    }" class="foundation-logo"/></a></li>`
  );
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

export default function renderCharityList() {
  charityList.innerHTML = markupCharityList().join('');
}

const options = {
  threshold: 1.0,
};

const observerToDown = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      onScrollTop();
    }
  });
}, options);

const observerToTop = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      onTop();
    }
  });
}, options);

btnScroll.addEventListener('click', onClick);

function onClick() {
  observerToDown.observe(charityList.lastElementChild);
  observerToTop.observe(charityList.firstElementChild);

  if (!charityList.lastElementChild.isIntersecting) {
    charityList.scrollBy({
      top: 100,
      behavior: 'smooth',
    });
  }

  if (imgArrow.classList.contains('arrow-up')) {
    charityList.scrollBy({
      top: -100,
      behavior: 'smooth',
    });
  }
    
}

function onScrollTop() {
    imgArrow.classList.add('arrow-up'); 
}

function onTop() {
  imgArrow.classList.remove('arrow-up');
}

btnScroll.addEventListener('touchstart', onFocusOn)

function onFocusOn() {
    btnScroll.classList.add("focus")
}

btnScroll.addEventListener('touchend', onFocusOff)

function onFocusOff() {
    btnScroll.classList.remove("focus")
}