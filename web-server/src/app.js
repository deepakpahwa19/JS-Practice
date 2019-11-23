const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.send("Product Page");

})

app.use('/', (req, res, next) => {
    res.send('<h1>Home Page</h1>');
})

app.listen(3000, () => {
    console.log('Server is up and running on port 3000');
})