const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Getting orders...'
    })
});

router.post('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(201).json({
        message: `Order ${orderId} created`
    })
})

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders pathc request...'
    })
})

router.delete('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    res.status(200).json({
        message: `Order ${orderId} deleted`
    })
})

module.exports = router;
