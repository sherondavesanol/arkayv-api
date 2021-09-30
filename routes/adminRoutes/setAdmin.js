// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const setAdmin = require('../../controllers/adminControllers/setAdmin');

// Set Admin
router.put('/', auth.verify, (req, res) => {

    setAdmin.setAdmin(req.body.id).then(data => res.send(data));
});

module.exports = router;