// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";

import User from "../models/User";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

// GET All User
//  Public
const GetAllUser = asyncHandler(async (req: ExpressRequest, res: Response) => {
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


// GET All User Followings
//  Public
const GetAllUserFollowings = asyncHandler(async (req: ExpressRequest, res: Response) => {
  let user = await User.findOne({_id:req.params.id});
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  // get all the user follwings
  const followings = await User.find({_id:{$in:user?.followings}})
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
  GetAllUserFollowings
};
