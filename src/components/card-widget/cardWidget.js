import { isValidCard, getCardType } from "../../js/cardValidator.js";

export default class CardWidget {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);

    this._element = element;
    this._inputField = this._element.querySelector(".input-field");
    this._submitBtn = this._element.querySelector(".btn-submit");
    this._cards = this._element.querySelectorAll(".card");

    this._inputField.addEventListener("input", this.onInput);
    this._submitBtn.addEventListener("click", this.onSubmit);
  }

  onSubmit(event) {
    event.preventDefault();

    if (isValidCard(this._inputField.value) == "None") {
      this._element.querySelector(".status").className = "status";

      return 0;
    } else if (isValidCard(this._inputField.value)) {
      this._element.querySelector(".status").className = "status";
      this._element.querySelector(".status").classList.add("status-ok");

      return 0;
    }

    this._element.querySelector(".status").className = "status";
    this._element.querySelector(".status").classList.add("status-deny");
  }

  onInput(event) {
    event.preventDefault();
    let cardType = getCardType(this._inputField.value);

    if (cardType) {
      for (const card of this._cards) {
        if (!card.classList.contains(cardType.toLowerCase())) {
          card.classList.add("cdisabled");
          continue;
        }

        card.classList.remove("cdisabled");
      }
    }

    if (!cardType) {
      for (const card of this._cards) {
        card.classList.remove("cdisabled");
      }
    }
  }
}
