const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Get request'
    })
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Post request'
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    if (id === 'special') {
        res.status(200).json({
            message: 'You passed a special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an id'
        })
    }
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Patch request'
    })
});


router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: `Deleting ${id} from database`
    })
});


module.exports = router;