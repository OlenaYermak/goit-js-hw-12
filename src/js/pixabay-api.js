import axios from "axios";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

 export const loadMoreBtn = document.querySelector(".load-more-btn");
const KEY = "42504906-5b025263817bd530cbe95d02a";
const BASE_URL = "https://pixabay.com/api/";
// let pageCurrent;
// const perPage = 15; 

async function getImages(QUERY, pageCurrent, perPage) {
    const URL = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageCurrent}&per_page=${perPage}`;
    
    
     try {
    const response = await axios.get(URL);

    if (!response.data.hits || response.data.hits.length === 0) {
      iziToast.warning({
         message: "Sorry, there are no images matching your search query. Please try again!",
         messageColor: "#ffffff", 
        backgroundColor: "#B51B1B",
        position: "topRight",
       });
       }
    else if (
      response.data.totalHits < (pageCurrent * perPage)) {
             iziToast.error({
                 position: "topRight",
                 message: "We're sorry, but you've reached the end of search results."
             });
             loadMoreBtn.style.display = "none";
    }
      

    return response.data;
  } catch (error) {
    console.error("Error images:", error);
    throw error;
  }
}
  

export { getImages };

  
  
  


  
  
  
  
  
  
  
  
