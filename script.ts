interface CardData {
  text: string;
  isOwner: boolean;
  image?: string;
}

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

abstract class Card {
  protected element!: HTMLElement;
  private selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  protected getTemplate(): HTMLElement {
    const cardTemplate = document.querySelector(
      this.selector,
    ) as HTMLTemplateElement;
    const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    return cardElement;
  }

  abstract generateCard(): HTMLElement;

  // Usamos una función  flecha.
  // Esto asegura que 'this' siempre apunte a la instancia de Card
  // y no al elemento del DOM que recibió el clic.
  protected handleMessageClick = (): void => {
    const cardText = this.element.querySelector(".card__text") as HTMLElement;
    cardText.classList.toggle("card__text_is-active");
  };

  // Método centralizado para instalar los detectores de eventos.
  protected setEventListeners(): void {
    const cardText = this.element.querySelector(".card__text") as HTMLElement;
    cardText.addEventListener("click", this.handleMessageClick);
  }
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

    // Activamos los detectores de eventos inmediatamente después de obtener el elemento.
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

class UserCard extends Card {
  private text: string;

  constructor({ text }: CardData, selector: string) {
    super(selector);
    this.text = text;
  }

  generateCard(): HTMLElement {
    this.element = this.getTemplate();
    this.setEventListeners();

    const cardParagraph = this.element.querySelector(
      ".card__paragraph",
    ) as HTMLElement;
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
