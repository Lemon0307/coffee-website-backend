const express = require('express');
const router = express.Router();

products = [
    {"name" : "test 1", "price": 50.00 },
    {"name" : "test 2", "price": 60.00 },
    {"name" : "test 3", "price": 70.00 }
]

router.get("/", (req ,res) => {
    res.json(products)
})

module.exports = router