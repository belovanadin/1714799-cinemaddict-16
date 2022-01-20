import { createElement } from '../render.js';

const getShowMoreButtonTemplate = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export default class ShowMoreButton {
  #element = null;

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return getShowMoreButtonTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
