import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true,
    },
    password: { type: String, required: true },
  },
  { collection: "users" },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
