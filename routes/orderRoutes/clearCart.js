// Modules
const express = require('express');
const router = express.Router();

// Auth
const auth = require('../../controllers/userControllers/auth');

// Controllers
const clearCart = require('../../controllers/orderControllers/clearCart');

// Create Order
router.patch('/', auth.verify, (req, res) => {

    clearCart(req.body).then(data => res.send(data));
});

module.exports = router;