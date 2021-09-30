// Models
const User = require('../../models/User');

// Add To Cart Function
const addToCart = (data) => {
    
    return User.findById(data.userId)
    .then(User => {

        User.cart.push({
            productId: data.productId,
            addedOn: data.addedOn
        });

        return User.save();
    })
    .then((err, data) => err ? err : data)
};

module.exports = addToCart;