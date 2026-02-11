# Sandbox de métodos de matriz de TripleTen
Esta réplica contiene una colección de ejemplos del uso de métodos array de JavaScript. La mayoría de los archivos JS corresponden a un método de matriz específico. La excepción es `1-loops.js`, que proporciona un resumen del uso de bucles `for` para la iteración sobre una matriz.

No explicaremos la sintaxis en detalle; asumimos que ya la conoces.
## Ejecutar los ejemplos
Puedes ejecutar los archivos JavaScript en la terminal con el comando `nodo filename.js`. Para acceder a la shell, utiliza el atajo de teclado **Ctrl+`**, o seleccionando **barra lateral IZQUIERDA > Todas las herramientas > shells**.

Como cada archivo contiene varios ejemplos, hemos envuelto cada ejemplo en una función. Para ver el resultado, llama a la función y ejecuta el `nodo filename.js` en la terminal.
## Los datos
Muchos ejemplos se basan en los datos que se encuentran en `data.js`: una matriz de objetos que almacenan metadatos de documentación.

Estos datos se importan a cada uno de los archivos de la siguiente manera:
~~~ js
import { documents } from "./data.js"
~~~

Esto esencialmente crea una variable llamada `documents` en ese archivo que almacena la matriz de `data.js`.