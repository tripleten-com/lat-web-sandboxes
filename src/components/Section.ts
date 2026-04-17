// Usamos <T> para convertir el alias en genérico.
type RendererFunction<T> = (item: T) => void;

// La clase Section ahora acepta un parámetro de tipo T.
export class Section<T> {
  // Ya no usamos any[], sino un array de tipo controlado T[].
  private renderedItems: T[];
  private renderer: RendererFunction<T>;
  private container: HTMLElement;

  // El constructor asegura que los datos y el renderer manejen el mismo tipo T.
  constructor(
    { data, renderer }: { data: T[]; renderer: RendererFunction<T> },
    containerSelector: string,
  ) {
    this.container = document.querySelector(containerSelector) as HTMLElement;
    this.renderedItems = data;
    this.renderer = renderer;
  }

  renderItems(): void {
    this.renderedItems.forEach((item) => {
      // TypeScript ahora sabe exactamente qué propiedades tiene item.
      this.renderer(item);
    });
  }

  setItem(element: HTMLElement): void {
    this.container.append(element);
  }
}
