export abstract class Card {
  protected element!: HTMLElement;
  private selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  protected getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(this.selector) as HTMLTemplateElement;
    const cardElement = cardTemplate.content.querySelector(".card")!.cloneNode(true) as HTMLElement;

    return cardElement;
  }

  abstract generateCard(): HTMLElement;

  protected handleMessageClick = (): void => {
    const cardText = this.element.querySelector(".card__text") as HTMLElement;
    cardText.classList.toggle("card__text_is-active");
  }

  protected setEventListeners(): void {
    const cardText = this.element.querySelector(".card__text") as HTMLElement;
    cardText.addEventListener("click", this.handleMessageClick);
  }

}