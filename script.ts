class Card {
  private text: string;
  private image: string;
  private element!: HTMLElement;

  constructor(text: string, image: string) {
    this.text = text;
    this.image = image;
  }

  private getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      "#card-template",
    ) as HTMLTemplateElement;

    const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    return cardElement;
  }

  generateCard(): HTMLElement {
    this.element = this.getTemplate();

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

const card = new Card(
  "¡Hola! ¿Cómo estás?",
  "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_card__image.jpg",
);

const cardElement = card.generateCard();
document.body.append(cardElement);
