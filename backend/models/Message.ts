import mongoose from "mongoose";

// a structure of the message of the users
const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
    },
    isSender: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
