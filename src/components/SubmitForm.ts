// Interfaz para recolectar datos de cualquier número de inputs
interface FormValues {
  [key: string]: string; // Clave dinámica: permite cualquier atributo 'name' del input
}

export class SubmitForm {
  private selector: string;
  private element!: HTMLFormElement;
  private inputList!: NodeListOf<HTMLInputElement>; // Lista de campos del formulario
  private handleFormSubmit: (data: FormValues) => void; // Callback externo

  constructor({
    selector,
    handleFormSubmit,
  }: {
    selector: string;
    handleFormSubmit: (data: FormValues) => void;
  }) {
    this.selector = selector;
    this.handleFormSubmit = handleFormSubmit;
  }

  private getTemplate(): HTMLFormElement {
    const formTemplate = document.querySelector(
      this.selector,
    ) as HTMLTemplateElement;
    const formElement = formTemplate.content
      .querySelector(".form")!
      .cloneNode(true) as HTMLFormElement;

    return formElement;
  }

  generateForm(): HTMLElement {
    this.element = this.getTemplate();
    // Guardamos los inputs una sola vez al generar el formulario
    this.inputList = this.element.querySelectorAll(".form__input");
    this.setEventListeners();

    return this.element;
  }

  private setEventListeners(): void {
    this.element.addEventListener("submit", this.handleSubmit);
  }

  private handleSubmit = (evt: SubmitEvent): void => {
    evt.preventDefault();
    // Enviamos los valores recogidos al callback externo
    this.handleFormSubmit(this.getInputValues());
    this.element.reset(); // Limpiamos el formulario tras enviar
  };

  // Método para crear un objeto con los datos de todos los campos
  private getInputValues(): FormValues {
    const formValues: FormValues = {};

    this.inputList.forEach((input) => {
      formValues[input.name] = input.value; // El 'name' del input es la clave del objeto
    });

    return formValues;
  }
}
