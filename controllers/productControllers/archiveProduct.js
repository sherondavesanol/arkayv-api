// Models
const Product = require('../../models/Product');

// Archive Product Function
const archiveProduct = (id) => Product.findByIdAndUpdate(id, {isActive: false}, {new: true}).then((err, data) => err ? err : data);

module.exports = archiveProduct;