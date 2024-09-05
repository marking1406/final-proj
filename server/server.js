const express = require('express');
const mysql = require('mysql2');

let port = process.env.PORT || 3000;

/// connection to db ///
const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    database: 'imy2',
    user: 'root',
    password: ''
});

connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log('DM i did it');
});

global.connection = connection;

/// create server ///
const app = express();

/// listen port ///
app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
});
