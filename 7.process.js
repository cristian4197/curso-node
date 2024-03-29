// Argumentos de entrada
//console.log(process.argv);

// Controlar el proceso y su salida
//process.exit(1) //0 todo bien y el proceso termina alli, 1 para caso de error y queremos que salga

// Podemos controlar eventos del proceso
process.on('exit', () => {
    // Limpiar recursos
});

// Current working directory
// Desde donde ejecutamos el proceso
console.log(process.cwd());

// Platform
console.log(process.env.CSV);