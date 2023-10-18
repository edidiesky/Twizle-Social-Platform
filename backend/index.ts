import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler";

import mongoose from "mongoose";
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


// routes
import usertweetRoute from "./routes/userTweetRoute";
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import quoteRoute from "./routes/quoteTweetRoute";
// import uploadRoute from "./routes/uploadRoute";
import conversationRoute from "./routes/conversationRoute";
import messageRoute from "./routes/messageRoute";
import commentRoute from "./routes/commentRoute";


// end points
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


// if (process.env.NODE_ENV !== "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running....");
//   });
// }

// // Middlewares
app.use(NotFound);
app.use(errorHandler);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
