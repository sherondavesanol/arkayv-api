// Modules
const express = require('express');
const router = express.Router();

// Import Routes
const checkEmail = require('./checkEmail');
const register = require('./register');
const login = require('./login');
const userDetails = require('./userDetails');
const profile = require('./profile');
const viewOrders = require('./viewOrders');

// Routes
router.use('/check-email', checkEmail);
router.use('/register', register);
router.use('/login', login);
router.use('/user-details', userDetails);
router.use('/profile', profile);
router.use('/view-orders', viewOrders);

module.exports = router;