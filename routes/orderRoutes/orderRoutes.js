// Modules
const express = require('express');
const router = express.Router();

// Import Routes
const addToCart = require('./addToCart');
const checkCartItems = require('./checkCartItems');
const viewCart = require('./viewCart');
const createOrder = require('./createOrder');
const deleteCartItem = require('./deleteCartItem');
const clearCart = require('./clearCart');

// Routes
router.use('/add-to-cart', addToCart);
router.use('/check-cart-items', checkCartItems);
router.use('/view-cart', viewCart);
router.use('/create-order', createOrder);
router.use('/delete-cart-item', deleteCartItem);
router.use('/clear-cart', clearCart);

module.exports = router;