import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: [0, "Invalid price"] },
  discountPercentage: {
    type: Number,
    min: [0, "Invalid Min discount"],
    max: [80, "Max Discount  Exceeded"],
    default : 0
  },
  rating: {
    type: Number,
    min: [0, "Invalid Min Rating"],
    max: [5, "Invalid Max Rating"],
    default : 0
  },
  stock: { type: Number, required: true, min: [0, "Invalid Min stock number"] },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String },
  images: [String],
});

export const Product = mongoose.model("Product", productSchema);
