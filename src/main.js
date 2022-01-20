import MainNav from './view/main-navigation-view';
import ShowMoreButton from './view/show-more-button-view';
import SortView from './view/sort-view';
import Movie from './view/film-card-view';
import { createStatisticMainTemplate } from './view/statistic-main-view';
import Statistic from './view/statistic-footer-view';
import FilmsDetails from './view/details-view';
import MainContainer from './view/films-view';
import FilterView from './view/filter-view.js';
import FilmsContainer from './view/films-list-container';
import FilmsList from './view/films-list-view';
import Rating from './view/rating-view';
import FilmsEmpty from './view/films-empty';
import { render, RenderPosition } from './render.js';
import { generateFilmCard } from './mock/movie-card.js';
import { generateProfile } from './mock/profile.js';
import { generateFilters } from './mock/filter.js';
import { generateComment } from './mock/comments';
import {
  normalizeFilm,
  normalizeArray,
  normalizeComment,
  normalizeUser,
  filterWatchingFilms,
  filterWatchedFilms,
  filterFavoriteFilms,
  sortTopRatedFilms,
  sortMostCommentedFilms, addMovies,
} from './suppor.js';

const MAX_FILMS_GAP = 5;
const MAX_FILMS_EXTRA = 2;

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const currentUser = normalizeUser(user);
const movies = normalizeArray(generateFilmCard(), normalizeFilm);
const topRatedMovies = sortTopRatedFilms(movies);
const recommendMovies = sortMostCommentedFilms(movies);
const moviesCount = movies.length;
const comments = normalizeArray(generateComment(movies), normalizeComment);
const inWatchListFilms = filterWatchingFilms(movies);
const isWatchedFilms = filterWatchedFilms(movies);
const isFavoriteFilms = filterFavoriteFilms(movies);
const mainContainer = new MainContainer();
const mainMoviesList = new FilmsList('All movies. Upcoming', false);
const topMoviesList = new FilmsList('Top rated', true);
const recommendMoviesList = new FilmsList('Most commented', true);
const mainMoviesContainer = new FilmsContainer();
const topMoviesContainer = new FilmsContainer();
const recommendMoviesContainer = new FilmsContainer();
const moreButton = new ShowMoreButton();

let offset = 5;

const siteNavigationElement = main.querySelector('.main-navigation');
render(siteNavigationElement, new FilterView(films.element, RenderPosition.BEFOREEND);

render(header, new Rating(currentUser).element);
render(main, new MainNav(inWatchListFilms.length, isWatchedFilms.length, isFavoriteFilms.length).element, RenderPosition.AFTERBEGIN);
render(main, mainContainer.element);
render(mainContainer.element, mainMoviesList.element);

if (moviesCount > 0) {
  render(mainContainer.element, new SortView().element, RenderPosition.BEFOREBEGIN);
  render(mainContainer.element, topMoviesList.element);
  render(mainContainer.element, recommendMoviesList.element);
  render(mainMoviesList.element, mainMoviesContainer.element);
  render(topMoviesList.element, topMoviesContainer.element);
  render(recommendMoviesList.element, recommendMoviesContainer.element);
  addMovies(mainMoviesContainer.element, movies.slice(0, MAX_FILMS_GAP));
  addMovies(topMoviesContainer.element, topRatedMovies.slice(0, MAX_FILMS_EXTRA));
  addMovies(recommendMoviesContainer.element, recommendMovies.slice(0, MAX_FILMS_EXTRA));
  render(mainMoviesList.element, moreButton.element);
} else {
  render(mainMoviesList.element, new FilmsEmpty().element);
}

render(footer, new Statistic(moviesCount).element);

if (moreButton.element) {
  const onShowMoreMovies = (evt) => {
    evt.preventDefault();
    addMovies(mainMoviesContainer.element, movies.slice(offset, offset + MAX_FILMS_GAP));
    offset += MAX_FILMS_GAP;

    if (offset >= moviesCount) {
      moreButton.removeElement();
    }
  };

  moreButton.element.addEventListener('click', onShowMoreMovies);
}

const openDetails = (evt) => {
  evt.preventDefault();

  const movieCard = evt.target.closest('.film-card__link');
  if (movieCard) {
    const movieData = movies.find((item) => item.id === movieCard.dataset.id);
    const {comments: commentsIds} = movieData;
    const movieComments = comments.filter((comment) => commentsIds.includes(comment.id));
    const movieDetails = new FilmsDetails(movieData, movieComments);
    const filmDetailsCloseBtn = movieDetails.element.querySelector('.film-details__close-btn');

    render(main, movieDetails.element);
    filmDetailsCloseBtn.addEventListener('click', () => movieDetails.removeElement());
  }
};

mainContainer.element.addEventListener('click', openDetails);
