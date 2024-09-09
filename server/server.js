const express = require('express');
const mysql = require('mysql2');
const util = require('util');
const cors = require('cors')

const {vehiclesRouter, usersRouter, realEstateRouter, furnitureRouter} = require('./routes/index')

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

app.use(
    cors({
    origin: ['http://localhost:5173','http://localhost:3003','https://class.leonardoschool.co.il','https://www.class.leonardoschool.co.il'],
    methods: ['GET', 'POST','PUT','DELETE', 'PATCH'],
    credentials: true,
    })
 );
 
app.use(express.json())

/// router ///
app.use('/api/vehicle',vehiclesRouter)
app.use('/api/users',usersRouter)
app.use('/api/realEstate',realEstateRouter)
app.use('/api/furniture',furnitureRouter)

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (name, email, phone_number, password) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone_number,
        req.body.password
    ];
    connection.query(sql, [values], (err, data) => {
        if (err) {
            return res.json('Error');
        }
        return res.json(data);
    });
});


/// listen port ///
app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
});
