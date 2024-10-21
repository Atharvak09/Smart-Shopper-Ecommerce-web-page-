const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., laptop, mobile, etc.
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  image: { type: String }, // URL of the product image
  description: { type: String } // Optional: A brief description of the product
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
