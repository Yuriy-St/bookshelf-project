import"./main-33301791.js";import{f as d,a as p}from"./booksApi-454a58ae.js";function y(t={}){if(typeof t!="object")return;const{bookId:e="",bookImage:r="../../img/book_card_plug.png",bookAuthorName:o="Author was stolen",bookTitle:n="Opps, something is wrong :("}=t;return`<li class="book_card" data-bookId="${e}">
      <div class="book_container--img">
        <img src="${r}" alt="${n}, Author:${o}" class="book_card--img" />
        <p class="quick-view">quick view</p>
      </div>
      <h3 class="book_card--title">${n}</h3>
      <p class="book_card--author">${o}</p>
    </li>`}function f(t,e){const o=t[0].list_name,n=w(t);e.innerHTML=b(o),e.insertAdjacentHTML("beforeend",k(n))}function k(t){return`<ul class="bookshelf_category--list">${t.map(r=>y(r)).join("")}</ul>`}function b(t){let e=t.split(" ");const r=e.slice(0,e.length-1).join(" "),o=e.slice(-1);return`<h1 class="bookshelf_category--title">${r} <span class="blue-last-word">${o}</span></h1>`}function w(t){return t.map(r=>{let o=r._id,n=r.author,g=r.book_image,m=r.title;return{bookId:o,bookImage:g,bookAuthorName:n,bookTitle:m}})}let s=null;async function v(t){try{t.innerHTML='<ul class="categories_list list"><li class="categories_list--item current">All categories</li></ul>',s=document.querySelector(".categories_list");const e=await C();s.addEventListener("click",T),s.insertAdjacentHTML("beforeend",L(e))}catch{S(s)}}async function C(){try{const t=await d();return t.sort((e,r)=>e.list_name.localeCompare(r.list_name)),t}catch(t){console.log(t)}}function L(t){return t.map(e=>`<li class="categories_list--item">${e.list_name}</li>`).join("")}function S(t){t.classList.add("error"),t.innerHTML=`
    <div class="error_container">
      <p class="error_container--message">
          Oops! Sorry, but we weren't able to get a category list.
          <br>
          Please,
          try reload the page.
      </p>
    </div>
    `}async function T(t){if(t.target===s)return;$(t.target);const e=await _(t.target.textContent),r=document.querySelector(".bookshelf");f(e,r)}async function _(t){try{return await p(t)}catch(e){console.log(e)}}function $(t){document.querySelector(".current").classList.remove("current"),t.classList.add("current")}const A=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./charity/save-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./charity/hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./charity/united.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./charity/med-corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./charity/med-sans.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./charity/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./charity/action-against.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./charity/world-vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./charity/prytula.png"}],I=document.querySelector(".charity");I.innerHTML=`<div class="charity-header"><h2 class="charity-title">Support Ukraine</h2>
    <svg class="charity-logo"><use href="./svg/charity.svg#ua"></use></svg>
    </div>
    <ul class="charity-list"></ul>
    <button class="btn-scroll" type="button">
    <svg class="arrow-down" width="20" height="20">
      <use href="./svg/charity.svg#downarrow"></use>
    </svg>
    </button>`;const i=document.querySelector(".charity-list"),E=document.querySelector(".btn-scroll"),a=document.querySelector(".arrow-down");function q(){return A.map((t,e)=>`<li class="charity-item">
    <p class="counter">${M(e+1)}</p>
    <a href=${t.url} target="_blank"><img src=${t.img} alt="${t.title}" height="32px" class="foundation-logo"/></a></li>`)}function M(t){return t.toString().padStart(2,"0")}function B(){i.innerHTML=q().join("")}const l={threshold:1},j=new IntersectionObserver(function(t){t.forEach(function(e){e.isIntersecting&&P()})},l),H=new IntersectionObserver(function(t){t.forEach(function(e){e.isIntersecting&&x()})},l);E.addEventListener("click",O);function O(){j.observe(i.lastElementChild),H.observe(i.firstElementChild),i.lastElementChild.isIntersecting||i.scrollBy({top:100,behavior:"smooth"}),a.classList.contains("arrow-up")&&i.scrollBy({top:-100,behavior:"smooth"})}function P(){a.classList.add("arrow-up")}function x(){a.classList.remove("arrow-up")}let c;function F(){return`
	<label class="theme-switcher">
		<input type="checkbox" />
		<span class="slider round"></span>
	</label>`}function R(t,e="afterbegin"){const r=F();t.insertAdjacentHTML(e,r),c=document.querySelector(".theme-switcher input"),c.addEventListener("change",D)}function z(){const t=localStorage.getItem("theme");t==="theme-dark"&&(h(t),c.checked=!0)}function u(){document.documentElement.classList.remove("theme-dark"),localStorage.removeItem("theme")}function h(t){if(!t){u();return}localStorage.setItem("theme",t),document.documentElement.classList.add(t)}function D(){document.documentElement.classList.toggle("theme-dark"),c.checked?h("theme-dark"):u()}const N=document.querySelector(".categories"),U=document.querySelector(".user-block");R(U);z();v(N);B();
