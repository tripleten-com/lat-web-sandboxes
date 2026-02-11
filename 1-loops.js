// A menudo, en programación tenemos algún código que queremos ejecutar
// una vez en cada elemento de una colección de elementos. Por ejemplo, podemos
// querer imprimir el nombre de cada persona en una lista de personas.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Podríamos hacer esto sin un bucle así:
función withoutForLoop () {
  console.log(people[0].name);
  console.log(people[1].name);
  console.log(people[2].name);
}
// withoutForLoop();

// ¿Pero qué pasa si hay 100 personas en la lista? - ¡Y muchas cosas más!
// Importante, ¿qué pasa si el contenido de la lista cambia?
// Para dar cuenta de esto, podemos usar un bucle.
función withForLoop() {
  for (let i = 0; i < people.length; i++) {
    // Utilizamos la variable i para acceder a cada elemento de la matriz.
    console.log(people[i].name);
  }
}
// withForLoop();

// Finalmente, veamos en detalle lo que sucede en cada intervalo. Descomenta la
// llamada a la función, ejecuta este archivo en la terminal con `nodo loops.js`
y // observa la salida.
función withDetailedOutput() {
  for (let i = 0; i < people.length; i++) {
    console.log("i is", i);
    console.log("¿es i < people.length?", i < people.length);
    console.log("se ejecuta el body del bucle");
    console.log(people[i].name);
    console.log("se ejecuta la expresión de incremento");
    console.log("fin de iteración\n");
  }
}
// withDetailedOutput();
