import express from "express";
import { createPost, getPosts } from "../controller/postController.js";

const router = express.Router();

router.get("/post", getPosts).post("/post", createPost);

export default router;
