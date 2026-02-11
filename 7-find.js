import {documents } from "./data.js";

// El método find te permite recuperar un elemento con una especificidad de una matriz. 
// Devuelve el primer elemento que pasa las pruebas implementadas por la función de callback.

// Ejemplo 1. Necesitamos una función que recupere un archivo por su nombre.
función buscarArchivoPorNombre(archivos, nombre) {
  return archivos.find((archivo) => {
    return file.name === name;
  });
}
// console.log(findFileByName(documentación, "document.txt"));

// Ejemplo 2. Necesitamos encontrar un archivo por su ID.
función findFileById(archivos, ID) {
  return archivos.find((archivo) => {
    return archivo._id == ID;
  });
}
// console.log(findFileById(documentación, "507f1f77bcf86cd799439010"));

// Ejemplo 3. Si no se encuentra ningún elemento coincidente, el método find devuelve undefined en su lugar.
// Si devuelve un error, queremos que nuestra función devuelva un objeto con un mensaje.
función addedFindFileById(archivos, ID) {
  const archivo = archivos.find((archivo) => {
    return archivo._id == ID;
  })
  
  // Si el archivo no está definido, en su lugar se devuelve el objeto del mensaje.
  archivo de retorno || { message: "Archivo no encontrado" };
}
// console.log(improvedFindFileById(documentación, "507f1f77bcf86cd799439010"));
// console.log(improvedFindFileById(documentación, "non-existent-id"));