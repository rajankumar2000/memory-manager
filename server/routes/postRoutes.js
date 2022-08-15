import express from "express";
import { getPosts } from "../controller/postController.js";

const router = express.Router();

router.get("/", getPosts).post

export default router;
