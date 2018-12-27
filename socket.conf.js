const socketHandlers = require('./socket.handlers');

module.exports = {
    socketConf (io) {
        io.on('connection', (socket) => {
            socket.emit('connected', {
                "status": "Client was connected."
            })

            socketHandlers(socket);            
        });
    }
}