const messageList: CardData[] = [
  {
    text: "Hola, ¡tenemos que configurar nuestro chat lo antes posible!",
    isOwner: false,
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_card__image.jpg",
  },
  {
    text: "Aquí está la tarjeta de chat del usuario.",
    isOwner: true,
  },
  {
    text: "¡Ahora podemos crear tantas tarjetas como necesitemos!",
    isOwner: false,
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_card__image-lake.jpg",
  },
];

interface CardData {
  text: string;
  isOwner: boolean;
  image?: string;
}

abstract class Card {
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

}

class DefaultCard extends Card {
  private text: string;
  private image: string;

  constructor({ text, image }: CardData, selector: string) {
    super(selector);
    this.text = text;
    this.image = image!;
  }

  generateCard(): HTMLElement {
    this.element = this.getTemplate();

    const cardAvatar = this.element.querySelector(".card__avatar") as HTMLImageElement;
    const cardParagraph = this.element.querySelector(".card__paragraph") as HTMLElement;

    cardAvatar.src = this.image;
    cardParagraph.textContent = this.text;

    return this.element;
  }

}

class UserCard extends Card {
  private text: string;

  constructor({ text }: CardData, selector: string) {
    super(selector);
    this.text = text;
  }

  generateCard(): HTMLElement {
    this.element = this.getTemplate();

    const cardParagraph = this.element.querySelector(".card__paragraph") as HTMLElement;
    cardParagraph.textContent = this.text;

    return this.element;
  }

}

messageList.forEach((item) => {
  const card = item.isOwner 
    ? new UserCard(item, "#card-template-user")
    : new DefaultCard(item, "#card-template-default");

  const cardElement = card.generateCard();
  document.body.append(cardElement);
});

