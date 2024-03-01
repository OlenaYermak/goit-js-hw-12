// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { getImages } from "./js/pixabay-api.js";
import {displayImg } from "./js/render-functions";
import { loadMoreBtn } from "./js/pixabay-api.js";


const searchForm = document.querySelector(".form-search");
const inputForm = document.querySelector(".form-input");
const loader = document.querySelector(".loader");


let pageCurrent;
const perPage = 15;
let currentQuery;

searchForm.addEventListener("submit", handleFormSubmit);
loadMoreBtn.addEventListener("click", loadMoreImages);


function handleFormSubmit(event) {
  event.preventDefault();

  const QUERY = inputForm.value.trim();

  if (QUERY === "") {
    return;
  }

  clearGallery();

   showLoader();
   getImages(QUERY, pageCurrent, perPage)
       .then(data => {
        displayImg(data.hits);
        currentQuery = QUERY;
        pageCurrent = 1;
        showLoadMoreBtn();
      })
   
       
   .catch(error => {
     console.error(error);
   })
   .finally(() => {
     hideLoader();
   });
}

function loadMoreImages(event) { 

 pageCurrent++;
getImages(currentQuery, pageCurrent, 15)
    .then(data => {
   
      displayImg(data.hits);
       scrollNewImage(); 
     })            
              
   
    .catch(error => {
      console.error(error);
    });
}


function scrollNewImage() {
  const cardHeight = document.querySelector(".image-card").getBoundingClientRect().height;
  
  const scrollHight = cardHeight * 2;
 
window.scrollBy({
       top: scrollHight, 
      behavior: "smooth"
    });
  
}



function clearGallery() {
  let galleryContainer = document.querySelector(".image-container");
  galleryContainer.innerHTML = "";
}

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}
function showLoadMoreBtn() {
  loadMoreBtn.style.display = 'block';
}




