export class SubmitForm {
  private selector: string;
  private element!: HTMLFormElement;

  constructor({ selector }: { selector: string }) {
    this.selector = selector;
  }

  private getTemplate(): HTMLFormElement {
    const formTemplate = document.querySelector(this.selector) as HTMLTemplateElement;
    const formElement = formTemplate.content.querySelector(".form")!.cloneNode(true) as HTMLFormElement;

    return formElement;
  }

  generateForm(): HTMLElement {
    this.element = this.getTemplate();
    this.setEventListeners();

    return this.element;
  }

  private setEventListeners(): void {
    this.element.addEventListener("submit", this.handleSubmit);
  }

  private handleSubmit = () => {
    
  }
}