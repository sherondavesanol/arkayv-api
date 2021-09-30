// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const profile = require('../../controllers/userControllers/profile');

// View Users
router.post('/', auth.verify, (req, res) => {

    profile(req.body.id).then(data => res.send(data));
});

module.exports = router;