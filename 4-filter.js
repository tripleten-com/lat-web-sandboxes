import {documents } from "./data.js";

// El método filtrar acepta una función de callback como forEach y mapear, y crea
// un nuevo array como map.
//
// Pero con el filtrar, el callback debe devolver un valor booleano. Si devuelve
// true, el elemento está incluido en la nueva matriz. De lo contrario, se excluye.

// Ejemplo 1. Obtener una matriz que contenga solo los archivos de imagen.
función esArchivoDeImagen(documento) {
  return document.type.startsWith("image/");
}
const imageDocuments = documents.filter(isImageFile);
// console.log(imageDocuments);

// Ejemplo 2. Tenemos una función de eliminación de archivos. Los usuarios seleccionan un archivo para eliminar, un
// la solicitud se envía a nuestro backend y el archivo se elimina de la base de datos. 
// Empezaremos por filtrar el archivo que acabamos de eliminar, utilizando su Identificador para identificarlo.
función handleFileDeletion(docId, documentación) {
  const newDocs = documents.filter(function (document) {
    return document._id !== docId; // conserva toda la documentación excepto la que se eliminó
  });
  return newDocs;
}
const nuevosDocumentos = handleFileDeletion("507f1f77bcf86cd799439011", documentación);
// console.log(newDocs);

// Ejemplo 3. A menudo, los métodos de matriz se encadenan entre sí. Por ejemplo, imagina que
// necesitamos filtrar todos los archivos que no son de imagen, y también convertir el dateModified
// campo a un objeto date.
const imageDocumentsWithLocalDates = documentación
  .filtrar(esArchivoDeImagen)
  .map(function (document) {
    const newDate = new Date(document.dateModified).toLocaleDateString();
    document.dateModified = newDate;
    documentación de devolución;
  });
console.log(imageDocumentsWithLocalDates);