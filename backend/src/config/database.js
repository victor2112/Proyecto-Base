const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'faw'
});

conn.connect(err => {
    if (err) {
        throw err;
    }
});

module.exports = conn;