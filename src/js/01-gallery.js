import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";
import { UnsplashApi } from "./unsplash-api";

const unsplashApi = new UnsplashApi();

const options = {
  totalItems: 10,
  itemsPerPage: 10,
  visiblePages: 10,
  page: 1,
};

const pagination = new Pagination("tui-pagination-container", options);

const page = pagination.getCurrentPage();
// console.log("page", page);
unsplashApi.getTrandPhotos(page).then((data) => {
  console.log("data", data);
});
