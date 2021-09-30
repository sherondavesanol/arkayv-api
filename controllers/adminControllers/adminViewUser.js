// Models
const User = require('../../models/User');

// View Users Function
module.exports.adminViewUser = (id) => {
    
    return User.findOne({_id: id}, {password: 0}).then((err, data) => err ? err : data);
};