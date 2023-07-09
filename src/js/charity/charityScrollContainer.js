import charityArray from "./charityArray.js";

const charityBlock = document.querySelector('.charity');

charityBlock.innerHTML =
    `<div class="charity-header"><h2 class="charity-title">Support Ukraine</h2>
    <img class="charity-logo" src="../../svg/ua.svg" alt=""></div>
    <ul class="charity-list"></ul>
    <button class="btn-scroll" type="button">
    <img class="arrow-down" src="../../svg/down-arrow.svg" alt="" width="20" height="20">
    </button>`;

const charityList = document.querySelector('.charity-list');
const btnScroll = document.querySelector('.btn-scroll');
const imgArrow = document.querySelector('.arrow-down')

function renderCharityList() {
    return charityArray.map((e, i) => `<li class="charity-item">
    <p class="counter">${addLeadingZero(i + 1)}</p>
    <a href=${e.url} target="_blank"><img src=${e.img} alt="${e.title}" height="32px" class="foundation-logo"/></a></li>`)
};

function addLeadingZero(value) {
    return value.toString().padStart(2, '0')
};

export default function markupCharityList() {
    charityList.innerHTML = renderCharityList().join('')
};

const options = {
  threshold: 1.0, 
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    console.log('h');
    if (entry.isIntersecting) {
        console.log('m')
        onScrollTop()
    }
  });
}, options);

btnScroll.addEventListener('click', onClick)

function onClick() {

    observer.observe(charityList.lastElementChild);

    if (!charityList.lastElementChild.isIntersecting) {
        charityList.scrollBy({
            top: 100,
            behavior: "smooth",
        })
    }

    if (imgArrow.classList.contains("arrow-up")) {
        charityList.scrollTo({
            top: 0,
            behavior: "smooth",
        })
        imgArrow.classList.remove("arrow-up")
    }
}


function onScrollTop() {
    imgArrow.classList.add("arrow-up")
}