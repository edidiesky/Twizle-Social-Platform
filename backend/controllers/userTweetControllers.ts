// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import UserTweet from "../models/UserTweet";
// GET All UserTweet
//  Public
const GetAllTweet = asyncHandler(async (req: Request, res: Response) => {
  const tweet = await UserTweet.find()
    .populate("tweet_user_id", " username bio display_name name profile_image_url");

  res.status(200).json({ tweet });

});

const GetSingleTweet = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Get user Tweet');
});

//PRIVATE
// ADMIN
const UpdateTweet = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Get user Tweet');
});

// GET SINGLE UserTweet
// Private
// Admin and seller
const CreateTweet = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Create user Tweet');

})

//PRIVATE/
// ADMIN
const DeleteTweet = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Deelete user Tweet');

})
const GetTopRatedTweet = asyncHandler(async (req: Request, res: Response) => {
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
