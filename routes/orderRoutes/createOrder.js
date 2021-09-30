// Modules
const express = require('express');
const router = express.Router();

// Auth
const auth = require('../../controllers/userControllers/auth');

// Controllers
const createOrder = require('../../controllers/orderControllers/createOrder');

// Create Order
router.post('/', auth.verify, (req, res) => {

    createOrder(req.body).then(data => res.send(data));
});

module.exports = router;