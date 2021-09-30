// Modules
const express = require('express');
const router = express.Router();

// Auth
const auth = require('../../controllers/userControllers/auth');

// Controllers
const viewCart = require('../../controllers/orderControllers/viewCart');

// View Cart
router.post('/', auth.verify, (req, res) => {

    const userId = auth.decode(req.headers.authorization).payload.id;

    viewCart(userId).then(data => res.send(data));
});

module.exports = router;