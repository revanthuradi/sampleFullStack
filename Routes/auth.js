import {signUp,logIn} from "../controllers/auth.js";
import express from "express";
export const authRouter = express.Router();

authRouter.post('/signUp',signUp)
authRouter.post('/logIn',logIn)

export default authRouter