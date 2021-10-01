// Models
const User = require('../../models/User');

// View Wishlist Function
const viewWishlist = (userId) => {
    
    return User.findById({_id: userId}, {password: 0})
        .then((err, data) => err ? err : data)
        .then(data => data.wishlist);
};

module.exports = viewWishlist;