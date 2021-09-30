// Modules
const express = require('express');
const router = express.Router();

// Import Routes
const stats = require('./stats');
const adminViewUsers = require('./adminViewUsers');
const adminViewUser = require('./adminViewUser');
const setAdmin = require('./setAdmin');
const adminViewOrders = require('./adminViewOrders');
const adminViewOrder = require('./adminViewOrder');

// Routes
router.use('/stats', stats);
router.use('/admin-view-users', adminViewUsers);
router.use('/admin-view-user', adminViewUser);
router.use('/set-admin', setAdmin);
router.use('/admin-view-orders', adminViewOrders);
router.use('/admin-view-order', adminViewOrder);

module.exports = router;