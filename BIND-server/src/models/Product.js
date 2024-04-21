const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
 
  productName: { type: String, required: [true, "the order is required"] },
  address: {
    type: String,
    required: [true, "the address for the order is required"],
  },
  price: {
    type: String,
    required: [true, "the day for delivery is required"],
  },
  image: {
    type: Number,
  },
  description: {
    type: Array,
  },
 
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
