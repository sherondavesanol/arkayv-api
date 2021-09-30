// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const adminViewOrders = require('../../controllers/adminControllers/adminViewOrders');

// View Users
router.get('/', auth.verify, (req, res) => {

    adminViewOrders().then(data => res.send(data));
});

module.exports = router;