import {createElement} from '../render';

const generateFilmsListContainer = () => '<div class="films-list__container"></div>';

class FilmsContainer {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return generateFilmsListContainer();
  }

  removeElement() {
    this.#element.remove();
    this.#element = null;
  }
}

export default FilmsContainer;
