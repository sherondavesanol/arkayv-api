// Models
const Order = require('../../models/Order');

// View Order Function
const adminViewOrder = (id) => {
    
    return Order.findOne({_id: id}).then((err, data) => err ? err : data);
};

module.exports = adminViewOrder;