// Modules
const express = require('express');
const router = express.Router();

// Auth
const auth = require('../../controllers/userControllers/auth')

// Controllers
const addToWishlist = require('../../controllers/orderControllers/addToWishlist');

// Add To Cart
router.post('/', auth.verify, (req, res) => {

    const data = {
        userId: auth.decode(req.headers.authorization).payload.id,
        productId: req.body.productId,
        addedOn: req.body.addedOn
    };

    addToWishlist(data).then(data => res.send(data));
});

module.exports = router;