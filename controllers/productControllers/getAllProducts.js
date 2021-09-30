// Models
const Product = require('../../models/Product');

// Get All Products Function
const getAllProducts = () => Product.find().then((err, data) => err ? err : data);

module.exports = getAllProducts;