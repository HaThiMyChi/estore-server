const express = require('express');
const productCategories = express();

const pool = require('../shared/pool');

productCategories.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).send(err);
        } else {
            // res.status(200).send('Connection Established');
            pool.query('select * from categories', (err, categories) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).send(categories);
                }
            })
        }

    });
});

module.exports = productCategories;