const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 10,
    },
    description: {
        type: String,
        minLength: 10,
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required:  true,
    },
    date_posted: {
        type: Date,
        default: () => Date.now(),
    },
    product_image: {
        type: [String],
        //required: true
    }
})

module.exports = mongoose.model('Products', productsSchema)