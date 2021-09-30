// Models
const User = require('../../models/User');

// View Cart Function
const viewCart = (userId) => {
    
    return User.findById({_id: userId}, {password: 0})
        .then((err, data) => err ? err : data)
        .then(data => data.cart);
};

module.exports = viewCart;