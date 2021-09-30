// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const adminViewUsers = require('../../controllers/adminControllers/adminViewUsers');

// View Users
router.get('/', auth.verify, (req, res) => {

    adminViewUsers.adminViewUsers().then(data => res.send(data));
});

module.exports = router;