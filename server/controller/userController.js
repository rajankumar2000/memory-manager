import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

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

export const login = async (req, res) => {
  const loginDetails = req.body;
  try {
    const user = await userModel.findOne(loginDetails);
    if (user) {
      // adding token
      const token = jwt.sign(
        {
          email: user.email,
        },
        "RajanSecretKey"
      );
      res.status(201).json({
        token: token,
        user: user,
      });
    } else res.status(404).json({ message: "Check your email" });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "User Not Found",
    });
  }
};
