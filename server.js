const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;

const Product = require('./schemas/Product')

const productsRouter = require('./routes/products')
const authRouter = require('./routes/auth')

const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use(cors())

mongoose.connect("mongodb+srv://porkguy69:51111088@cluster0.ky7vuhd.mongodb.net/coffee", () => {
    console.log('connected to mongodb server')
})

//testing
async function test() {

}

//testing

app.use("/products", productsRouter)
app.use('/', authRouter)
app.use(express.json())

app.listen(PORT, console.log(`Server online on port ${PORT}`))