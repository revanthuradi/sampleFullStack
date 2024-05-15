import {
  createProduct,
  getProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

import express from "express";

export const router = express.Router();
// C R U D  API

// CREATE

router.post("/products", createProduct);

// READ

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

// UPDATE

router.put("/products/:id", replaceProduct);

router.patch("/products/:id", updateProduct);

// DELETE

router.delete("/products/:id", deleteProduct);
