
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



function displayImg (images) {
  const galleryContainer = document.querySelector(".image-container");


  images.forEach((image) => {
    const imageCard = document.createElement("li");
    imageCard.classList.add("image-card");

    const imageUrl = image.webformatURL;
    const imageAlt = image.tags;
const imageLike = image.likes;
const imageView = image.views;
const imageComments = image.comments;
const imageDownloads = image.downloads;

    imageCard.innerHTML = `
      <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${imageAlt}">
        <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
      </a>
      <ul class="card-list">
      <li class="card-list-item">
      <h3 class="card-title">Likes:</h3>
     <p class="card-text"> ${imageLike}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Views:</h3>
     <p class="card-text">${imageView}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Comments:</h3>
     <p class="card-text">${imageComments}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Downloads:</h3>
     <p class="card-text">${imageDownloads}</p>
     </li>
     </ul>
    `;




    galleryContainer.appendChild(imageCard);
  });


  const lightbox = new SimpleLightbox(".image-card a");
  lightbox.refresh();
}



export { displayImg };



