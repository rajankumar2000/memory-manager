import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(201).json(postMessage);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  //getting post from client side
  console.log(req.body);
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json({
      message: "Memory created successfully.",
    });
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
