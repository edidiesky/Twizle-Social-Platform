import mongoose from "mongoose";

// a structure of the Chat
const ConversationSchema = new mongoose.Schema(
  {
    affilates: {
      type: Array, 
      // required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Conversation",ConversationSchema);
