/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/comments.js":
/*!******************************!*\
  !*** ./src/mock/comments.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateComment": () => (/* binding */ generateComment)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const commentAuthors = ['John Snow', 'Jack Richer', 'Jennifer Smith', 'Velikii'];
const emojis = ['smile', 'sleeping', 'puke', 'angry'];
const text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const generateComment = () => ({
  emotion: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(emojis),
  date: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
  author: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(commentAuthors),
  text: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(text)
});

/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateFilter": () => (/* binding */ generateFilter)
/* harmony export */ });
const filterMap = {
  Watchlist: films => films.filter(film => film.isAddedToWatch).length,
  History: films => films.filter(film => film.isWatched).length,
  Favorites: films => films.filter(film => film.isFavorite).length
};
const generateFilter = films => Object.entries(filterMap).map(([filterName, countFilms]) => ({
  name: filterName,
  count: countFilms(films)
}));

/***/ }),

/***/ "./src/mock/movie-card.js":
/*!********************************!*\
  !*** ./src/mock/movie-card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateFilmCard": () => (/* binding */ generateFilmCard)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/mock/comments.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const ACTORS = ['Al Pacino', 'Robert De Niro', 'Tom Hanks', 'Clint Eastwood', 'Leonardo DiCaprioo'];
const WRITERS = ['Christopher Nolan', 'Stiven Spielberg', 'Stanley Kubrick', 'Martin Scorsese'];
const FilmLength = {
  MIN: 60,
  MAX: 300
};

const generateRandomTitle = () => {
  const titles = ['The Dance of Life', 'Sagebrush Trail', 'The Man with the Golden Arm', 'Santa Claus Conquers the Martians', 'Popeye the Sailor Meets Sindbad the Sailor'];
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, titles.length - 1);
  return titles[randomIndex];
};

const generatePoster = () => {
  const posters = ['made-for-each-other.png', 'popeye-meets-sinbad.png', 'sagebrush-trail.jpg', 'santa-claus-conquers-the-martians.jpg', 'the-dance-of-life.jpg', 'the-great-flamarion.jpg', 'the-man-with-the-golden-arm.jpg'];
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, posters.length - 1);
  return posters[randomIndex];
};

const generateDescription = () => {
  const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, descriptions.length - 1);
  return descriptions[randomIndex];
};

const generateRandomComment = (min = 0, max = 5) => {
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(min, max);
  return Array.from({
    length: randomIndex
  }, _comments_js__WEBPACK_IMPORTED_MODULE_0__.generateComment);
};

const generateGenre = () => {
  const genres = ['Western', 'Drama', 'Mystery', 'Comedy'];
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, genres.length - 1);
  return genres[randomIndex];
};

const generateAuthor = () => {
  const authors = ['Christopher Nolan', 'Stiven Spielberg', 'Stanley Kubrick', 'Martin Scorsese'];
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, authors.length - 1);
  return authors[randomIndex];
};

const generateCountry = () => {
  const country = ['USA', 'Germany', 'Great Britain', 'Sweden', 'France', 'Italy'];
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, country.length - 1);
  return country[randomIndex];
};

const generateAge = () => {
  const age = ['0+', '6+', '12+', '16+', '18+'];
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, age.length - 1);
  return age[randomIndex];
};

const generateDuration = time => Math.floor(time / 60);

const generateFilmCard = () => ({
  title: generateRandomTitle(),
  raiting: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
  poster: generatePoster(),
  age: generateAge(),
  description: generateDescription(),
  comments: generateRandomComment(),
  genre: generateGenre(),
  year: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(1900, 2000),
  author: generateAuthor(),
  writrs: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(WRITERS),
  actors: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ACTORS),
  country: generateCountry(),
  date: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
  duration: generateDuration(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(FilmLength.MIN, FilmLength.MAX)),
  isWatchlist: Boolean(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 1)),
  isWatched: Boolean(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 1)),
  isFavorite: Boolean(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 1))
});

