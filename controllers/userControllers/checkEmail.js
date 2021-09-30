// Models
const User = require('../../models/User');

// Check Email Function
const checkEmail = (reqBody) => {

    const email = reqBody.email;
    
    return User.find({email: email})
        .then((err, data) => err ? err : data)
        .then(data => data.length !== 0 ? true : false);
};

module.exports = checkEmail;