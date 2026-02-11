// En bucles.js usamos un bucle for para imprimir los nombres de cada personal en el
// array de personas.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

función withForLoop() {
  for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
  }
}
// withForLoop();

// Este es el bucle de equivalencia utilizando el método forEach. Observa que no necesitamos
// preocuparse por la variable de índice o la longitud de la matriz.
función withForEach() {
  personas.forEach((personal) => {
    console.log(person.name);
  });
}
// withForEach();

// Pero si es necesario, podemos accesar a la variable índice como segundo argumento de
// la función de callback.
función forEachWithIndex() {
  personas.forEach((personal, i) => {
    console.log(` índice: ${i}, name: ${person.name} `);
  });
}
// forEachWithIndex();

// Pasar funciones de callback anónimas a métodos de matriz es común, pero a menudo
// es preferible utilizar funciones con nombre. Ten en cuenta que el uso de logDetailedInfo acepta
// los mismos argumentos que los callbacks anónimos que hemos estado usando.
función logDetailedInfo(personData, i) {
  console.log(` ${i + 1}. ${personData.name} tiene ${personData.age} años. `);
}

// Podemos usar esta función en un método forEach como este. Observa que estamos
// simplemente pasando la función logDetailedInfo por su nombre, no llamándola.
función forEachWithNamedCallback() {
  people.forEach(logDetailedInfo);
}
// forEachWithNamedCallback();
