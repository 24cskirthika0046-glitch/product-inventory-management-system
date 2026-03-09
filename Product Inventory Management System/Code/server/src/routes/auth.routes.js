import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/auth.controller.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



const authRoutes = express.Router();


authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);


export default authRoutes;
