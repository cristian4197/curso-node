const net = require('node:net'); //PROTOCOLO TCP

function findAvailablePort(desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer();

        server.listen(desiredPort, () => {
            const { port } = server.address();
            server.close(() => {
                resolve(port);
            });
        });
        
        server.on('error', (err) => {
            if(err.code === 'EADDRINUSE') {
                // El puerto 0 busca el primer puerto que esta disponible
                // Esto del puerto 0 es solo util para modo de desarrollo
               findAvailablePort(0).then(port => resolve(port));
            } else {
                reject(err);
            }
        });
    });
}

module.exports = {
    findAvailablePort
}