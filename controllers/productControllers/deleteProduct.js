// Models
const Product = require('../../models/Product');

// Delete Product Function
const deleteProduct = (id) => Product.findByIdAndDelete({_id: id}).then((err, data) => err ? err : data);

module.exports = deleteProduct;