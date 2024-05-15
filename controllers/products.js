// import fs from "fs";
// const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const productsData = data.products;

import { Product } from "../models/product.js";

export const createProduct = (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => res.status(400).json(err));
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(201).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.status(201).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
};

export const replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body);
    res.status(201).json(doc);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
