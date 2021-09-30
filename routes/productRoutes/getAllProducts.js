// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const getAllProducts = require('../../controllers/productControllers/getAllProducts');

// Get All Products
router.get('/', auth.verify, (req, res) => getAllProducts().then(data => res.send(data)));

module.exports = router;