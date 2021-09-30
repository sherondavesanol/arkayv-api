// Models
const User = require('../../models/User');

// Check Wishlist Items Function
const checkWishlistItems = (data) => {
    
    const userId = data.userId;
    const productId = data.productId;
    
    return User.findById({_id: userId})
        .then((err, data) => err ? err : data)
        .then(data => {

            const wishlist = data.wishlist;

            const isAlreadyAdded = 
                wishlist.some(wishlistItem => wishlistItem.productId === productId);

            return isAlreadyAdded;
        })
};

module.exports = checkWishlistItems;