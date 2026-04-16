class Card {
  private text: string;
  private image: string;
  private element!: HTMLElement;

  constructor(text: string, image: string) {
    this.text = text;
    this.image = image;
  }

  private getTemplate(): HTMLElement {
    // Buscamos el template y le aseguramos a TS que es un HTMLTemplateElement
    const cardTemplate = document.querySelector(
      "#card-template",
    ) as HTMLTemplateElement;

    // Clonamos el contenido. El "!" tras querySelector asegura que el elemento existe en el HTML.
    // Usamos "as HTMLElement" porque cloneNode devuelve un tipo Node genérico.
    const cardElement = cardTemplate.content
      .querySelector(".card")!
      .cloneNode(true) as HTMLElement;

    // Devolvemos el elemento clonado, listo para ser modificado con los datos específicos de esta instancia.
    return cardElement;
  }

  generateCard(): HTMLElement {
    // Obtenemos el marcado vacío
    this.element = this.getTemplate();

    // Buscamos los elementos internos y les asignamos su tipo específico.
    const cardAvatar = this.element.querySelector(
      ".card__avatar",
    ) as HTMLImageElement;
    const cardParagraph = this.element.querySelector(
      ".card__paragraph",
    ) as HTMLElement;

    // Inyectamos los datos únicos de esta instancia
    cardAvatar.src = this.image;
    cardParagraph.textContent = this.text;

    // Devolvemos el elemento finalizado listo para ser insertado en el DOM.
    return this.element;
  }
}

// Creamos la instancia (el objeto) con sus datos específicos
const card = new Card(
  "¡Hola! ¿Cómo estás?",
  "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_card__image.jpg",
);

// Generamos el elemento HTML y lo añadimos a la página
const cardElement = card.generateCard();
document.body.append(cardElement);
