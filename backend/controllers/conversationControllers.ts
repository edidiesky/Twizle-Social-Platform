import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";
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
const createConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  // const { userId } = req.user;
  const conversation = await Conversation.create({
    affilates:[req.user?.userId, req.body.receiver]
  });

  res.status(200).json({ conversation });
});

// GET Review of the user conversation
//  Public
// send the conversation Id only
const getSingleConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the role

  const conversation = await Conversation.find(
    {
      affilates:{$in:[req.params.id]}
    }
  ).populate("affilates", " username bio display_name name profile_image_url");

  res.status(200).json({ conversation });
});

// GET All Gig
//  Public
// send the conversation Id only
const getAllConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  // const { Id } = req.params;
  // // find the Gig
  const conversation = await Conversation.find({})
  if (!conversation) {
    res.status(404);
    throw new Error("Gig not found");
  }

  res.status(200).json({ conversation });
});



// GET All Gig
//  Public
const DeleteConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  // res.status(200).json({ msg: "delete review controller" });
});

const UpdateConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  // // updating the Conversation
  // const updatedConversation = await Conversation.findByOneAndUpdate(
  //   { Id: req.params.Id },
  //   { readByBuyer: false, readBySeller: true },
  //   { new: true }
  // );
  // res.status(200).json({ updatedConversation });
});

export {
  createConversation,
  getSingleConversation,
  DeleteConversation,
  getAllConversation,
  UpdateConversation,
};
