// Models
const User = require('../../models/User');

// Add To Wishlist Function
const addToWishlist = (data) => {
    
    return User.findById(data.userId)
    .then(User => {

        User.wishlist.push({
            productId: data.productId,
            addedOn: data.addedOn
        });

        return User.save();
    })
    .then((err, data) => err ? err : data)
};

module.exports = addToWishlist;