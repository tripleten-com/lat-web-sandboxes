interface FormValues {
  [key: string]: string;
}

export class SubmitForm {
  private selector: string;
  private element!: HTMLFormElement;
  private inputList!: NodeListOf<HTMLInputElement>;
  private handleFormSubmit: (data: FormValues) => void;

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
    this.inputList = this.element.querySelectorAll(".form__input");

    this.setEventListeners();

    return this.element;
  }

  private getInputValues(): FormValues {
    const formValues: FormValues = {};

    this.inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  private handleSubmit = (evt: SubmitEvent): void => {
    evt.preventDefault();
    this.handleFormSubmit(this.getInputValues());
    this.element.reset();
  };

  private setEventListeners(): void {
    this.element.addEventListener("submit", this.handleSubmit);
  }
}
