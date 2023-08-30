import mongoose, { Document } from "mongoose";

// a structure of the Chat
const UserTweetSchema = new mongoose.Schema(
  {
    tweet_id: {
      type: String,
      required: true,
    },
    tweet_user_id: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tweet_text: {
      type: String,
      required: true,
    },
    tweet_image: {
      type: Array,
      required: true,
      default: []
    },
  },
  { timestamps: true }
);

export default mongoose.model("UserTweet", UserTweetSchema);
