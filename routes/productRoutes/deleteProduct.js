// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const deleteProduct = require('../../controllers/productControllers/deleteProduct');

// Delete Course
router.delete('/', auth.verify, (req, res) => deleteProduct(req.body.id).then(data => res.send(data)));

module.exports = router;