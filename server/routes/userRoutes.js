import express from "express";
import { newUser } from "../controller/userController.js";

const router = express.Router();

router.post("/", newUser);

export default router;
