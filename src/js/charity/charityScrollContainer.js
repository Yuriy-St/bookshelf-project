import charityArray from "./charityArray.js"

const charityList = document.querySelector('.charity-list');
const btnScroll = document.querySelector('.btn-scroll');

function renderCharityList() {
    return charityArray.map((e, i) => `<li class="charity-item"><p>${addLeadingZero(i+1)}</p><a href=${e.url}>${e.title}</a></li>` )
};

function addLeadingZero(value) {
    return value.toString().padStart(2, '0')
}

export default function markupCharityList() {
    charityList.innerHTML = renderCharityList().join('')
}

const options = {
//   root: charityList,
//   rootMargin: "0px",
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

    charityList.scrollBy({
            top: 100,
            behavior: "smooth",
        })

    observer.observe(charityList.lastElementChild);
}


function onScrollTop() {
    
    charityList.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
    
}