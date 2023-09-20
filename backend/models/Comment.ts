import mongoose from "mongoose";

// a structure of the Chat
const CommentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: { type: String, required: true },
    parentTweet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserTweet",
    },
    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    }
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
