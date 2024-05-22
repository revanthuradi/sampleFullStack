import {
  createProduct,
  getProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

import express from "express";
export const productRouter = express.Router();


// C R U D  API

// CREATE

productRouter.post("/products", createProduct);

// READ

productRouter.get("/products", getProducts);

productRouter.get("/products/:id", getProduct);

// UPDATE

productRouter.put("/products/:id", replaceProduct);

productRouter.patch("/products/:id", updateProduct);

// DELETE

productRouter.delete("/products/:id", deleteProduct);

