import {createElement} from '../render';

const getFilmsTemplate = () => '<section class="films"></section>';

class MainContainer {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return getFilmsTemplate();
  }

  removeElement() {
    this.#element.remove();
    this.#element = null;
  }
}

export default MainContainer;
