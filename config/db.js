const mysql = require('mysql2');

// Create the connection pool.
const connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db-app',
});

// For pool initialization, see above
connect.getConnection(function (err, connection) {
    if (err) {
        console.log('Error connecting to database')
        return
    }
    console.log('Database connected to suuccessfully')
    connection.release();
});

module.exports = connect