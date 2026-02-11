import {documentación} from "./data.js";

// El método map es similar a forEach: acepta una función de callback que es
// llamada en cada elemento de la matriz, y la callback recibe los mismos
// argumentos.

// Pero hay una diferencia muy importante: el método mapear devuelve un nuevo
// array. Esta nueva matriz contiene los valores de retorno producidos al llamar a la
// función en cada elemento.

// Ejemplo 1. Obtener un array que contenga los nombres de todos los documentos.
const docNames = documents.map(function (document) {
  return document.name;
});
// console.log(docNames);

// Ejemplo 2. Antes de renderizar los datos de la documentación en nuestro front end, necesitamos hacer el análisis sintáctico del
// campo dateModified en formato MM/DD/YYYY.
const docsWithLocalDates = documents.map(function (document) {
  const newDate = new Date(document.dateModified).toLocaleDateString();
  document.dateModified = newDate;
  return document;
});
// console.log(docsWithLocalDates);

// Ejemplo 3. Estamos manejando cargas de archivos y hay un límite de dimensionamiento de 30 MB. Si un archivo
// excede el límite, debemos enviar un mensaje de error al usuario. De lo contrario
// enviamos "Archivo subido con éxito".
const fileUploadMessages = documents.map(function (document) {
  if (document.size > 30000000) {
    return "El archivo debe tener menos de 30 MB";
  } else {
    return "El archivo se subió correctamente";
  }
});
// console.log(fileUploadMessages)