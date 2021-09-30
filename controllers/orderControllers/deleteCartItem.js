// Models
const User = require('../../models/User');

// Delete Cart Item Function
const deleteCartItem = (data) => {
    
    const userId = data.userId;
    const courseId = data.courseId;
    
    return User.findById(userId)
        .then(User => {

            const cart = User.cart;

            const cartItemIndex = 
                cart.findIndex(cartItem => cartItem.courseId === courseId);

            cart.splice(cartItemIndex, 1);

            return User.save();
        })
        .then((err, data) => err ? err : data);
};

module.exports = deleteCartItem;