import {documentación} from "./data.js";
// El método sort hace lo que crees que hace. Ordena los elementos de un array.
// Por defecto, ordena los elementos en orden ascendente. 
// La función de callback se utiliza para determinar el orden en el que se colocan los elementos. Los ejemplos lo explicarán.

// Ejemplo 1. Ordena la documentación por dimensionamiento, de menor a mayor.
función ordenarPorTamaño(documentos) {
  return documents.sort((a, b) => {
    // Si a es menor que b, ordena b antes que a.
    // Si a es mayor que b, ordena a antes que b.
    // Si a es igual que b, deja el orden sin cambios.
    return a.size - b.size;
  });
}
// console.log(sortBySize(documentación));

// Ejemplo 2. Expande sortBySize para permitir especificar el criterio de ordenamiento.
función sortBySizeVariableOrder(documentos, descendente) {
  return documents.sort((a, b) => {
    // si descendente es verdad, ordena en orden descendente
    if (descending) {
      return b.size - a.size;
    } else {
      return a.size - b.size;
    }
  });
}
// console.log(sortBySizeVariableOrder(documents, true)); // orden descendente
// console.log(sortBySizeVariableOrder(documents, false)); // orden ascendente

// Ejemplo 3. Ordenar documentos según la propiedad proporcionada. 
// Hemos proporcionado un valor predeterminado ascendente para el parámetro order. 
// Ten en cuenta que tenemos que utilizar diferentes comparaciones para diferentes propiedades.
función sortByPropiedad(documentos, propiedad, orden = "asc") {
  let compare; // Esto guarda el resultado de la función de comparación
  return documents.sort((a, b) => {
    if (propiedad == "dateModified") {

 // Para comparar fechas, necesitamos convertir los objetos a Date usando un conversor.
      compare = new Date(a[propiedad]) - new Date(b[propiedad]);
    } else if (typeof a[propiedad] == "cadena") {
      // Para ordenar las cadenas correctamente, primero conviértelas a minúsculas
      // O utiliza el método localCompare de la cadena.
      comparacion = a[propiedad].localeCompare(b[propiedad], "en", {
        sensitividad: "base",
      });
    } else if (typeof a[propiedad] == "número") {
      // Los números pueden compararse directamente.
      comparación = a[propiedad] - b[propiedad];
    } else {
      return "Propiedad no válida o que no se puede ordenar";
    }
    // Para ordenar en orden descendente, podemos multiplicar la comparación por -1.
    if (order == "desc") {
      compare *= - 1;
    }

    devuelve la comparación;
  });
}
// console.log(sortByProperty(documents, "name"), "desc"); // ordenar por nombre, descendente
// console.log(sortByProperty(documents, "size")); // ordenar por tamaño, ascendente
// console.log(sortByProperty(documents, "dateModified")); // ordenar por fecha, ascendente
// console.log(sortByProperty(documents, "foo")); // propiedad no válida