const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');
const cors = require('cors');

const app = express();
app.use(cors());
// Connect to MongoDB
connectDB();

// Middleware to parse JSON body
app.use(express.json());

// Use user routes
app.use('/api', productRoutes);

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
