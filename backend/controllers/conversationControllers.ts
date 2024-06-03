import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response, Request } from "express";
import Conversation from "../models/Conversation";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

// POST
// Create Conversation
//  Public
const createConversation = asyncHandler(async (req: CustomInterface, res: Response, next: NextFunction) => {

  const senderId = req.user?.userId
  const { lastMessage, receiverId } = req.body
  const existingConversation = await Conversation.find({
    $or: [
      { users: { $all: [senderId, receiverId] } },
      { users: { $all: [receiverId, senderId] } },
    ]
  })
  if (existingConversation) {
    const newexistingConversation = await Conversation.find({
      users: {
        $in: [senderId]
      }
    }).populate("users", " username bio display_name name profile_image_url")
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ conversation: newexistingConversation });
  } else {
    // create the message
    await Conversation.create({
      lastMessage,
      users: [senderId, receiverId]
    })
    // get all the user's message that includes his Id
    const newexistingConversation = await Conversation.find({
      users: {
        $in: [senderId]
      }
    }).populate("users", " username bio display_name name profile_image_url")
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ conversation: newexistingConversation });
  }
});

// GET Review of the user conversation
//  Public
// send the conversation Id only
const getUserConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  const senderId = req.user?.userId
  const existingConversation = await Conversation.find({
    users: {
      $in: [senderId]
    }
  }).populate("users", " username bio display_name name profile_image_url")
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ conversation: existingConversation });
});


// GET All Gig
//  Public
// send the conversation Id only
const getSingleConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  const { receiverId } = req.params;
  // // find the Gig
  const conversation = await Conversation.findOne({
    $or: [
      {
        sender: req.user?.userId,
        receiver: receiverId
      },
      {
        receiver: req.user?.userId,
        sender: receiverId
      }
    ]
  })
    .populate("sender", " username bio display_name name profile_image_url")
    .populate("receiver", " username bio display_name name profile_image_url");

  if (!conversation) {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ conversation: null });
  }

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ conversation });
});



// GET All Gig
//  Public
const DeleteConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");// 
  res.status(200).json({ msg: "delete review controller" });
});

const UpdateConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
});

export {
  createConversation,
  getUserConversation,
  DeleteConversation,
  getSingleConversation,
  UpdateConversation,
};
