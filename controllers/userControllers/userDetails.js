// Models
const User = require('../../models/User');

// Check Email Function
const userDetails = (id) => {
    
    return User.findById({_id: id})
        .then((err, data) => err ? err : data)
};

module.exports = userDetails;