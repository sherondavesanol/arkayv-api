// Models
const Product = require('../../models/Product');

// Get Active Products Function
const getActiveProducts = () => Product.find({isActive: true}).then((err, data) => err ? err : data);

module.exports = getActiveProducts;