// Modules
const express = require('express');
const router = express.Router();

// Import Routes
const createProduct = require('./createProduct');
const checkProductName = require('./checkProductName');
const getActiveProducts = require('./getActiveProducts');
const getAllProducts = require('./getAllProducts');
const updateProduct = require('./updateProduct');
const deleteProduct = require('./deleteProduct');
const archiveProduct = require('./archiveProduct');
const restoreProduct = require('./restoreProduct');
const viewProduct = require('./viewProduct');

// Routes
router.use('/create-product', createProduct);
router.use('/check-product-name', checkProductName);
router.use('/get-active-products', getActiveProducts);
router.use('/get-all-products', getAllProducts);
router.use('/update-product', updateProduct);
router.use('/delete-product', deleteProduct);
router.use('/archive-product', archiveProduct);
router.use('/restore-product', restoreProduct);
router.use('/view-product', viewProduct);

module.exports = router;