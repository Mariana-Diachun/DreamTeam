export class UnsplashApi {
  #BASE_URL = "https://api.unsplash.com/search";
  #API_KEY = "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";
  getTrandPhotos(page) {
    const url = `${this.#BASE_URL}/photos?page=${page}&query=office&client_id=${
      this.#API_KEY
    }`;

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
