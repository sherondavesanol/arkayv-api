// Modules
const express = require('express');
const router = express.Router();

// Controllers
const viewOrders = require('../../controllers/userControllers/viewOrders');

router.post('/', (req, res) => {

    viewOrders(req.body).then(data => res.send(data));
});

module.exports = router;