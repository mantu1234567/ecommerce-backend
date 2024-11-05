// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  discount: { type: Number }
});

module.exports = mongoose.model('BagItem', productSchema);
