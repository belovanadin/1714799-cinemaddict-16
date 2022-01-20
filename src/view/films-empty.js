import {createElement} from '../render';

const getFilmsEmptyTemplate = () => '<h2 class="films-list__title">There are no movies in our database</h2>';

class FilmsEmpty {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return getFilmsEmptyTemplate();
  }

  removeElement() {
    this.#element.remove();
    this.#element = null;
  }
}

export default FilmsEmpty;
