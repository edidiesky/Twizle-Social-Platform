import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";
import Message from "../models/Message";
import Conversation from "../models/Conversation";

interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}


// Create Message
//  Public
const createMessage = asyncHandler(async (req: CustomInterface, res: Response) => {
  const userId = req.user?.userId
  const userBodyId = req.body.userId
  const conversationId = req.params.id
  
  const message = await Message.create({
    conversationId: conversationId,
    sender: userId,
    message: req.body.message,
    isSender:userId === userBodyId? true: false
  });
  await Conversation.findOneAndUpdate({ _id: conversationId }, {
    lastMessage: req.body.message
  }, { new: true })

// res.setHeader("Content-Type", "text/html");
// res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ message });
})

// GET
// GET All Message
//  Public
const getAllMessageofAConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  // const { Id } = req.params;
  // find all Message
  const message = await Message.find({ conversationId: req.params.conversationid })
  if (!message) {
    res.status(404);
    throw new Error("Message not found");
  }

//   res.setHeader("Content-Type", "text/html");
// res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ message });
});



// GET All Message
//  Public
const DeleteMessage = asyncHandler(async (req: CustomInterface, res: Response) => {
//   res.setHeader("Content-Type", "text/html");
// res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ msg: "delete review controller" });
});

const UpdateMessage = asyncHandler(async (req: CustomInterface, res: Response) => {
  // // updating the Message
  // const updatedMessage = await Message.findByOneAndUpdate(
  //   { Id: req.params.Id },
  //   { readByBuyer: false, readBySeller: true },
  //   { new: true }
  // );
//   res.setHeader("Content-Type", "text/html");
// res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");// 
  // res.status(200).json({ updatedMessage });
});

export {
  createMessage,
  DeleteMessage,
  getAllMessageofAConversation,
  UpdateMessage,
};
