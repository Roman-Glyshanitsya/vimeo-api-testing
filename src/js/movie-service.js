const ACCESS_TOKEN = '3aa55aba1526d1c592209a8290dc7b9f';
const BASE_URL = 'https://api.vimeo.com';

export default class VideoApiService {
  constructor() {
    this.page = 1;
    this.perPage = 5; // Кількість відео на сторінку
  }

  fetchVideos() {
    const url = `${BASE_URL}/videos?page=${this.page}&per_page=${this.perPage}`;

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        this.incrementPage();
        return data.data; // Масив відео
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
