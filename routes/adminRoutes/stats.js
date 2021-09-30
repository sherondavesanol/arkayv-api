// Modules
const express = require('express');
const router = express.Router();

// Authentication
const auth = require('../../controllers/userControllers/auth')

// Controllers
const stats = require('../../controllers/adminControllers/stats');

// Users Count
router.get('/users-count', auth.verify, (req, res) => {

    stats.usersCount().then(data => res.send(data));
});

// Courses Count
router.get('/courses-count', auth.verify, (req, res) => {

    stats.coursesCount().then(data => res.send(data));
});

// Admin Count
router.get('/admin-count', auth.verify, (req, res) => {

    stats.adminCount().then(data => res.send(data));
});

module.exports = router;