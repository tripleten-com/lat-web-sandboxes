import { documentación, validedDocuments } from "./data.js";

// El método every es básicamente lo opuesto al método some. Devuelve true
// si la función de callback devuelve true para cada elemento de la matriz.
//
// Entonces, mientras usamos .some() para comprobar si al menos un elemento cumple con algunos criterios,
// utilizamos .every() para comprobar si _every_ item cumple con algunos criterios.

// Ejemplo 1. Ahora tenemos que comprobar si _todos_ los documentos de un lote son válidos
// donde la validez está determinada por la función isValid. Si todos son válidos, enviamos una validación
// mensaje al usuario y continuamos procesando la solicitud.
función esVálida(documento) {
  const isNotTooBig = document.size <= 30000000;
  const hasNoSpaces = !document.name.includes(" ");
  return isNotTooBig && hasNoSpaces;
}

función allAreValid(documentos) {
  // Comprueba si toda la documentación es válida
  return documents.every(isValid);
}
// si (todosSonVálidos(documentación)) {
// // No debería mostrar nada
// console.log("Documentos validados: solicitud de Proceso...");
// }
// if (allAreValid(validatedDocuments)) {
// console.log("Documentación validada: solicitud de Proceso...");
// }
