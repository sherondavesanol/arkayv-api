// Models
const Product = require('../../models/Product');

// Check Product Name Function
const checkProductName = (reqBody) => {

    const name = reqBody.name;

    return Product.find({name})
        .then((err, data) => err ? err : data)
        .then(data => data.length !== 0 ? true : false);
};

module.exports = checkProductName;