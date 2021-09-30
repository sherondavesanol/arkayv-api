// Modules
const express = require('express');
const router = express.Router();

// Controllers
const getActiveProducts = require('../../controllers/productControllers/getActiveProducts');

// View Active Products
router.get('/', (req, res) => {

    getActiveProducts().then(data => res.send(data));
});

module.exports = router;