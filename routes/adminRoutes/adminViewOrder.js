// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const adminViewOrder = require('../../controllers/adminControllers/adminViewOrder');

// View Order
router.post('/', auth.verify, (req, res) => {

    adminViewOrder(req.body.id).then(data => res.send(data));
});

module.exports = router;