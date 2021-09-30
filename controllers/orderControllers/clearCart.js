// Models
const User = require('../../models/User');

// Clear Cart Function
const clearCart = (reqBody) => {
    
    const userId = reqBody.userId;
    
    return User.findById(userId)
        .then(User => {

            const cart = User.cart;

            cart.splice(0, cart.length);

            return User.save();
        })
        .then((err, data) => err ? err : data);
};

module.exports = clearCart;