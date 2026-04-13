interface CardData {
  text: string;
  image: string;
}

const messageList: CardData[] = [
  {
    text: "Hola, ¡tenemos que configurar nuestro chat lo antes posible!",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_card__image.jpg",
  },
  {
    text: "¡Ahora podemos crear tantas tarjetas como necesitemos!",
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_card__image-lake.jpg",
  },
];

class Card {
  private text: string;
  private image: string;
  private element!: HTMLElement;
  private selector: string;

  constructor({ text, image }: CardData, selector: string) {
    this.text = text;
    this.image = image;
    this.selector = selector;
  }

  private getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      this.selector,
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

messageList.forEach((item) => {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();

  document.body.append(cardElement);
});
