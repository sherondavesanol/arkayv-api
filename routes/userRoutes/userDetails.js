// Modules
const express = require('express');
const router = express.Router();

// Controllers
const auth = require('../../controllers/userControllers/auth');
const userDetails = require('../../controllers/userControllers/userDetails');

router.get('/', auth.verify, (req, res) => {
    const token = req.headers.authorization;
    const decoded = auth.decode(token);
    const id = decoded.payload.id;

    userDetails(id).then(data => res.send(data));
});

module.exports = router;