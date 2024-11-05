// controllers/productController.js
const Product = require('../models/productModel');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new product
const addProduct = async (req, res) => {
    const { name, description, originalPrice, price, discount, rating, reviews, image } = req.body;
    const product = new Product({
        name,
        description,
        originalPrice,
        price,
        discount,
        rating,
        reviews,
        image
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    addProduct
};
