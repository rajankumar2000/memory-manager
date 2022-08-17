import express from "express";
import { login, newUser } from "../controller/userController.js";

const router = express.Router();

router.post("/login", login).post("/register", newUser);

export default router;
