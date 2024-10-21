const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Ensure the correct path to your Product model

// Fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Fetch products with filters
router.post('/products/filter', async (req, res) => {
  const filters = req.body.filters || {};  // Filters from request body
  const query = {};  // Empty query for MongoDB

  // Handle price and brand filters
  if (filters.minPrice && filters.maxPrice) {
    query.price = { $gte: filters.minPrice, $lte: filters.maxPrice };
  }
  if (filters.brand) {
    query.brand = filters.brand;
  }

  // Handle specifications filters
  if (filters.specifications) {
    Object.entries(filters.specifications).forEach(([key, value]) => {
      if (value) {
        query[`specifications.${key}`] = value;  // Filter based on nested specifications
      }
    });
  }

  // Fetch products based on the query
  const products = await Product.find(query);
  res.status(200).json(products);  // Return the filtered products
});
// Export the router
module.exports = router;
