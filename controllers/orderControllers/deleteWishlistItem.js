// Models
const User = require('../../models/User');

// Delete wishlist Item Function
const deleteWishlistItem = (data) => {
    
    const userId = data.userId;
    const productId = data.productId;
    
    return User.findById(userId)
        .then(User => {

            const wishlist = User.wishlist;

            const wishlistItemIndex = 
                wishlist.findIndex(wishlistItem => wishlistItem.productId === productId);

            wishlist.splice(wishlistItemIndex, 1);

            return User.save();
        })
        .then((err, data) => err ? err : data);
};

module.exports = deleteWishlistItem;