const express = require('express');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const morgan = require('morgan')

const app = express();

// app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'Sending from Use'
//     })
// });

//  Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: { message: error.message }
    })
})

module.exports = app;