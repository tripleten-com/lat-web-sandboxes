import { documentación, validedDocuments } from "./data.js";

// El método some acepta una función de callback que se llama en cada elemento.
// Este callback debe devolver un valor booleano. Si el callback devuelve verdad para
// cualquier elemento, el método some devuelve true. De lo contrario, devuelve false.

// Ejemplo 1. El espaciado no se admite en las rutas de archivo en varios contextos.
// Si un lote de documentación contiene un espaciado en su nombre, debe aparecer un mensaje de advertencia.
// Enviado:
función contieneEspacios(documentos) {
  return documents.some(function (document) {
    return document.name.includes(" ");
  });
}
// si (contieneEspacios(documentación)) {
// console.log("Uno o más nombres de archivo no válidos");
// }
// if (containsSpaces(validatedDocuments)) {
// console.log("Uno o más nombres de archivo no válidos"); // No debe mostrar nada
// }

// Ejemplo 2. Necesitamos enviar un mensaje al usuario si uno o más archivos son demasiado grandes.
función esArchivoDemasiadoGrande(documentos) {
  return documents.some(function (document) {
    return document.size > 30000000;
  });
}
// si (esArchivoDemasiadoGrande(documentación)) {
// console.log("Uno o más archivos tienen más de 30 MB");
// }
// if (isFileTooLarge(validatedDocuments)) {
// console.log("Uno o más archivos tienen más de 30 MB"); // No debe mostrar nada
// }