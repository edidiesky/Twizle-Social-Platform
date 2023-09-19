// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { Request as ExpressRequest, Response } from "express";
import UserTweet from "../models/UserTweet";

import User from "../models/User";
import mongoose from "mongoose";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

// GET All User
//  Public
const GetAllUser = asyncHandler(async (req: CustomInterface, res: Response) => {

  const user = await User.find({});
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.status(200).json({ user });

});

const GetSingleUser = asyncHandler(async (req: ExpressRequest, res: Response) => {

  const user = await User.findOne({ name: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.status(200).json({ user });

});

// GET
// GET ALL USERS NOT FOLLOWED
const GetUsersNotFollowed = asyncHandler(async (req: ExpressRequest, res: Response) => {
  const user = await User.findOne({ _id: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  // find the users not included in the followings
  const followersId = user?.followings?.map(followerId => new mongoose.Types.ObjectId(followerId))
  const followersArray = followersId?.concat(new mongoose.Types.ObjectId(req.params.id))
  const notfollowedUsers = await User.aggregate([
    {
      $match: {
        _id: { $nin: followersArray }
      }
    }
  ])
  res.status(200).json({ notfollowedUsers });
});

const GetUserSearch = asyncHandler(async (req: CustomInterface, res: Response) => {

  // queries
  const query = req.query.query
  // get the user search
  const user = await User.find({ $or: [{ name: { $regex: query, $options: "i" } }, { display_name: { $regex: query, $options: "i" } }] });
  const tweet = await UserTweet.find({ tweet_text: { $regex: query, $options: "i" } })
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.status(200).json({ user, tweet });

});

// GET All User Followings
//  Public
const GetAllUserFollowings = asyncHandler(async (req: ExpressRequest, res: Response) => {
  let user = await User.findOne({ _id: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  // get all the user follwings
  const followings = await User.find({ _id: { $in: user?.followings } })
  res.status(200).json({ followings });

});

// GET All User
//  Public
const GetAllUserFollowers = asyncHandler(async (req: ExpressRequest, res: Response) => {
  let user = await User.findOne({ _id: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  // get all the user follwings
  const followers = await User.find({ _id: { $in: user?.followers } })
  res.status(200).json({ followers });

});
//PRIVATE
const UpdateUser = asyncHandler(async (req: ExpressRequest, res: Response) => {

  const user = await User.findById({ _id: req.params.id });

  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const updatedUser = await User.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).json({ updatedUser });
});

// PUT
// FOLLOW AND UNFOLLOW
const FollowAndUnFollowUser = asyncHandler(async (req: CustomInterface, res: Response) => {
  const userid = req.user?.userId
  // find the user
  const user = await User.findOne({ _id: userid })
  // find the user to be followed
  const usertoBefollowed = await User.findOne({ _id: req.params.id })

  if (!user && !usertoBefollowed) {
    res.status(404);
    throw new Error("The Users does not exist");
  }

  // check if the user to be followed is included in the followings array
  const usertoBefollowedInFllowingsArray = user?.followings.includes(req.params.id)
  if (!usertoBefollowedInFllowingsArray) {
    const updateUsers = await User.findOneAndUpdate({ _id: userid }, { $push: { followings: req.params.id } }, { new: true })
    // push the current user id to the userToBeFollowed followings array
    await User.findOneAndUpdate({ _id: req.params.id }, { $push: { followers: userid } }, { new: true })
    const usertoBefollowedInFllowingsArray = updateUsers?.followings.includes(req.params.id)

    res.status(200).json({ updateUsers, usertoBefollowedInFllowingsArray });
  } else {
    const updateUsers = await User.findOneAndUpdate({ _id: userid }, { $pull: { followings: req.params.id } }, { new: true })
    // pull the current user id to the userToBeFollowed followings array
    await User.findOneAndUpdate({ _id: req.params.id }, { $pull: { followers: userid } }, { new: true })
    const usertoBefollowedInFllowingsArray = updateUsers?.followings.includes(req.params.id)

    res.status(200).json({ updateUsers, usertoBefollowedInFllowingsArray });

  }
})

//PRIVATE/
const DeleteUser = asyncHandler(async (req: ExpressRequest, res: Response) => {
  res.status(200).send('Deelete user User');

})
const GetTopRatedUser = asyncHandler(async (req: ExpressRequest, res: Response) => {
  res.status(200).send('Create user User');

})

export {
  GetTopRatedUser,
  DeleteUser,
  UpdateUser,
  GetAllUser,
  GetSingleUser,
  FollowAndUnFollowUser,
  GetAllUserFollowers,
  GetAllUserFollowings,
  GetUsersNotFollowed,
  GetUserSearch
};
