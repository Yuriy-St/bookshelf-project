import"./main-2d8d1146.js";import{f as w,a as v,b as C}from"./booksApi-f996d83f.js";function L(t={}){if(typeof t!="object")return;const{bookId:e="",bookImage:o="../../img/book_card_plug.png",bookAuthorName:r="Author was stolen",bookTitle:n="Opps, something is wrong :("}=t;return`<li class="book_card" data-bookId="${e}">
      <div class="book_container--img">
        <img src="${o}" alt="${n}, Author:${r}" class="book_card--img" />
        <p class="quick-view">quick view</p>
      </div>
      <h3 class="book_card--title">${n}</h3>
      <p class="book_card--author">${r}</p>
    </li>`}function S(t,e){const r=t[0].list_name,n=d(t);e.innerHTML=h(r),e.insertAdjacentHTML("beforeend",g(n))}function g(t){return`<ul class="bookshelf_category--list">${t.map(o=>L(o)).join("")}</ul>`}function h(t){let e=t.split(" ");const o=e.slice(0,e.length-1).join(" "),r=e.slice(-1);return`<h1 class="bookshelf_category--title">${o} <span class="blue-last-word">${r}</span></h1>`}function d(t){return t.map(o=>{let r=o._id,n=o.author,c=o.book_image,b=o.title;return{bookId:r,bookImage:c,bookAuthorName:n,bookTitle:b}})}async function m(t){t.innerHTML=h("Best Seller Books"),t.insertAdjacentHTML("beforeend",await B()),_()}async function T(){try{return await w()}catch(t){return console.error("Error fetching top books:",t),[]}}async function B(){return(await T()).map(e=>{const r=e.books[0].list_name,n=d(e.books),c=g(n);return`
        <div class="bestbooks_category--container">
          <h2 class="bestbooks_category--name">${r}</h2>
          ${c}
          <button type="button" class="button-brand-ghost button" data-categoryname="${r}">
            SEE MORE
          </button>
        </div>
      `}).join("")}function _(){document.querySelectorAll(".button-brand-ghost").forEach(e=>e.addEventListener("click",y))}let a=null;async function A(t){try{t.innerHTML='<ul class="categories_list list"><li class="categories_list--item current">All categories</li></ul>',a=document.querySelector(".categories_list");const e=await E();a.addEventListener("click",y),a.insertAdjacentHTML("beforeend",$(e))}catch{I(a)}}async function E(){try{const t=await v();return t.sort((e,o)=>e.list_name.localeCompare(o.list_name)),t}catch(t){console.log(t)}}function $(t){return t.map(e=>`<li class="categories_list--item">${e.list_name}</li>`).join("")}function I(t){t.classList.add("error"),t.innerHTML=`
    <div class="error_container">
      <p class="error_container--message">
          Oops! Sorry, but we weren't able to get a category list.
          <br>
          Please,
          try reload the page.
      </p>
    </div>
    `}async function y(t){if(t.target===a)return;const e=document.querySelector(".bookshelf");if(t.target.textContent==="All categories"){m(e),u(t.target);return}let o=t.target.textContent,r=t.target;t.srcElement.nodeName==="BUTTON"&&(o=t.target.dataset.categoryname,r=[...a.children].find(c=>c.textContent===o)),u(r);const n=await M(o);S(n,e)}async function M(t){try{return await C(t)}catch(e){console.log(e)}}function u(t){document.querySelector(".categories_list--item.current").classList.remove("current"),t.classList.add("current")}const q=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./charity/save-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./charity/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./charity/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./charity/med-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./charity/med-sans.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./charity/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./charity/action-against.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./charity/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./charity/prytula.png"}],j=document.querySelector(".charity");j.innerHTML=`<div class="charity-header"><h2 class="charity-title">Support Ukraine</h2>
    <svg class="charity-logo"><use href="./svg/charity.svg#ua"></use></svg>
    </div>
    <ul class="charity-list"></ul>
    <button class="btn-scroll" type="button">
    <svg class="arrow-down" width="20" height="20">
      <use href="./svg/charity.svg#downarrow"></use>
    </svg>
    </button>`;const s=document.querySelector(".charity-list"),H=document.querySelector(".btn-scroll"),l=document.querySelector(".arrow-down");function O(){return q.map((t,e)=>`<li class="charity-item">
    <p class="counter">${N(e+1)}</p>
    <a href=${t.url} target="_blank"><img src=${t.img} alt="${t.title}" height="32px" class="foundation-logo"/></a></li>`)}function N(t){return t.toString().padStart(2,"0")}function P(){s.innerHTML=O().join("")}const k={threshold:1},R=new IntersectionObserver(function(t){t.forEach(function(e){e.isIntersecting&&F()})},k),x=new IntersectionObserver(function(t){t.forEach(function(e){e.isIntersecting&&U()})},k);H.addEventListener("click",D);function D(){R.observe(s.lastElementChild),x.observe(s.firstElementChild),s.lastElementChild.isIntersecting||s.scrollBy({top:100,behavior:"smooth"}),l.classList.contains("arrow-up")&&s.scrollBy({top:-100,behavior:"smooth"})}function F(){l.classList.add("arrow-up")}function U(){l.classList.remove("arrow-up")}let i;function z(){return`
	<label class="theme-switcher">
		<input type="checkbox" />
		<span class="slider round"></span>
	</label>`}function W(t,e="afterbegin"){const o=z();t.insertAdjacentHTML(e,o),i=document.querySelector(".theme-switcher input"),i.addEventListener("change",G)}function Z(){const t=localStorage.getItem("theme");t==="theme-dark"&&(f(t),i.checked=!0)}function p(){document.documentElement.classList.remove("theme-dark"),localStorage.removeItem("theme")}function f(t){if(!t){p();return}localStorage.setItem("theme",t),document.documentElement.classList.add(t)}function G(){document.documentElement.classList.toggle("theme-dark"),i.checked?f("theme-dark"):p()}const J=document.querySelector(".categories"),K=document.querySelector(".user-block"),Q=document.querySelector(".bookshelf");W(K);Z();A(J);m(Q);P();
