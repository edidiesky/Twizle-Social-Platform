import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
import { errorHandler, NotFound } from "./middleware/error-handler";

import mongoose from "mongoose";

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// routes
// import usertweetRoute from "./routes/userTweetRoute";
// import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";


// routes
// app.use("/api/v1/tweet", usertweetRoute);
// app.use("/api/v1/user", userRoute);
app.use("/api/v1/auth", authRoute);


const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
  throw new Error('MongoDB connection string is not defined.');
}

mongoose.connect(mongoUrl);
mongoose.connection.on('error', (error: Error) => console.log('Error'))


// if (process.env.NODE_ENV === "production") {
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
