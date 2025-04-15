const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'estore',
    port: 3306,
    // allows us to have multiple query statements
    multipleStatements: true
})

module.exports = pool;