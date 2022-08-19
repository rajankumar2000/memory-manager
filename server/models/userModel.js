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
        ref: "memories",
      },
    ],
  },
  { collection: "users" },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);
export default userModel;
