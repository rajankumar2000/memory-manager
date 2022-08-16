import userModel from "../models/userModel.js";

export const newUser = async (req, res) => {
  const user = req.body;
  const NewUser = new userModel(user);

  try {
    await NewUser.save();
    res.status(201).json(NewUser);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
