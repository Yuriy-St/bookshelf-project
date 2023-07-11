import"./main-2d8d1146.js";import{f as k,a as b,b as f}from"./booksApi-454a58ae.js";function w(t={}){if(typeof t!="object")return;const{bookId:e="",bookImage:o="../../img/book_card_plug.png",bookAuthorName:r="Author was stolen",bookTitle:n="Opps, something is wrong :("}=t;return`<li class="book_card" data-bookId="${e}">
      <div class="book_container--img">
        <img src="${o}" alt="${n}, Author:${r}" class="book_card--img" />
        <p class="quick-view">quick view</p>
      </div>
      <h3 class="book_card--title">${n}</h3>
      <p class="book_card--author">${r}</p>
    </li>`}function v(t,e){const r=t[0].list_name,n=h(t);e.innerHTML=g(r),e.insertAdjacentHTML("beforeend",u(n))}function u(t){return`<ul class="bookshelf_category--list">${t.map(o=>w(o)).join("")}</ul>`}function g(t){let e=t.split(" ");const o=e.slice(0,e.length-1).join(" "),r=e.slice(-1);return`<h1 class="bookshelf_category--title">${o} <span class="blue-last-word">${r}</span></h1>`}function h(t){return t.map(o=>{let r=o._id,n=o.author,a=o.book_image,p=o.title;return{bookId:r,bookImage:a,bookAuthorName:n,bookTitle:p}})}let i=null;async function C(t){try{t.innerHTML='<ul class="categories_list list"><li class="categories_list--item current">All categories</li></ul>',i=document.querySelector(".categories_list");const e=await L();i.addEventListener("click",_),i.insertAdjacentHTML("beforeend",S(e))}catch{T(i)}}async function L(){try{const t=await k();return t.sort((e,o)=>e.list_name.localeCompare(o.list_name)),t}catch(t){console.log(t)}}function S(t){return t.map(e=>`<li class="categories_list--item">${e.list_name}</li>`).join("")}function T(t){t.classList.add("error"),t.innerHTML=`
    <div class="error_container">
      <p class="error_container--message">
          Oops! Sorry, but we weren't able to get a category list.
          <br>
          Please,
          try reload the page.
      </p>
    </div>
    `}async function _(t){if(t.target===i)return;$(t.target);const e=await B(t.target.textContent),o=document.querySelector(".bookshelf");v(e,o)}async function B(t){try{return await b(t)}catch(e){console.log(e)}}function $(t){document.querySelector(".current").classList.remove("current"),t.classList.add("current")}const A=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./charity/save-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./charity/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./charity/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./charity/med-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./charity/med-sans.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./charity/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./charity/action-against.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./charity/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./charity/prytula.png"}],E=document.querySelector(".charity");E.innerHTML=`<div class="charity-header"><h2 class="charity-title">Support Ukraine</h2>
    <svg class="charity-logo"><use href="./svg/charity.svg#ua"></use></svg>
    </div>
    <ul class="charity-list"></ul>
    <button class="btn-scroll" type="button">
    <svg class="arrow-down" width="20" height="20">
      <use href="./svg/charity.svg#downarrow"></use>
    </svg>
    </button>`;const s=document.querySelector(".charity-list"),I=document.querySelector(".btn-scroll"),l=document.querySelector(".arrow-down");function M(){return A.map((t,e)=>`<li class="charity-item">
    <p class="counter">${q(e+1)}</p>
    <a href=${t.url} target="_blank"><img src=${t.img} alt="${t.title}" height="32px" class="foundation-logo"/></a></li>`)}function q(t){return t.toString().padStart(2,"0")}function j(){s.innerHTML=M().join("")}const m={threshold:1},H=new IntersectionObserver(function(t){t.forEach(function(e){e.isIntersecting&&R()})},m),O=new IntersectionObserver(function(t){t.forEach(function(e){e.isIntersecting&&x()})},m);I.addEventListener("click",P);function P(){H.observe(s.lastElementChild),O.observe(s.firstElementChild),s.lastElementChild.isIntersecting||s.scrollBy({top:100,behavior:"smooth"}),l.classList.contains("arrow-up")&&s.scrollBy({top:-100,behavior:"smooth"})}function R(){l.classList.add("arrow-up")}function x(){l.classList.remove("arrow-up")}let c;function D(){return`
	<label class="theme-switcher">
		<input type="checkbox" />
		<span class="slider round"></span>
	</label>`}function F(t,e="afterbegin"){const o=D();t.insertAdjacentHTML(e,o),c=document.querySelector(".theme-switcher input"),c.addEventListener("change",z)}function N(){const t=localStorage.getItem("theme");t==="theme-dark"&&(y(t),c.checked=!0)}function d(){document.documentElement.classList.remove("theme-dark"),localStorage.removeItem("theme")}function y(t){if(!t){d();return}localStorage.setItem("theme",t),document.documentElement.classList.add(t)}function z(){document.documentElement.classList.toggle("theme-dark"),c.checked?y("theme-dark"):d()}async function U(t){t.innerHTML=g("Best Seller Books"),t.insertAdjacentHTML("beforeend",await Z())}async function W(){try{return await f()}catch(t){return console.error("Error fetching top books:",t),[]}}async function Z(){return(await W()).map(e=>{const r=e.books[0].list_name,n=h(e.books),a=u(n);return`
        <div class="bestbooks_category--container">
          <h2 class="bestbooks_category--name">${r}</h2>
          ${a}
          <button type="button" class="button-brand-ghost button" data-categoryname="${r}">
            SEE MORE
          </button>
        </div>
      `}).join("")}const G=document.querySelector(".categories"),J=document.querySelector(".user-block"),K=document.querySelector(".bookshelf");F(J);N();C(G);U(K);j();
