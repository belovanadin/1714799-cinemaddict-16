import { createMainNavigationTemplate } from './view/main-navigation-view';
import { createShowMoreButtonTemplate } from './view/show-more-button-view';
import { createSortTemplate } from './view/sort-view';
import { createFilmCardTemplate } from './view/film-card-view';
import { createStatisticMainTemplate } from './view/statistic-main-view';
import { createStatisticFooterTemplate } from './view/statistic-footer-view';
import { createProfileTemplate } from './view/profile-view.js';
import { createFilmsTemplate } from './view/films-view';
import { createFilterTemplate } from './view/filter-view';
import { createFilmsListContainerTemplate } from './view/films-list-container';
import { createFilmListTemplate } from './view/films-list-view';
import { renderTemplate, RenderPosition } from './render.js';
import { generateFilmCard } from './mock/movie-card.js';
import { generateProfile } from './mock/profile.js';
import { generateFilters } from './mock/filter.js';

const MOVIE_CARDS = 20;
const MOVIE_CARDS_PER_STEP = 5;

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const cards = Array.from({length: MOVIE_CARDS}, generateFilmCard);
const filters = generateFilters(cards);
const profile = generateProfile();

renderTemplate (header, createProfileTemplate(), RenderPosition.BEFOREEND);
renderTemplate (main, createMainNavigationTemplate(), RenderPosition.BEFOREEND);
renderTemplate (main, createSortTemplate(), RenderPosition.BEFOREEND);
renderTemplate(footer, createStatisticFooterTemplate(), RenderPosition.BEFOREEND);

const filmsContainer = main.querySelector('.films-list__container');

for (let i = 0; i < MOVIE_CARDS; i++) {
  renderTemplate(filmsContainer, createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(filmsContainer, createShowMoreButtonTemplate(),RenderPosition.AFTEREND);
renderTemplate(main, createStatisticMainTemplate(), RenderPosition.BEFOREEND);


renderTemplate(header, createProfileTemplate(profile), RenderPosition.BEFOREEND);
renderTemplate(main, createMainNavigationTemplate(), RenderPosition.BEFOREEND);

const siteNavigationElement = main.querySelector('.main-navigation');
renderTemplate(siteNavigationElement, createFilterTemplate(filters), RenderPosition.BEFOREEND);

renderTemplate(main, createSortTemplate(), RenderPosition.BEFOREEND);


renderTemplate(main, createFilmsTemplate(), RenderPosition.BEFOREEND);

const filmsElement = main.querySelector('.films');
renderTemplate(filmsElement, createFilmListTemplate(), RenderPosition.BEFOREEND);

const filmsListElement = filmsElement.querySelector('.films-list');
renderTemplate(filmsListElement, createFilmsListContainerTemplate(), RenderPosition.BEFOREEND);

const filmList = filmsListElement.querySelector('.films-list__container');
for (const card of cards.slice(0, MOVIE_CARDS_PER_STEP)) {
  renderTemplate(filmList, createFilmCardTemplate(card), RenderPosition.BEFOREEND);
}

if (cards.length > MOVIE_CARDS_PER_STEP) {

  let renderFilmCount = MOVIE_CARDS_PER_STEP;

  renderTemplate(filmsListElement, createShowMoreButtonTemplate(), RenderPosition.BEFOREEND);
  const loadMoreButton = filmsListElement.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    cards
      .slice(renderFilmCount, renderFilmCount + MOVIE_CARDS_PER_STEP)
      .forEach((card) => {
        renderTemplate(filmList, createFilmCardTemplate(card), RenderPosition.BEFOREEND);
      });

    renderFilmCount += MOVIE_CARDS_PER_STEP;

    if (renderFilmCount >= cards.length) {
      loadMoreButton.remove();
    }
  });
}


renderTemplate(footer, createStatisticFooterTemplate(), RenderPosition.BEFOREEND);
