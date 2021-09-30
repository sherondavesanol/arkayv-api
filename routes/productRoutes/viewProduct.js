// Modules
const express = require('express');
const router = express.Router();

// Controllers
const viewProduct = require('../../controllers/productControllers/viewProduct');

// View Product
router.post('/', (req, res) => {

    viewProduct(req.body.id).then(data => res.send(data));
});

module.exports = router;