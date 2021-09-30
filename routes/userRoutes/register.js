// Modules
const express = require('express');
const router = express.Router();

// Controllers
const register = require('../../controllers/userControllers/register');

router.post('/', (req, res) => {

    register(req.body).then(data => res.send(data));
});

module.exports = router;