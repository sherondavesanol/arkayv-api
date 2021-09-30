// Models
const User = require('../../models/User');

// Set Admin Function
module.exports.setAdmin = (id) => {
    
    return User.findByIdAndUpdate(id, {isAdmin: true}, {new: true}).then((err, data) => err ? err : data);
};