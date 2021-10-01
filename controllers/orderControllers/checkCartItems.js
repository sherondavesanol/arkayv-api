// Models
const User = require('../../models/User');

// Check Cart Items Function
const checkCartItems = (data) => {
    
    const userId = data.userId;
    const productId = data.productId;
    
    return User.findById({_id: userId})
        .then((err, data) => err ? err : data)
        .then(data => {

            const cart = data.cart;

            const isAlreadyAdded = cart.some(cartItem => cartItem.productId === productId);

            return isAlreadyAdded;
        })
};

module.exports = checkCartItems;