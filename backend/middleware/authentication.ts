import bcrypt from "bcryptjs";
import jwt, {Secret, JwtPayload} from "jsonwebtoken";
import User from "../models/User";
import { NextFunction, Request as ExpressRequest, Response } from "express";

interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: string;
    // Add other properties related to the user if needed
  };
}

const authMiddleware = ( req: CustomInterface, res: Response, next: NextFunction) => {
  //check for the token
  const authenticationheader = req.headers.authorization;

  if (!authenticationheader || !authenticationheader.startsWith("Bearer ")) {
    res
      .status(403)
      .json({
        messsage: "Please provide the token. No token has been provided",
      });
  }
  if (!authenticationheader) {
    // Handle the case when the authorization header is missing
    res.status(401).json({ message: 'Authorization header is missing' });
    return;
  }
  
  const token = authenticationheader.split(" ")[1];

  // Verify the token being gotten from the header
  const jwtCode:Secret = 'hello'
  try {
    const { userId }: JwtPayload = jwt.verify(token, jwtCode) as JwtPayload
    if (!userId) {
      res.status(403).json({ messsage: "Please provide a valid token" });
    }

    // const { userId, } = Verifiedtoken

    req.user = { userId };
    next();
  } catch (err) {
    res.status(403).json({ messsage: "Not authorized to access this route" });
  }
};

// middleware for only admin

const adminMiddleware = (err: Error, req: CustomInterface, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.status(403).json({ message: "You can't access this route" });
  } else {
    next();
  }
};

export { adminMiddleware, authMiddleware };
