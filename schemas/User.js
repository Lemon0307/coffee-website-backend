const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: v => v.includes('@'),
            message: props => `the email you typed (${props}) was not valid`
        },
        wishlist: [mongoose.SchemaTypes.ObjectId],
        cart: [mongoose.SchemaTypes.ObjectId],
    },
    password: {
        type: String,
        required: true,
    },
    profile_picture: String,

})

module.exports = mongoose.model('User', userSchema)