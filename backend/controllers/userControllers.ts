// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/User";

// GET All User
//  Public
const GetAllUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Get user User');

});

const GetSingleUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Get user User');
});

//PRIVATE
// ADMIN
const UpdateUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Get user User');
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
