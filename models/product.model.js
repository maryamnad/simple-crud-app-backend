const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quanity is required"],
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    // allows us to have 2 more fields. created at and updated at
  }
);
//Mongoose will look for a collection named 'products' in MongoDB. 
const Product= mongoose.model('Product',ProductSchema)
module.exports = Product