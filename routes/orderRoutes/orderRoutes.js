// Modules
const express = require('express');
const router = express.Router();

// Import Routes
const addToCart = require('./addToCart');
const checkCartItems = require('./checkCartItems');
const addToWishlist = require('./addToWishlist');
const checkWishlistItems = require('./checkWishlistItems');
const viewCart = require('./viewCart');
const viewWishlist = require('./viewWishlist');
const createOrder = require('./createOrder');
const deleteCartItem = require('./deleteCartItem');
const clearCart = require('./clearCart');

// Routes
router.use('/add-to-cart', addToCart);
router.use('/check-cart-items', checkCartItems);
router.use('/add-to-wishlist', addToWishlist);
router.use('/check-wishlist-items', checkWishlistItems);
router.use('/view-cart', viewCart);
router.use('/view-wishlist', viewWishlist);
router.use('/create-order', createOrder);
router.use('/delete-cart-item', deleteCartItem);
router.use('/clear-cart', clearCart);

module.exports = router;