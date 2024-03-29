const path = require('node:path');

// Barra separadora de carpetas segun SO
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

// Nombre fichero con extension
const base = path.basename('/tmp/csv-secret-files/password.txt');
console.log(base);

// Nombre fichero sin extension
const filename = path.basename('/tmp/csv-secret-files/password.txt', '.txt');
console.log(filename);

// Extension de archivo
const extension = path.extname('image.jpg');
const extension2 = path.extname('image.file.jpg');
console.log(extension);
console.log(extension2);