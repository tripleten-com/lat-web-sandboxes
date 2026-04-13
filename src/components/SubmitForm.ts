export class SubmitForm {
  private selector: string;
  private element!: HTMLFormElement;

  constructor({ selector }: { selector: string }) {
    this.selector = selector;
  }
}