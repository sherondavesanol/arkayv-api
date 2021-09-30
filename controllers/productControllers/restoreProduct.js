// Models
const Product = require('../../models/Product');

// Restore Product Function
const restoreProduct = (id) => Product.findByIdAndUpdate(id, {isActive: true}, {new: true}).then((err, data) => err ? err : data);

module.exports = restoreProduct;