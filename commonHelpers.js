import{a as b,i as l,S as L}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const c=document.querySelector(".load-more-btn"),w="42504906-5b025263817bd530cbe95d02a",S="https://pixabay.com/api/";async function d(s,t,a){const r=`${S}?key=${w}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`;try{const e=await b.get(r);return!e.data.hits||e.data.hits.length===0?l.warning({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#B51B1B",position:"topRight"}):e.data.totalHits<t*a&&(l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none"),e.data}catch(e){throw console.error("Error images:",e),e}}function u(s){const t=document.querySelector(".image-container");s.forEach(r=>{const e=document.createElement("li");e.classList.add("image-card");const o=r.webformatURL,i=r.tags,f=r.likes,g=r.views,p=r.comments,y=r.downloads;e.innerHTML=`
      <a href="${r.largeImageURL}" data-lightbox="gallery" data-title="${i}">
        <img src="${o}" alt="${i}" loading="lazy">
      </a>
      <ul class="card-list">
      <li class="card-list-item">
      <h3 class="card-title">Likes:</h3>
     <p class="card-text"> ${f}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Views:</h3>
     <p class="card-text">${g}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Comments:</h3>
     <p class="card-text">${p}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Downloads:</h3>
     <p class="card-text">${y}</p>
     </li>
     </ul>
     
    `,t.appendChild(e)}),new L(".image-card a").refresh()}const $=document.querySelector(".form-search"),q=document.querySelector(".form-input"),m=document.querySelector(".loader");let n;const v=15;let h;$.addEventListener("submit",x);c.addEventListener("click",C);function x(s){s.preventDefault();const t=q.value.trim();t!==""&&(B(),R(),d(t,n,v).then(a=>{u(a.hits),h=t,n=1,I()}).catch(a=>{console.error(a)}).finally(()=>{H()}))}function C(s){n++,d(h,n,15).then(t=>{u(t.hits),E()}).catch(t=>{console.error(t)})}function E(){const t=document.querySelector(".image-card").getBoundingClientRect().height*2;window.scrollBy({top:t,behavior:"smooth"})}function B(){let s=document.querySelector(".image-container");s.innerHTML=""}function R(){m.style.display="block"}function H(){m.style.display="none"}function I(){c.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
