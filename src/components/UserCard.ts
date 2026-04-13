import { Card } from "./Card.js";
import type { CardData } from "../types/types.js";

export class UserCard extends Card {
  private text: string;

  constructor({ text }: CardData, selector: string) {
    super(selector);
    this.text = text;
  }

  generateCard(): HTMLElement {
    this.element = this.getTemplate();
    this.setEventListeners();

    const cardParagraph = this.element.querySelector(".card__paragraph") as HTMLElement;
    cardParagraph.textContent = this.text;

    return this.element;
  }

}