const express = require('express');
const app = express();
const mysql = require('mysql2');
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const users = require('./routes/users');

const PORT = 5001;
const bodyparser = require('body-parser');

const cors = require('cors');
app.use(cors());
app.use(bodyparser.json());

// app.get('/', (req, res) => {
//     res.send('<h1>Hello</h1>');
// })

// app.get('/', (req, res) => {
//     let prodData = {
//         pName: 'Jackets',
//         price: 45,
//         img: 'Shop-1.jpg'
//     };
//     res.status(200).send(prodData);
// });

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'estore',
//     port: 3306,
//     // allows us to have multiple query statements
//     multipleStatements: true
// })

// app.get('/', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             // res.status(200).send('Connection Established');
//             pool.query('select * from categories', (err, categories) => {
//                 if (err) {
//                     res.status(500).send(err);
//                 } else {
//                     res.status(200).send(categories);
//                 }
//             })
//         }

//     });
// });

app.use('/productCategories', productCategories);
app.use('/products', products);
app.use('/users', users);

const server = app.listen(PORT, () => {
    console.log('App is running on the port - 5001');
})