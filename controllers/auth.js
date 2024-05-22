import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { token } from "morgan";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../private.key"),
  "utf-8"
);
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "../public.key"),
  "utf-8"
);

export const signUp = (req, res) => {
  const user = new User(req.body);
  var token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
  user.token = token;
  const hashPS = bcrypt.hashSync(req.body.password, 10);
  user.password = hashPS;
  user
    .save()
    .then((doc) => {
      res.status(201).json(doc);
      console.log("user created...");
    })
    .catch((err) => res.status(400).json(err));
};

export const logIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const isAuth = bcrypt.compareSync(req.body.password, user.password);
    console.log(isAuth);
    if (isAuth) {
      const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
      res.status(201).json(token);
    }
  } catch (err) {
    console.log(err.message);
    res.status(401).json(err);
  }
};
