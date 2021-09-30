// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const checkProductName = require('../../controllers/productControllers/checkProductName');

// View Users
router.post('/', auth.verify, (req, res) => checkProductName(req.body).then(data => res.send(data)));

module.exports = router;