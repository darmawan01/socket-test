const query = require('./database/database.query');

module.exports = (socket) => {
    query.all((err, result) => {
        socket.emit('all', { "success": err ? false : true, "data": result, "err": err })
    })

    socket.on('save', (req) => {
        query.add(req, (err, result) => {
            
            query.all((err, result) => {
                socket.emit('all', { "success": err ? false : true, "data": result, "err": err })
            })

            socket.emit('save-msg', { "success": err ? false : true, "data": result, "err": err })
            
        })
    })
}