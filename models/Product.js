const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        price: {
            type: Number,
            required: [true, 'Price is required']
        },
        artist: {
            type: String,
            required: [true, 'Artist is required']
        },
        image: {
            type: String,
            required: [true, 'Image is required']
        },
        description: {
            type: String,
            required: [true, 'Description is required']
        },
        inventory: {
            type: Number,
            required: [true, "Inventory is required"]
        },
        createdOn: {
            type: Date,
            required: [true, "Date is required"]
        },
        isActive: {
            type: Boolean,
            default: true
        }
    }
);

module.exports = mongoose.model('Product', productSchema);