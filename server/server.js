const express = require('express');
const mysql = require('mysql2');
const util = require('util');

const {vehiclesRouter} = require('./routes/index')

let port = process.env.PORT || 3000;

/// connection to db ///
const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    database: 'imy2',
    user: 'yakov_admin',
    password: '1234'
});

connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log('DM i did it');
});

global.connection = connection;
global.dbQuery = util.promisify(connection.query).bind(connection);

/// create server ///
const app = express();

/// router ///
app.use('/api/vehicle',vehiclesRouter)

/// listen port ///
app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
});
