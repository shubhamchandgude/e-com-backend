const express = require('express');
const app = express();
const cors = require('cors');

const products = require('./products');

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send('welcome to our online shop api...');
});

app.get('/products', (req,res) => {
    res.send(products);
});

const port = process.env.PORT || 5000

app.listen(5000, console.log(`Server running on port ${port}`));