import mongoose from "mongoose";

// a structure of the message of the users
const MessageSchema = new mongoose.Schema(
  {
    body: String,
    image: String,
    seen: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
