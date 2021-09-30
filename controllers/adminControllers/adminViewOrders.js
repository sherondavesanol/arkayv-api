// Models
const Order = require('../../models/Order');

// View Orders Function
adminViewOrders = () => {
    
    return Order.find().then((err, data) => err ? err : data);
};

module.exports = adminViewOrders;