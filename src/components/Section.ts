type RendererFunction = (item: any) => void;

export class Section {
  private renderedItems: any[];
  private renderer: RendererFunction;
  private container: HTMLElement;

  constructor({ data, renderer }: { data: any[], renderer: RendererFunction }, containerSelector: string) {
    this.container = document.querySelector(containerSelector) as HTMLElement;
    this.renderedItems = data;
    this.renderer = renderer;
  }

  renderItems(): void {
    this.renderedItems.forEach((item) => {
      this.renderer(item);
    })
  }

  setItem(element: HTMLElement): void {
    this.container.append(element);
  }
}