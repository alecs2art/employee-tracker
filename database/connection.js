const mysql = require('mysql2');

const database = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeeDB'
});

database.connect( err => {
    if (err) throw err;
});


module.exports = database;