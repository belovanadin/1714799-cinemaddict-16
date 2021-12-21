import { createMainNavigationTemplate } from './view/main-navigation-view';
import { createShowMoreButtonTemplate } from './view/show-more-button-view';
import { createSortTemplate } from './view/sort-view';
import { createFilmCardTemplate } from './view/film-card-view';
import { createStatisticMainTemplate } from './view/statistic-main-view';
import { createStatisticFooterTemplate } from './view/statistic-footer-view';
import { createProfileTemplate } from './view/profile-view.js';
import { renderTemplate, RenderPosition } from './render.js';

const MOVIE_CARDS = 5;

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

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
