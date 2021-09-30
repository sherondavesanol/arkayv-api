// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const adminViewUser = require('../../controllers/adminControllers/adminViewUser');

// View Users
router.post('/', auth.verify, (req, res) => {

    adminViewUser.adminViewUser(req.body.id).then(data => res.send(data));
});

module.exports = router;