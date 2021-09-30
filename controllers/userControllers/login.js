// Modules
const bcrypt = require('bcrypt');

// Authentication
const auth = require('./auth');

// Models
const User = require('../../models/User');

// Login Function
const login = (reqBody) => {

    const email = reqBody.email;
    const password = reqBody.password;

    return User.findOne({email: email})
    .then(data => {

        if (data !== null) {

            const isPasswordCorrect = bcrypt.compareSync(password, data.password);

            if (isPasswordCorrect === true) {
                return { access: auth.createAccessToken(data.toObject())};   
            } else {
                return { error: 'password incorrect' };
            }
        } else {
                return { error: 'email not found' };
        };
    });
};

module.exports = login;