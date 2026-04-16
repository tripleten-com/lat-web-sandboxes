// IMPORTANTE: Usamos la extensión .js porque el navegador leerá los archivos compilados.
import { Card } from "./Card.js";
// Usamos 'import type' para indicar que CardData solo se usa para validación en TS.
import type { CardData } from "../types/types.js";

export class DefaultCard extends Card {
  private text: string;
  private image: string;

  constructor({ text, image }: CardData, selector: string) {
    super(selector);
    this.text = text;
    this.image = image!;
  }

  generateCard(): HTMLElement {
    this.element = this.getTemplate();
    this.setEventListeners();

    const cardAvatar = this.element.querySelector(
      ".card__avatar",
    ) as HTMLImageElement;
    const cardParagraph = this.element.querySelector(
      ".card__paragraph",
    ) as HTMLElement;

    cardAvatar.src = this.image;
    cardParagraph.textContent = this.text;

    return this.element;
  }
}
