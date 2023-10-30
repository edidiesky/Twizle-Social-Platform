// import bcrypt from "bcryptjs";
import crypto from 'crypto'
import bcrypt from "bcryptjs";
import axios from 'axios'
import jwt, { Secret } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/User";

// GET All User
//  Public
const RegisterUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password, birthday } = req.body;
  //
  if (!email || !password || !name || !birthday) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // check if the user exist
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(404);
    throw new Error("The user does exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const Tempuser = {
    email,
    password: hashedpassword,
    name,
    birthday
  };
  const user = await User.create(Tempuser);
  delete user?.password
  const jwtcode: Secret = 'hello'
  //
  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    jwtcode,
    { expiresIn: "12d" }
  );


  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.cookie("accessToken", token, {
    httpOnly: true
  }).status(200).json({ user });

});

const LoginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // Find the user in the database

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  const verifyPassword = await bcrypt.compare(password!, user.password!);
  if (!verifyPassword) {
    res.status(404);
    throw new Error("Please provide a valid password");
  }
  const jwtcode: Secret = 'hello'
  //
  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    jwtcode,
    { expiresIn: "12d" }
  );

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  delete user?.password
  res.cookie("accessToken", token, {
    httpOnly: true
  }).status(200).json({ user });
});
const generateRandomPassword = () => {
  const length = 12; // Desired password length
  return crypto.randomBytes(length).toString('base64').slice(0, length);
};
const GoogleSignin = asyncHandler(async (req: Request, res: Response) => {

  // get the body from google
  const { email, family_name, given_name, name, picture } = req.body
  // check if already exist else login or else register
  const userExist = await User.findOne({ email });
  if (userExist) {

     const jwtcode: Secret = 'hello'
  //
  const token = jwt.sign(
    {
      userId: userExist?._id,
    },
    jwtcode,
    { expiresIn: "12d" }
  );
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ user: userExist, token });
  }
  // create a password for the user
  const randomPassword = generateRandomPassword();
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(randomPassword, salt);
  const Tempuser = {
    email,
    password: hashedPassword,
    name,
    profile_image_url: picture,
    display_name: `${given_name}` + Math.random().toString(36).slice(-8),
  };
  // create a token for the user

  const user = await User.create(Tempuser);
  delete user?.password
  const jwtcode: Secret = 'hello'
  //
  const token = jwt.sign(
    {
      userId: user?._id,
    },
    jwtcode,
    { expiresIn: "12d" }
  );


  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ user,token });

});

const GithubGetAccessToken = asyncHandler(async (req: Request, res: Response) => {
 const githuburl = req.query.github;

  try {
    const response = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${githuburl}`
    );

    // Check if the response contains the data you need and send that data in the response.
    const responseData = response.data; // Adjust this based on the actual response structure.

    res.status(200).json(responseData);
  } catch (error) {
    // Handle errors appropriately
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});


const GithubGetUserData = asyncHandler(async (req: Request, res: Response) => {
 const bearer =  req.get('Authorization')
  const data = await axios.get(`https://api.github.com/user`,{
    headers:{
      "Authorization": bearer
    }
  })
  console.log(data)

  res.status(200).json(data)
});




export {
  RegisterUser,
  LoginUser,
  GoogleSignin,
  GithubGetAccessToken,
  GithubGetUserData
};
