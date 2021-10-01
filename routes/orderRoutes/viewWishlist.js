// Modules
const express = require('express');
const router = express.Router();

// Auth
const auth = require('../../controllers/userControllers/auth');

// Controllers
const viewWishlist = require('../../controllers/orderControllers/viewWishlist');

// View Cart
router.post('/', auth.verify, (req, res) => {

    const userId = auth.decode(req.headers.authorization).payload.id;

    viewWishlist(userId).then(data => res.send(data));
});

module.exports = router;