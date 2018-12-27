const db = require('./database.conf');

module.exports = {
    all: (calback) => {
        db.all('SELECT * FROM todos', (err, todos) => {
            calback(err, todos);
        })
    },
    add: (obj, calback) => {
        let sql = `INSERT INTO todos (task, start, end, note) VALUES ('${obj.task}', '${obj.start}', '${obj.end}', '${obj.note}')`;
        
        db.run(sql, (err) => {
            calback(err, {
                msg: 'Success Added !'
            });
        })
    }
}