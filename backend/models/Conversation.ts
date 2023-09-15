import mongoose from "mongoose";

// a structure of the Chat
const ConversationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    lastMessage: {
      type: String
    }
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", ConversationSchema);
