export class UnsplashApi {
  #BASE_URL = "https://api.unsplash.com/search";
  #API_KEY = "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";
  #searchParams = new URLSearchParams({
    per_page: 15,
    color: "black",
    orientation: "portrait",
  });
  getTrandPhotos(page) {
    const url = `${this.#BASE_URL}/photos?page=${page}&query=office&client_id=${
      this.#API_KEY
    }&${this.#searchParams}`;

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
