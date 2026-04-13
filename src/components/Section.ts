type RendererFunction<T> = (item: T) => void;

export class Section<T> {
  private renderedItems: T[];
  private renderer: RendererFunction<T>;
  private container: HTMLElement;

  constructor({ data, renderer }: { data: T[], renderer: RendererFunction<T> }, containerSelector: string) {
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