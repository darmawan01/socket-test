const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database(__dirname + '/database.db');

module.exports = db;