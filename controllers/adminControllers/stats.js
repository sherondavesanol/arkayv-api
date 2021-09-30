// Models
const User = require('../../models/User');
const Product = require('../../models/Product');

// Admin Count Function
module.exports.adminCount = () => {
    
    return User.find({isAdmin: true}).then((err, data) => err ? err : data);
};

// Admin Count Function
module.exports.usersCount = () => {
    
    return User.find({isAdmin: false}).then((err, data) => err ? err : data);
};

// Products Count Function
module.exports.productsCount = () => {
    
    return Product.find().then((err, data) => err ? err : data);
};