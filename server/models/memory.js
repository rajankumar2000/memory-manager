import mongoose from "mongoose";

const memorySchema = mongoose.Schema({
  title: { type: String, unique: true },
  story: String,
  mood: {
    type: String,
    enum: ["happy", "sad", "normal"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  user: { type: mongoose.Types.ObjectId, ref: "user", required: true },
});

const Memory = mongoose.model("memory", memorySchema);
export default Memory;
