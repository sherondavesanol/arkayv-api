// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const restoreProduct = require('../../controllers/productControllers/restoreProduct');

// Archive Course
router.put('/', auth.verify, (req, res) => restoreProduct(req.body.id).then(data => res.send(data)));

module.exports = router;