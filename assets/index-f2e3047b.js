import"./main-45c1f42c.js";import{r as o}from"./renderCategoriesScrollbar-74e666e6.js";const a=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../../img/charity/save-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../../img/charity/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../../img/charity/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../../img/charity/med-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../../img/charity/med-sans.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"../../img/charity/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../../img/charity/action-against.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../../img/charity/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../../img/charity/prytula.png"}],s=document.querySelector(".charity");s.innerHTML=`<div class="charity-header"><h2 class="charity-title">Support Ukraine</h2>
    <img class="charity-logo" src="./svg/ua.svg" alt=""></div>
    <ul class="charity-list"></ul>
    <button class="btn-scroll" type="button">
    <img class="arrow-down" src="./svg/down-arrow.svg" alt="" width="20" height="20">
    </button>`;const r=document.querySelector(".charity-list"),c=document.querySelector(".btn-scroll"),n=document.querySelector(".arrow-down");function l(){return a.map((t,i)=>`<li class="charity-item">
    <p class="counter">${u(i+1)}</p>
    <a href=${t.url} target="_blank"><img src=${t.img} alt="${t.title}" height="32px" class="foundation-logo"/></a></li>`)}function u(t){return t.toString().padStart(2,"0")}function g(){r.innerHTML=l().join("")}const e={threshold:1},h=new IntersectionObserver(function(t){t.forEach(function(i){i.isIntersecting&&d()})},e),m=new IntersectionObserver(function(t){t.forEach(function(i){i.isIntersecting&&y()})},e);c.addEventListener("click",p);function p(){h.observe(r.lastElementChild),m.observe(r.firstElementChild),r.lastElementChild.isIntersecting||r.scrollBy({top:100,behavior:"smooth"}),n.classList.contains("arrow-up")&&r.scrollBy({top:-100,behavior:"smooth"})}function d(){n.classList.add("arrow-up")}function y(){n.classList.remove("arrow-up")}o();g();