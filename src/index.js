import VideoApiService from './js/movie-service';

const videoList = document.querySelector('.video__list');
const loadMoreBtn = document.querySelector('.load-more__button');

const videoApiService = new VideoApiService();

document.addEventListener('DOMContentLoaded', () => {
  loadVideos();
});

loadMoreBtn.addEventListener('click', loadVideos);

function loadVideos() {
  videoApiService
    .fetchVideos()
    .then(renderVideos)
    .catch(error => console.error(error));
}

function renderVideos(videos) {
  const markup = videos
    .map(video => {
      const thumbnail = video.pictures.sizes[2]?.link || ''; // Використовуємо мініатюру (якщо доступна)
      return `
        <li class="video__item">
          <a href="${video.link}" target="_blank" rel="noopener noreferrer">
            <img src="${thumbnail}" alt="${video.name}" class="video__thumbnail">
            <h2 class="video__title">${video.name}</h2>
          </a>
        </li>
      `;
    })
    .join('');

  videoList.insertAdjacentHTML('beforeend', markup);
}
