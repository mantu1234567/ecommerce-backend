const BagItem = require("../models/bagModel");

// Get all products
const getAllBagItem = async (req, res) => {
  try {
      const products = await BagItem.find();
      res.json(products);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const addBagItem = async (req, res) => {
  try {
    const newBagItem = new BagItem(req.body); // Create a new bag item instance
    const savedBagItem = await newBagItem.save(); // Save to MongoDB
    res.status(201).json(savedBagItem); // Return the saved bag item
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a bag item by ID
const deleteBagItem = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL parameters
    const deletedItem = await BagItem.findByIdAndDelete(id); // Find and delete the item

    if (!deletedItem) {
      return res.status(404).json({ message: "Bag item not found" });
    }

    res.json({ message: "Bag item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addBagItem, getAllBagItem, deleteBagItem };
