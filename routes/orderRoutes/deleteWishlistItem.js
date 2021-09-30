// Modules
const express = require('express');
const router = express.Router();

// Auth
const auth = require('../../controllers/userControllers/auth');

// Controllers
const deleteWishlistItem = require('../../controllers/orderControllers/deleteWishlistItem');

router.put('/', auth.verify, (req, res) => {

    const data = {
        userId: auth.decode(req.headers.authorization).payload.id,
        productId: req.body.productId
    };

    deleteWishlistItem(data).then(data => res.send(data));
});

module.exports = router;