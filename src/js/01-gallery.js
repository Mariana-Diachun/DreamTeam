import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";
import { UnsplashApi } from "./unsplash-api";
import { createGalleryCards } from "./create_gallery_card";
const listRef = document.querySelector(".js-gallery");
const searchForm = document.querySelector(".js-search-form");
const paginationContainer = document.querySelector(".tui-pagination")
const unsplashApi = new UnsplashApi();


const options = {
  totalItems: 0,
  itemsPerPage: 3,
  visiblePages: 5,
  page: 1,
};

const pagination = new Pagination("tui-pagination-container", options);

const page = pagination.getCurrentPage();
// console.log("page", page);
unsplashApi.getTrandPhotos(page).then(({ total, results }) => {
  const markup = createGalleryCards(results);
  listRef.innerHTML = markup;
  pagination.reset(total);
  paginationContainer.classList.remove("is-hidden");
})
  .catch(error => {
    console.log(error);
  });

pagination.on('afterMove', getMorePhotos);

function getMorePhotos (event) {
     const currentPage = event.page;
  unsplashApi.getTrandPhotos(currentPage)
    .then(({ results }) => {
      const markup = createGalleryCards(results);
      listRef.innerHTML = markup;
      
    })
      .catch(error => {
    console.log(error);
      paginationContainer.classList.add("is-hidden");

      });
}

searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { query }
  } = event.currentTarget;
  if (!query.value) {
    console.log("Enter data");
    return;
  }

  pagination.off('afterMove', getMorePhotos);
  pagination.off('afterMove', getMoreSearchPhotos);
  pagination.on('afterMove', getMoreSearchPhotos);
  unsplashApi.query = query.value;
  unsplashApi.getSearchPhotos(page)
    .then(({ total, results }) => {
      if (total === 0) {
      paginationContainer.classList.add("is-hidden");
        listRef.innerHTML = '';
     return }
  const markup = createGalleryCards(results);
  listRef.innerHTML = markup;
  pagination.reset(total);
        paginationContainer.classList.remove("is-hidden");

    })
          .catch(error => {
    console.log(error);
      paginationContainer.classList.add("is-hidden");

      });

    
  
  console.log(query.value);
}

function getMoreSearchPhotos(event) {
  const currentPage = event.page;
     unsplashApi.getSearchPhotos(currentPage).then(({ results }) => {
      const markup = createGalleryCards(results);
      listRef.innerHTML = markup;
      
    });
}