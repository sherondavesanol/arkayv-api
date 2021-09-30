// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const archiveProduct = require('../../controllers/productControllers/archiveProduct');

// Archive Product
router.put('/', auth.verify, (req, res) => archiveProduct(req.body.id).then(data => res.send(data)));

module.exports = router;