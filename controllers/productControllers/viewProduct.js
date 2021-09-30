// Models
const Product = require('../../models/Product');

// View Product Function
const viewProduct = (id) =>  Product.findOne({_id: id}).then((err, data) => err ? err : data);

module.exports = viewProduct;