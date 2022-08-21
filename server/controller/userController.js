import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const newUser = async (req, res) => {
  var user = req.body;
  // adding token
  const token = jwt.sign(
    {
      email: user.email,
    },
    "RajanSecretKey"
  );
  const newUserData = { ...user, token, memories: [] };
  const NewUser = new User(newUserData);
  console.log(newUser, newUserData);

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
    const user = await User.findOne(loginDetails);
    if (user) {
      res.status(201).json({
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
