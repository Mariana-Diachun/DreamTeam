export class UnsplashApi {
  #BASE_URL = "https://api.unsplash.com/search";
  #API_KEY = "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";
  #searchParams = new URLSearchParams({
    per_page: 3,
    color: "black",
    orientation: "portrait",
  });
  #query = "";
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

  getSearchPhotos(page) {
   const url = `${this.#BASE_URL}/photos?page=${page}&query=${this.#query}&client_id=${
      this.#API_KEY
    }&${this.#searchParams}`;

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }); 
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