/***/ }),

/***/ "./src/mock/profile.js":
/*!*****************************!*\
  !*** ./src/mock/profile.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateProfile": () => (/* binding */ generateProfile)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


const getRandomStatus = () => {
  const status = ['Movie Buff', 'Movie Critic'];
  const randomIndex = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../util.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, status.length - 1);
  return status[randomIndex];
};

const getRandomAvatar = () => {
  const avatars = ['./images/bitmap@2x.png'];
  return avatars[0];
};

const generateProfile = () => ({
  rating: getRandomStatus(),
  avatar: getRandomAvatar()
});

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate)
/* harmony export */ });
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

/***/ }),

/***/ "./src/view/film-card-view.js":
/*!************************************!*\
  !*** ./src/view/film-card-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmCardTemplate": () => (/* binding */ createFilmCardTemplate)
/* harmony export */ });
const createFilmCardTemplate = filmsCard => {
  const {
    title,
    raiting,
    year,
    duration,
    genre,
    poster,
    description,
    comments,
    isWatchlist,
    isWatched,
    isFavorite
  } = filmsCard;
  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${raiting}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}h ${duration}m</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">Comments: ${comments.length}</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item ${isWatchlist ? 'film-card__controls-item--active' : ' '} film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item ${isWatched ? 'film-card__controls-item--active' : ' '} film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item ${isFavorite ? 'film-card__controls-item--active' : ' '} film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

/***/ }),

/***/ "./src/view/films-list-container.js":
/*!******************************************!*\
  !*** ./src/view/films-list-container.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsListContainerTemplate": () => (/* binding */ createFilmsListContainerTemplate)
/* harmony export */ });
const createFilmsListContainerTemplate = () => `<div class="films-list__container">
  </div>`;

/***/ }),

/***/ "./src/view/films-list-view.js":
/*!*************************************!*\
  !*** ./src/view/films-list-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmListTemplate": () => (/* binding */ createFilmListTemplate)
/* harmony export */ });
const createFilmListTemplate = () => `<section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
  </section>`;

/***/ }),

/***/ "./src/view/films-view.js":
/*!********************************!*\
  !*** ./src/view/films-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilmsTemplate": () => (/* binding */ createFilmsTemplate)
/* harmony export */ });
const createFilmsTemplate = () => `<section class="films">
  </section>`;

/***/ }),

/***/ "./src/view/filter-view.js":
/*!*********************************!*\
  !*** ./src/view/filter-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFilterTemplate": () => (/* binding */ createFilterTemplate)
/* harmony export */ });
const filterName = {
  watchList: {
    hrefName: '#watchlist',
    displayName: 'Watchlist'
  },
  history: {
    hrefName: '#history',
    displayName: 'History'
  },
  favorites: {
    hrefName: '#favorites',
    displayName: 'Favorites'
  }
};

const createFilterItemTemplate = ({
  name,
  count
}) => {
  const {
    hrefName,
    displayName
  } = filterName[name];
  return `<a href=${hrefName}
         class="main-navigation__item">${displayName}
         <span class="main-navigation__item-count">${count}</span>
      </a>`;
};

const createAllMoviesTemplate = () => '<a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>';

const createFilterTemplate = filters => {
  const filterItemsTemplate = filters.map(filter => createFilterItemTemplate(filter)).join('');
  return `<div class="main-navigation__items">
        ${createAllMoviesTemplate()}
        ${filterItemsTemplate}
      </div>`;
};

/***/ }),

/***/ "./src/view/main-navigation-view.js":
/*!******************************************!*\
  !*** ./src/view/main-navigation-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainNavigationTemplate": () => (/* binding */ createMainNavigationTemplate)
