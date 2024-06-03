import mongoose from "mongoose";

// a structure of the Chat
const ConversationSchema = new mongoose.Schema(
  {
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    }],
    messages: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Message',
    }],
    lastMessage: {
      type: String,
      default: ''
    },
    lastMessageAt: { type: Date, default: Date.now },
    isGroup: { type: Boolean, default: false },

  },
  { timestamps: true }
);

export default mongoose.model("Conversation", ConversationSchema);
