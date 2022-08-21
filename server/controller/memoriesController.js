import mongoose from "mongoose";
import Memory from "../models/memory.js";
import User from "../models/user.js";

export const getPosts = async (req, res) => {
  let userMemories;

  const user = await User.findById("630193e44af25089b5505973");

  try {
    userMemories = await user.populate("memories");
  } catch (error) {
    console.log(error);
  }

  if (!userMemories) {
    return res.status(404).json({
      message: "No Memories Found!",
    });
  }
  console.log(userMemories.memories);
  return res.status(200).json({ memories: userMemories?.memories || null });
};

export const getById = async (req, res) => {
  const id = req.params.id;
  let memory;
  try {
    memory = await Memory.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!memory) {
    return res.status(404).json({ message: "No Memory Found" });
  }
  return res.status(200).json({ memory });
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  let memory;
  try {
    memory = await Memory.findByIdAndRemove(id).populate("user");
    console.log(memory);
    await memory.user.memories.pull(memory);
    await memory.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!memory) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Delete" });
};

export const createPost = async (req, res) => {
  //getting post from client side
  let existingUser;
  const userId = req.params.id;
  try {
    existingUser = await User.findOne({ _id: userId });
  } catch (error) {
    console.log(error);
  }

  if (!existingUser)
    return res.status(404).json({ message: "Unable To Find User By This ID" });

  const { title, story, mood } = req.body;
  console.log(req.body);

  let memory = new Memory({
    title,
    story,
    mood,
    user: userId,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await memory.save({ session });
    existingUser.memories.push(memory);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ memory });
};

export const updatePost = async (req, res) => {
  const { title, story, mood } = req.body;
  const memoryId = req.params.id;
  console.log(memoryId);
  let memory;
  try {
    memory = await Memory.findByIdAndUpdate(memoryId, {
      title,
      story,
      mood,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!memory) {
    return res.status(500).json({ message: "Unable To Update The Memory" });
  }
  return res.status(200).json({ memory });
};
