// Modules
const express = require('express');
const router = express.Router();

// Controllers
const checkEmail = require('../../controllers/userControllers/checkEmail');

router.post('/', (req, res) => {

    checkEmail(req.body).then(data => res.send(data));
});

module.exports = router;