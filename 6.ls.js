// Este ejercicio sirve para leer archivos de la carpeta actual

const fs = require('node:fs/promises');

// El '.' es para indicar que estoy en la carpeta actual
fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => {
        if(err){
            console.error('Error al leer el directorio:', err);
            return;
        }
    });