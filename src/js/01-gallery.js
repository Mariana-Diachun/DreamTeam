import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";
import { UnsplashApi } from "./unsplash-api";
import { createGalleryCards } from "./create_gallery_card";
const listRef = document.querySelector(".js-gallery");
const unsplashApi = new UnsplashApi();

const options = {
  totalItems: 0,
  itemsPerPage: 15,
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
});
