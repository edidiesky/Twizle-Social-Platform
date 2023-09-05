// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/User";

// GET All User
//  Public
const GetAllUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await User.find({});
    if (!user) {
      res.status(404);
      throw new Error("The user does not exist");
    }
    res.status(200).json({ user });

});

const GetSingleUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findOne({ name: req.params.id });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.status(200).json({ user });
});

//PRIVATE
// ADMIN
const UpdateUser = asyncHandler(async (req: Request, res: Response) => {
  
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

// GET SINGLE User
// Private
// Admin and seller
const CreateUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Create user User');

})

//PRIVATE/
// ADMIN
const DeleteUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Deelete user User');

})
const GetTopRatedUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Create user User');

})

export {
  GetTopRatedUser,
  CreateUser,
  DeleteUser,
  UpdateUser,
  GetAllUser,
  GetSingleUser,
};
