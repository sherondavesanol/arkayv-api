// Modules
const express = require('express');
const router = express.Router();
const multer = require('multer');

// Authentication
const auth = require('../../controllers/userControllers/auth');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = function(req, file, cb) {
    file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' 
     ? cb(null, true)
     : cb(new Error('Invalid Image File'),false);
};

const upload = multer({
    storage,
    fileFilter, 
    limits: {
    fileSize: 1024 * 1024 * 5
    }
});

// Controllers
const updateProduct = require('../../controllers/productControllers/updateProduct');

// Update Product
router.put('/', auth.verify, upload.single('image'), (req, res) => {
    
    updateProduct(req.body, req.file).then(data => res.send(data));
});

module.exports = router;