/* harmony export */ });
const createMainNavigationTemplate = () => `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">0</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">0</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">0</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;

/***/ }),

/***/ "./src/view/profile-view.js":
/*!**********************************!*\
  !*** ./src/view/profile-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProfileTemplate": () => (/* binding */ createProfileTemplate)
/* harmony export */ });
const createProfileTemplate = () => `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section> `;

/***/ }),

/***/ "./src/view/show-more-button-view.js":
/*!*******************************************!*\
  !*** ./src/view/show-more-button-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShowMoreButtonTemplate": () => (/* binding */ createShowMoreButtonTemplate)
/* harmony export */ });
const createShowMoreButtonTemplate = () => '<button class="films-list__show-more">Show more</button>';

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSortTemplate": () => (/* binding */ createSortTemplate)
/* harmony export */ });
const createSortTemplate = () => `<ul class="sort">
    <li><a href="#" class="sort__button">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button sort__button--active">Sort by rating</a></li>
  </ul>`;

/***/ }),

/***/ "./src/view/statistic-footer-view.js":
/*!*******************************************!*\
  !*** ./src/view/statistic-footer-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStatisticFooterTemplate": () => (/* binding */ createStatisticFooterTemplate)
/* harmony export */ });
const createStatisticFooterTemplate = () => `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`;

/***/ }),

/***/ "./src/view/statistic-main-view.js":
/*!*****************************************!*\
  !*** ./src/view/statistic-main-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStatisticMainTemplate": () => (/* binding */ createStatisticMainTemplate)
/* harmony export */ });
const createStatisticMainTemplate = () => `<section class="statistic">
    <p class="statistic__rank">
      Your rank
      <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      <span class="statistic__rank-label">Movie buff</span>
    </p>

    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
      <label for="statistic-all-time" class="statistic__filters-label">All time</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
      <label for="statistic-today" class="statistic__filters-label">Today</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
      <label for="statistic-week" class="statistic__filters-label">Week</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
      <label for="statistic-month" class="statistic__filters-label">Month</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
      <label for="statistic-year" class="statistic__filters-label">Year</label>
    </form>

    <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">28 <span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        <p class="statistic__item-text">69 <span class="statistic__item-description">h</span> 41 <span class="statistic__item-description">m</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">Drama</p>
      </li>
    </ul>

    <!-- Пример диаграммы -->
    <img src="images/cinemaddict-stats-markup.png" alt="Пример диаграммы">

    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>
  </section>`;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_main_navigation_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/main-navigation-view */ "./src/view/main-navigation-view.js");
/* harmony import */ var _view_show_more_button_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/show-more-button-view */ "./src/view/show-more-button-view.js");
/* harmony import */ var _view_sort_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sort-view */ "./src/view/sort-view.js");
/* harmony import */ var _view_film_card_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/film-card-view */ "./src/view/film-card-view.js");
/* harmony import */ var _view_statistic_main_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/statistic-main-view */ "./src/view/statistic-main-view.js");
/* harmony import */ var _view_statistic_footer_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/statistic-footer-view */ "./src/view/statistic-footer-view.js");
/* harmony import */ var _view_profile_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/profile-view.js */ "./src/view/profile-view.js");
/* harmony import */ var _view_films_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/films-view */ "./src/view/films-view.js");
/* harmony import */ var _view_filter_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/filter-view */ "./src/view/filter-view.js");
/* harmony import */ var _view_films_list_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/films-list-container */ "./src/view/films-list-container.js");
/* harmony import */ var _view_films_list_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/films-list-view */ "./src/view/films-list-view.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _mock_movie_card_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mock/movie-card.js */ "./src/mock/movie-card.js");
/* harmony import */ var _mock_profile_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mock/profile.js */ "./src/mock/profile.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");















const MOVIE_CARDS = 20;
const MOVIE_CARDS_PER_STEP = 5;
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const cards = Array.from({
  length: MOVIE_CARDS
}, _mock_movie_card_js__WEBPACK_IMPORTED_MODULE_12__.generateFilmCard);
const filters = (0,_mock_filter_js__WEBPACK_IMPORTED_MODULE_14__.generateFilters)(cards);
const profile = (0,_mock_profile_js__WEBPACK_IMPORTED_MODULE_13__.generateProfile)();
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(header, (0,_view_profile_view_js__WEBPACK_IMPORTED_MODULE_6__.createProfileTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(main, (0,_view_main_navigation_view__WEBPACK_IMPORTED_MODULE_0__.createMainNavigationTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(main, (0,_view_sort_view__WEBPACK_IMPORTED_MODULE_2__.createSortTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(footer, (0,_view_statistic_footer_view__WEBPACK_IMPORTED_MODULE_5__.createStatisticFooterTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
const filmsContainer = main.querySelector('.films-list__container');

for (let i = 0; i < MOVIE_CARDS; i++) {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(filmsContainer, (0,_view_film_card_view__WEBPACK_IMPORTED_MODULE_3__.createFilmCardTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
}

(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(filmsContainer, (0,_view_show_more_button_view__WEBPACK_IMPORTED_MODULE_1__.createShowMoreButtonTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.AFTEREND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(main, (0,_view_statistic_main_view__WEBPACK_IMPORTED_MODULE_4__.createStatisticMainTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(header, (0,_view_profile_view_js__WEBPACK_IMPORTED_MODULE_6__.createProfileTemplate)(profile), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(main, (0,_view_main_navigation_view__WEBPACK_IMPORTED_MODULE_0__.createMainNavigationTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
const siteNavigationElement = main.querySelector('.main-navigation');
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(siteNavigationElement, (0,_view_filter_view__WEBPACK_IMPORTED_MODULE_8__.createFilterTemplate)(filters), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(main, (0,_view_sort_view__WEBPACK_IMPORTED_MODULE_2__.createSortTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(main, (0,_view_films_view__WEBPACK_IMPORTED_MODULE_7__.createFilmsTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
const filmsElement = main.querySelector('.films');
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(filmsElement, (0,_view_films_list_view__WEBPACK_IMPORTED_MODULE_10__.createFilmListTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
const filmsListElement = filmsElement.querySelector('.films-list');
(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(filmsListElement, (0,_view_films_list_container__WEBPACK_IMPORTED_MODULE_9__.createFilmsListContainerTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
const filmList = filmsListElement.querySelector('.films-list__container');

for (const card of cards.slice(0, MOVIE_CARDS_PER_STEP)) {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(filmList, (0,_view_film_card_view__WEBPACK_IMPORTED_MODULE_3__.createFilmCardTemplate)(card), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
}

if (cards.length > MOVIE_CARDS_PER_STEP) {
  let renderFilmCount = MOVIE_CARDS_PER_STEP;
  (0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(filmsListElement, (0,_view_show_more_button_view__WEBPACK_IMPORTED_MODULE_1__.createShowMoreButtonTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
  const loadMoreButton = filmsListElement.querySelector('.films-list__show-more');
  loadMoreButton.addEventListener('click', evt => {
    evt.preventDefault();
    cards.slice(renderFilmCount, renderFilmCount + MOVIE_CARDS_PER_STEP).forEach(card => {
      (0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(filmList, (0,_view_film_card_view__WEBPACK_IMPORTED_MODULE_3__.createFilmCardTemplate)(card), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
    });
    renderFilmCount += MOVIE_CARDS_PER_STEP;

    if (renderFilmCount >= cards.length) {
      loadMoreButton.remove();
    }
  });
}

(0,_render_js__WEBPACK_IMPORTED_MODULE_11__.renderTemplate)(footer, (0,_view_statistic_footer_view__WEBPACK_IMPORTED_MODULE_5__.createStatisticFooterTemplate)(), _render_js__WEBPACK_IMPORTED_MODULE_11__.RenderPosition.BEFOREEND);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map