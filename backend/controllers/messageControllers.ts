import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";
import Message from "../models/Message";


interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}


// Create Message
//  Public
const createMessage = asyncHandler(async (req: CustomInterface, res: Response) => {
  const message = await Message.create({
    conversationId: req.params.id,
    sender: req.user?.userId,
    message: req.body.message
  });

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

  res.status(200).json({ message });
});



// GET All Message
//  Public
const DeleteMessage = asyncHandler(async (req: CustomInterface, res: Response) => {
  res.status(200).json({ msg: "delete review controller" });
});

const UpdateMessage = asyncHandler(async (req: CustomInterface, res: Response) => {
  // // updating the Message
  // const updatedMessage = await Message.findByOneAndUpdate(
  //   { Id: req.params.Id },
  //   { readByBuyer: false, readBySeller: true },
  //   { new: true }
  // );
  // res.status(200).json({ updatedMessage });
});

export {
  createMessage,
  DeleteMessage,
  getAllMessageofAConversation,
  UpdateMessage,
};
