// Modules
const bcrypt = require('bcrypt');

// Models
const User = require('../../models/User');

// Register Function
const register = (reqBody) => {

    const newUser = new User ({
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        mobileNumber: reqBody.mobileNumber,
        email: reqBody.email,
        password: bcrypt.hashSync(reqBody.password, 10)
    });
    
    return newUser.save().then((err, data) => err ? err : data);
};

module.exports = register;