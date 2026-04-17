export class SubmitForm {
  private selector: string;
  private element!: HTMLFormElement;

  constructor({ selector }: { selector: string }) {
    this.selector = selector;
  }

  // Buscamos la plantilla en el HTML y clonamos el formulario
  private getTemplate(): HTMLFormElement {
    const formTemplate = document.querySelector(
      this.selector,
    ) as HTMLTemplateElement;
    const formElement = formTemplate.content
      .querySelector(".form")!
      .cloneNode(true) as HTMLFormElement;

    return formElement;
  }

  // Preparamos el elemento para ser insertado en la página
  generateForm(): HTMLElement {
    this.element = this.getTemplate();
    this.setEventListeners();

    return this.element;
  }

  private setEventListeners(): void {
    this.element.addEventListener("submit", this.handleSubmit);
  }

  // Usamos una función de flecha para no perder el contexto 'this'
  private handleSubmit = () => {};
}
