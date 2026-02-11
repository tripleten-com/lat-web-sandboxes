import {documentación} from "./data.js";

// El método reduce es el primero que acepta un callback con una firma diferente.
// Un ejemplo ayudará a borrar las diferencias.

// Ejemplo 1. Obtén una suma de los elementos en la matriz de números. Podemos utilizar el método reduce
// método para "reducir" la matriz a un solo valor.
const números = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
// console.log(sum);

// La callback acepta dos argumentos: el acumulador y el valor actual. En la
// primera iteración, el acumulador comienza con el valor del primer elemento en el
// matriz; en la segunda iteración, el acumulador recibe el valor que la callback
// devuelve; y así sucesivamente.

// Ejecuta la función logWithDetails para ver qué sucede en cada iteración.
función logWithDetails() {
  const sum = numbers.reduce(function (accumulator, currentValue) {
    console.log("Iniciar iteración");
    console.log("accumulator is", accumulator);
    console.log("currentValue is", currentValue);
    console.log("Finalizar iteración\n");
    return accumulator + currentValue;
  });
  console.log("sum is", sum);
}
// logWithDetails()

// Ejemplo 2. Por defecto, el acumulador comienza con el primer elemento de la matriz.
// Pero esto se puede cambiar pasando un segundo argumento al método reduce.
// Aquí hay un ejemplo tonto para mostrar la mecánica.
const letras = ["A", "B", "C"];
const letras = letters.reduce(function (acc, curr) {
  return acc + curr;
}, "Ahora conozco mi "); // En la primera iteración, el acumulador es "Ahora conozco mi "
// console.log(lyrics + "'s, ¿la próxima vez no cronometrarás conmigo?")

// Ejemplo 3. Podemos acceder al índice del elemento actual. Si no se especifica ningún valor inicial.
// Entonces, en la primera iteración, el índice del elemento actual es 1.
función withNoInitialValue() {
  const sum = numbers.reduce(function (acc, curr, i) {
    console.log("Iniciar iteración");
    console.log("el acumulador es", acc);
    console.log("el valor actual es", curr);
    console.log("el índice del valor actual es", i);
    console.log( "Finalizar iteración\n");
    return acc + curr;
  });
  console.log("sum is", sum);
}
// withNoInitialValue();

// Pero si pasamos un valor inicial, entonces el índice del elemento actual en el first
// la iteración es 0.
función withInitialValue() {
  const sum = numbers.reduce(function (acc, curr, i) {
    console.log("Iniciar iteración");
    console.log("accumulator is", acc);
    console.log("el valor actual es", curr);
    console.log("el índice del valor actual es", i);
    console.log("Finalizar iteración\n");
    return acc + curr;
  }, 100 ); // especificando un valor inicial de 100
  console.log("sum is", sum);
}
// withInitialValue();

// Ejemplo 3. Necesitamos obtener conteos de archivos base d en su tipo. 
// Los resultados deben proporcionarse en un objeto con claves correspondientes al tipo de objeto.
función contarArchivosPorTipo(documentación) {
  const conteos = documentos.reduce(function (acc, curr) {
    const tipo = curr.tipo;
    si (acc[tipo]) {
      // si el tipo está en el Objeto, agrega uno a su conteo
      acc[tipo] = acc[tipo] + 1;
    } else {
      // de lo contrario, agrega el tipo con un conteo de 1
      acc[tipo] = 1;
    }
    return acc;
  }, {}); // el valor inicial es un objeto vacío donde se rastrearán los conteos
  devuelve los conteos;
}
// console.log(contarArchivosPorTipo(documentación));

// Ejemplo 4. Necesitamos mostrar un buen resultado para nuestro usuario: una tabla markdown con
// dos columnas que enumeran los nombres y dimensionamientos de su documentación. 
// En la parte superior de la tabla debe haber una fila de encabezado. La salida esperada se verá así:
//
// | Nombre | Dimensionamiento |
// | --------- | ---- |
// | Graph.png | 1100 |
// | audio.mp3 | 3000 |
// 
// Los espacios en blanco no importan, eso lo manejará el renderizador de markdown.
función printTable(documentos) {
  const head = "| Name | Size |\n" + "| ---- | ---- |\n";
  const table = documents.reduce(function (acc, curr) {
    return acc + `| ${curr.name} | ${curr.size} |\n` ; // añade una fila a la tabla
  }, head); // el valor inicial son las dos filas superiores de la tabla
  return table;
}
console.log(printTable(documentación));