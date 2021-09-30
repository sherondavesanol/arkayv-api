const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {   
        userId: {
            type: String,
            required: [true, "User ID is required"]
        },
        courses: [
            {
                courseId: {
                    type: String,
                    required: [true, "Course ID is required"]
                },
                name: {
                    type: String,
                    required: [true, "Name is required"]
                },
                price: {
                    type: Number,
                    required: [true, "Name is required"]
                }
            }
        ],
        totalAmount: {
            type: Number,
            required: [true, "Total amount is required"]
        },
        purchasedOn: {
            type: Date,
            required: [true, "Date is required"]
        }
    }
);

module.exports = mongoose.model('Order', orderSchema);