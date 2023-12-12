import express from "express";
import jwt, { Secret } from "jsonwebtoken";
import session from "express-session";
import cors from "cors";
import cookie from 'cookie-parser'
import bcrypt from 'bcryptjs'
import passport from "passport";
import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./models/User";
dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler";

import mongoose, { Error } from "mongoose";
app.use(
  session({
    secret: "session",
    resave: false,
    saveUninitialized: true
  })
);
app.use(
  cors({
    origin: process.env.WEB_ORIGIN,
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);
// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookie())
app.use(passport.initialize());
app.use(passport.session());

const clienIdString: string = process.env.google_client_id as string
const clienIdSecret: string = process.env.google_client_secret as string

// generate passowrd
// Generate a random password

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: clienIdString,
//       clientSecret: clienIdSecret,
//       callbackURL: "http://localhost:4000/auth/google/callback",
//       passReqToCallback: true,
//     },
//     async (req: any, accessToken: string, refreshToken: string, profile: any, cb: any) => {
//       try {
        // const randomPassword = generateRandomPassword();
        // const hashedPassword = await bcrypt.hash(randomPassword, 10); // Hash the password

//         const defaultUser = {
//           name: `${profile.name.givenName}`,
//           display_name: `${profile.name.givenName}` + Math.random().toString(36).slice(-8),
//           email: profile.emails[0].value,
//           profile_image_url: profile.photos[0].value,
//           googleId: profile.id,
//           password: hashedPassword,
//         }
//         const user = await User.findOne({ email: profile.emails[0].value })
//         if (!user) {
//           const newUser = new User(defaultUser)
//           await newUser.save()
//           const jwtcode: Secret = 'hello'

//           const token = jwt.sign(
//             {
//               userId: newUser?._id,
//             },
//             jwtcode,
//             { expiresIn: "12d" }
//           );
//           return cb(null, newUser, token)
//         } else {
//           return cb(null, user)

//         }
//       } catch (error: any) {
//         return cb(error, null)

//       }

//     }

//   )
// );
// passport.serializeUser((user: any, done) => {
//   done(null, user?._id);
// });


// passport.deserializeUser((id, done) => {
//   User.findById(id, (err: any, user: any) => {
//     done(err, user);
//   });
// });





// routes
import usertweetRoute from "./routes/userTweetRoute";
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import quoteRoute from "./routes/quoteTweetRoute";
// import uploadRoute from "./routes/uploadRoute";
import conversationRoute from "./routes/conversationRoute";
import messageRoute from "./routes/messageRoute";
import commentRoute from "./routes/commentRoute";



app.use("/api/v1/tweet", usertweetRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/upload", uploadRoute);
app.use("/api/v1/quote", quoteRoute);
app.use("/api/v1/conversation", conversationRoute);
app.use("/api/v1/message", messageRoute);
app.use("/api/v1/comment", commentRoute);


const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  throw new Error('MongoDB connection string is not defined.');
}

mongoose.connect(mongoUrl);
mongoose.connection.on('error', (error: Error) => console.log('Error'))

// // Middlewares
app.use(NotFound);
app.use(errorHandler);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
