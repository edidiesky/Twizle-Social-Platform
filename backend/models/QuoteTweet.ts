import mongoose, { Document } from "mongoose";

// a structure of the Chat
const QuoteTweetSchema = new mongoose.Schema(
  {
    tweet_user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tweet_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserTweet",
    },
    quote_text: {
      type: String,
      required: true,
    },
    quote_image: {
      type: Array,
      default: []
    },
    quote_likes: {
      type: Array,
      default: []
    },
  },
  { timestamps: true }
);

export default mongoose.model("QuoteTweet", QuoteTweetSchema);
