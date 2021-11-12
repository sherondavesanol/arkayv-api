// Modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Routes
const userRoutes = require('./routes/userRoutes/userRoutes');
const productRoutes = require('./routes/productRoutes/productRoutes');
const adminRoutes = require('./routes/adminRoutes/adminRoutes');
const orderRoutes = require('./routes/orderRoutes/orderRoutes');

// Server
const app = express();
const PORT = process.env.PORT || 4000;

// Initialize Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Database
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewURLParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to database.'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/admin', adminRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
