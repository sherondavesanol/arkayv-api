// Models
const Product = require('../../models/Product');

// Update Product Function
const updateProduct = (reqBody, reqFile) => {

    const id = reqBody.id;
    const image = reqFile === undefined ? reqBody.image : reqFile.path

    console.log(reqBody, reqFile);

    const newData = {
        name: reqBody.name,
        price: reqBody.price,
        artist: reqBody.artist,
        description: reqBody.description,
        inventory: reqBody.inventory,
        image: image
    };
    
    return Product.findByIdAndUpdate(id, newData, {new: true}).then((err, data) => err ? err : data);
};

module.exports = updateProduct;