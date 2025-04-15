const express = require('express');
const products = express();
const pool = require('../shared/pool');

products.get('/', (req, res) => {
    var mainCategoryId = req.query.mainCategoryid;
    var subCategoryId = req.query.subCategoryid;

    let query = 'select * from products';
    if (subCategoryId) {
        query += ' where category_id = ' + subCategoryId;
    }

    if (mainCategoryId) {
        query = `select products.* from products, categories
            where products.category_id = categories.id and categories.parent_category_id = ${mainCategoryId}`;
    }

    pool.query(query, (error, products) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(products);
        }
    });
});

products.get('/:id', (req, res) => {
    let id = req.params.id;
    pool.query('select * from products where id = ' + id, (error, products) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(products);
        }
    });
});

module.exports = products;