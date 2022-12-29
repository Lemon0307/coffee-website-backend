const express = require('express');
const mongo = require('mongodb');
const app = express();
const PORT = 8000;

const productsRouter = require('./routes/products')

const cors = require('cors');

const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use(cors())


app.use("/", productsRouter)

app.listen(PORT, console.log(`Server online on port ${PORT}`))