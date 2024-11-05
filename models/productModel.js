// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    image: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
