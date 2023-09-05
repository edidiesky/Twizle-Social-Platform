import mongoose from "mongoose";

// a structure of the Chat
const TweetCommentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    parentId: { type: tmongoose.Schema.Types.ObjectId, ref: 'UserTweet' },
  },
  { timestamps: true }
);

export default mongoose.model("TweetComment", TweetCommentSchema);
