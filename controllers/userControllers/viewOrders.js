// Models
const Order = require('../../models/Order');

// View Orders Function
viewOrders = (reqBody) => {
    
    return Order.find({userId: reqBody.id}).then((err, data) => err ? err : data);
};

module.exports = viewOrders;