import express from "express";
import morgan from "morgan";
import { productRouter } from "./Routes/product.js";
import { userRouter } from "./Routes/user.js";
import * as dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./DB/main.js";
import authRouter from "./Routes/auth.js";
import authentication from "./Middlewares/auth.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB().then(() => {
  const app = express();

  // BODY-PARSER
  app.use(cors());
  app.use(express.json());
  app.use(morgan("default"));
  app.use(express.static(process.env.PUBLIC_DIR));
  app.use("/auth", authRouter);
  app.use("/api", authentication, productRouter);
  app.use("/user", userRouter);
  app.use("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });
  app.listen(process.env.PORT, () => {
    console.log(`server listening at http://localhost:${process.env.PORT}`);
  });
});
