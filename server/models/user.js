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
    token: String,

    memories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "memory",
      },
    ],
  },
  { collection: "users" },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
