// Modules
const express = require('express');
const router = express.Router();

// Auth
const auth = require('../../controllers/userControllers/auth')

// Controllers
const addToCart = require('../../controllers/orderControllers/addToCart');

// Add To Cart
router.post('/', auth.verify, (req, res) => {

    const data = {
        userId: auth.decode(req.headers.authorization).payload.id,
        productId: req.body.productId,
        addedOn: req.body.addedOn
    };

    addToCart.addToCart(data).then(data => res.send(data));
});

module.exports = router;