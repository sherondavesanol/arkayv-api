// Models
const User = require('../../models/User');

// View Profile Function
const profile = (id) => {
    
    return User.findOne({_id: id}, {password: 0}).then((err, data) => err ? err : data);
};

module.exports = profile;