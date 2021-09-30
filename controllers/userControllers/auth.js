// Modules
const jwt = require('jsonwebtoken');
const secret = 'sherondavesanol';

module.exports.createAccessToken = (userData) => {

    const payload = {
        id: userData._id,
        email: userData.email,
        password: userData.password
    }

    return jwt.sign(payload, secret);
};

module.exports.verify = (req, res, next) => {

    let token = req.headers.authorization;
    
    if (token) {

        token = token.split(' ')[1];

        return jwt.verify(token, secret, (err) => err 
            ? res.sendStatus(403)
            : next()
        );
    };
};

module.exports.decode = (token) => {
    
    if (token) {

        token = token.split(' ')[1];

        return jwt.verify(token, secret, (err) => err 
            ? err
            : jwt.decode(token, { complete: true })
        );
    };
};