import"./main-6415e2c0.js";import{f as g,a as h}from"./booksApi-454a58ae.js";function d(t={}){if(typeof t!="object")return;const{bookId:r="",bookImage:e="../../img/book_card_plug.png",bookAuthorName:o="Author was stolen",bookTitle:i="Opps, something is wrong :("}=t;return`<li class="book_card" data-bookId="${r}">
      <div class="book_container--img">
        <img src="${e}" alt="${i}, Author:${o}" class="book_card--img" />
        <p class="quick-view">quick view</p>
      </div>
      <h3 class="book_card--title">${i}</h3>
      <p class="book_card--author">${o}</p>
    </li>`}function p(t,r){const o=t[0].list_name,i=f(t);r.innerHTML=m(o),r.insertAdjacentHTML("beforeend",y(i))}function y(t){return`<ul class="bookshelf_category--list">${t.map(e=>d(e)).join("")}</ul>`}function m(t){let r=t.split(" ");const e=r.slice(0,r.length-1).join(" "),o=r.slice(-1);return`<h1 class="bookshelf_category--title">${e} <span class="blue-last-word">${o}</span></h1>`}function f(t){return t.map(e=>{let o=e._id,i=e.author,l=e.book_image,u=e.title;return{bookId:o,bookImage:l,bookAuthorName:i,bookTitle:u}})}let s=null;async function k(t){try{t.innerHTML='<ul class="categories_list list"><li class="categories_list--item current">All categories</li></ul>',s=document.querySelector(".categories_list");const r=await b();s.addEventListener("click",C),s.insertAdjacentHTML("beforeend",w(r))}catch{v(s)}}async function b(){try{const t=await g();return t.sort((r,e)=>r.list_name.localeCompare(e.list_name)),t}catch(t){console.log(t)}}function w(t){return t.map(r=>`<li class="categories_list--item">${r.list_name}</li>`).join("")}function v(t){t.classList.add("error"),t.innerHTML=`
    <div class="error_container">
      <p class="error_container--message">
          Oops! Sorry, but we weren't able to get a category list.
          <br>
          Please,
          try reload the page.
      </p>
    </div>
    `}async function C(t){if(t.target===s)return;_(t.target);const r=await L(t.target.textContent),e=document.querySelector(".bookshelf");p(r,e)}async function L(t){try{return await h(t)}catch(r){console.log(r)}}function _(t){document.querySelector(".current").classList.remove("current"),t.classList.add("current")}const S=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./charity/save-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./charity/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./charity/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./charity/med-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./charity/med-sans.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./charity/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./charity/action-against.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./charity/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./charity/prytula.png"}],$=document.querySelector(".charity");$.innerHTML=`<div class="charity-header"><h2 class="charity-title">Support Ukraine</h2>
    <svg class="charity-logo"><use href="./svg/charity.svg#ua"></use></svg>
    </div>
    <ul class="charity-list"></ul>
    <button class="btn-scroll" type="button">
    <svg class="arrow-down" width="20" height="20">
      <use href="./svg/charity.svg#downarrow"></use>
    </svg>
    </button>`;const n=document.querySelector(".charity-list"),T=document.querySelector(".btn-scroll"),a=document.querySelector(".arrow-down");function A(){return S.map((t,r)=>`<li class="charity-item">
    <p class="counter">${I(r+1)}</p>
    <a href=${t.url} target="_blank"><img src=${t.img} alt="${t.title}" height="32px" class="foundation-logo"/></a></li>`)}function I(t){return t.toString().padStart(2,"0")}function M(){n.innerHTML=A().join("")}const c={threshold:1},q=new IntersectionObserver(function(t){t.forEach(function(r){r.isIntersecting&&j()})},c),B=new IntersectionObserver(function(t){t.forEach(function(r){r.isIntersecting&&H()})},c);T.addEventListener("click",E);function E(){q.observe(n.lastElementChild),B.observe(n.firstElementChild),n.lastElementChild.isIntersecting||n.scrollBy({top:100,behavior:"smooth"}),a.classList.contains("arrow-up")&&n.scrollBy({top:-100,behavior:"smooth"})}function j(){a.classList.add("arrow-up")}function H(){a.classList.remove("arrow-up")}const O=document.querySelector(".categories");k(O);M();
