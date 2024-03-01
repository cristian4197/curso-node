const fs = require('node:fs');
console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {//Ejecutas este callback
    console.log('Primer Texto:', text)
})

console.log('Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text2) => {//Ejecutas este callback
    console.log('Segundo texto: ', text2)
})

// 3.fs-readFile.js