// Modules
const express = require('express');
const router = express.Router();

// Controllers
const login = require('../../controllers/userControllers/login');

router.post('/', (req, res) => {

    login(req.body).then(data => res.send(data));
});

module.exports = router;