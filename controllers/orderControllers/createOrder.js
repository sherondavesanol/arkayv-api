// Models
const User = require('../../models/User');
const Order = require('../../models/Order');

// Create Order Function
const createOrder = (reqBody) => {

    const newOrder = new Order ({
        userId: reqBody.userId,
        courses: reqBody.courses,
        totalAmount: reqBody.totalAmount,
        purchasedOn: reqBody.purchasedOn
    });
    
    return newOrder.save().then((err, data) => err ? err : data);
};

module.exports = createOrder;