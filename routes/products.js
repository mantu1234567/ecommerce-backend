// routes/products.js
const express = require('express');
const router = express.Router();
const { getAllProducts, addProduct } = require('../controllers/productController');
const { addBagItem, getAllBagItem, deleteBagItem } = require("../controllers/bagItemController");
// Route to get all products
router.get('/products', getAllProducts);

// Route to add a new product
router.post('/product', addProduct);

router.post('/add/bag',addBagItem);
 
router.get('/get/bags',getAllBagItem);

router.delete('/bag/:id', deleteBagItem);

module.exports = router;
