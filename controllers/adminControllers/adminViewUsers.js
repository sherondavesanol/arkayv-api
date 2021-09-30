// Models
const User = require('../../models/User');

// View Users Function
module.exports.adminViewUsers = () => {
    
    return User.find({isAdmin: false}, {password: 0}).then((err, data) => err ? err : data);
};