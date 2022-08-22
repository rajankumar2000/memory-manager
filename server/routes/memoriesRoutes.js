import express from "express";
import {
  createPost,
  deletePost,
  getById,
  getPosts,
  updatePost,
} from "../controller/memoriesController.js";

const router = express.Router();

router
  .get("/post/:id", getPosts)
  .get("/post/:id", getById)
  .post("/post/:id", createPost)
  .put("/post/:id", updatePost)
  .delete("/post/:id", deletePost);

export default router;
