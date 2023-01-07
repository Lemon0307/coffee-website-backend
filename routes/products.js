const express = require('express');
const router = express.Router();
const Product = require('../schemas/Product');

router.get("/", (req ,res) => {
    const product = Product.find()
    res.json(product)
})

router.post('/create-product/', (req, res) => {
    
})

module.exports = router