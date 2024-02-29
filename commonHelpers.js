import{a as b,i as l,S as L}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const c=document.querySelector(".load-more-btn"),w="42504906-5b025263817bd530cbe95d02a",S="https://pixabay.com/api/";async function d(r,t,a){const s=`${S}?key=${w}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${a}`;try{const e=await b.get(s);return!e.data.hits||e.data.hits.length===0?l.warning({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#B51B1B",position:"topRight"}):e.data.totalHits<t*a&&(l.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none"),e.data}catch(e){throw console.error("Error images:",e),e}}function u(r){const t=document.querySelector(".image-container");r.forEach(s=>{const e=document.createElement("li");e.classList.add("image-card");const o=s.webformatURL,i=s.tags,f=s.likes,g=s.views,p=s.comments,y=s.downloads;e.innerHTML=`
      <a href="${s.largeImageURL}" data-lightbox="gallery" data-title="${i}">
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
    `,t.appendChild(e)}),new L(".image-card a").refresh()}const $=document.querySelector(".form-search"),C=document.querySelector(".form-input"),m=document.querySelector(".loader");let n;const q=15;let h;$.addEventListener("submit",v);c.addEventListener("click",x);function v(r){r.preventDefault();const t=C.value.trim();t!==""&&(R(),H(),d(t,n,q).then(a=>{u(a.hits),h=t,n=1,M()}).catch(a=>{console.error(a)}).finally(()=>{I()}))}function x(r){n++,d(h,n,15).then(t=>{u(t.hits),B()}).catch(t=>{console.error(t)})}function E(){const r=document.querySelector(".image-card");if(r)return r.getBoundingClientRect().height}function B(){const r=E();r&&window.scrollBy({top:r*2,behavior:"smooth"})}function R(){let r=document.querySelector(".image-container");r.innerHTML=""}function H(){m.style.display="block"}function I(){m.style.display="none"}function M(){c.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
