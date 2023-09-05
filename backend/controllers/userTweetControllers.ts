// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";

import UserTweet from "../models/UserTweet";

interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

// GET All UserTweet
//  Public
const GetAllTweet = asyncHandler(async (req: ExpressRequest, res: Response) => {
  const tweet = await UserTweet.find()
    .populate("tweet_user_id", " username bio display_name name profile_image_url");

  res.status(200).json({ tweet });

});

const GetSingleTweet = asyncHandler(async (req: ExpressRequest, res: Response) => {
  res.status(200).send('Get user Tweet');
});

//PRIVATE
// ADMIN
const UpdateTweet = asyncHandler(async (req: ExpressRequest, res: Response) => {
  res.status(200).send('Get user Tweet');
});

// POST CreateTweet UserTweet
// Private
const CreateTweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  // check for empty values
  const {tweet_image, tweet_text } = req.body 
  if (!tweet_image && !tweet_text) {
    res.status(404);
    throw new Error("Empty values are not permitted");
  }

  // create the tweet
  const tweet = await UserTweet.create({
    tweet_user_id:req.user.userId,
    tweet_image, 
    tweet_text
  })
  res.status(200).json({ tweet });

})

// DELETE
//PRIVATE
const DeleteTweet = asyncHandler(async (req: ExpressRequest, res: Response) => {
  
  // find the tweet
  const tweet = await UserTweet.findById({_id:req.params.id})
  // check if the tweet exists
  if(!tweet ) {
    res.status(404);
    throw new Error("This tweet does not exists");
  }
  // delete the tweet
  await UserTweet.findByIdAndDelete({ _id: req.params.id }) 
  res.status(200).send('Tweet has been deleted successfully');

})
const GetTopRatedTweet = asyncHandler(async (req: ExpressRequest, res: Response) => {
  res.status(200).send('Create user Tweet');

})

export {
  GetTopRatedTweet,
  CreateTweet,
  DeleteTweet,
  UpdateTweet,
  GetAllTweet,
  GetSingleTweet,
};
