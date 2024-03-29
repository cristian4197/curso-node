const http = require('node:http');
const { findAvailablePort } = require('./10.free-port');

const desiredPort = process.env.PORT ?? 3000;

// Un servidor recibe y responde peticiones
const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola Mundo');
});

findAvailablePort(desiredPort).then(port => {
    server.listen(0, () => {
        console.log(`Server listening in port http://localhost:${port}`);
    });
});