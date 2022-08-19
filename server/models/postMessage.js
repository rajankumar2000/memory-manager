import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: String,
    story: String,
    mood: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { collection: "memories" },
  { timestamps: true }
);

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
