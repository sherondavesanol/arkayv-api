// Models
const Product = require('../../models/Product');

// Create Product Function
module.exports.createProduct = (reqBody, reqFile) => {

    const newProduct = new Product ({
        name: reqBody.name,
        price: reqBody.price,
        artist: reqBody.artist,
        image: reqFile.path,
        description: reqBody.description,
        inventory: reqBody.inventory,
        createdOn: reqBody.createdOn
    });
    
    return newProduct.save().then((err, data) => err ? err : data);
};