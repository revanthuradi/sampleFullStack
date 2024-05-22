import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

import express from "express";
export const userRouter = express.Router();

// C R U D  API

// CREATE


//   // READ

userRouter.get("/users", getUsers);

userRouter.get("/users/:id", getUser);

//   // UPDATE 

//   router.patch("/Users/:id", updateUser);

//   // DELETE

//   router.delete("/Users/:id", deleteUser);
