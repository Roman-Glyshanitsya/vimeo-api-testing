import MovieApiService from './js/movie-service';

const movieListContainer = document.querySelector('.movie-list');
const prevButton = document.querySelector('.prev__button');
const nextButton = document.querySelector('.next__button');

const movieApiService = new MovieApiService();

// Ініціалізація
loadMovies();

// Обробники подій для кнопок пагінації
prevButton.addEventListener('click', onPrevPage);
nextButton.addEventListener('click', onNextPage);

function loadMovies() {
  movieApiService
    .fetchMovies()
    .then(movies => renderMovies(movies.slice(0, 8)))
    .catch(error => console.error('Error:', error));
}

function onPrevPage() {
  movieApiService.decrementPage();
  clearMovieList();
  loadMovies();
  togglePaginationButtons();
}

function onNextPage() {
  movieApiService.incrementPage();
  clearMovieList();
  loadMovies();
  togglePaginationButtons();
}

function renderMovies(movies) {
  const markup = movies
    .map(
      movie => `
       <li class="movie-item">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" >
          <h2>${movie.title}</h2>
          <p>Original language: ${movie.original_language}</p>
          <p>Release date: ${movie.release_date}</p>
          <p>Origin country: ${movie.origin_country}</p>
          <p>Rating: ${movie.vote_average}</p>
        </li>
    `
    )
    .join('');

  movieListContainer.insertAdjacentHTML('beforeend', markup);
}

function clearMovieList() {
  movieListContainer.innerHTML = '';
}

function togglePaginationButtons() {
  prevButton.disabled = movieApiService.page <= 1;
}
