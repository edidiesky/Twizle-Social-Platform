// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";

import Comment from "../models/Comment";
import UserTweet from "../models/UserTweet";
import QuoteTweet from "../models/QuoteTweet";

interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

// GET All UserTweet
//  Public
const GetAllTweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  const tweet = await UserTweet.find().sort("-createdAt")
    .populate("tweet_user_id", " username bio display_name name profile_image_url")
    .populate('quote_tweet_id', 'tweet_image tweet_text')
    .populate('quote_user_id', " username bio display_name name profile_image_url")

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ tweet });

});

// GET All UserTweet
//  Public
const RePostATweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  // // find the tweet to be retweeted
  const tweet = await UserTweet.findOne({ _id: req.params.id })
    .populate("tweet_user_id", " username bio display_name name profile_image_url");
  if (!tweet) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }

  // create a new tweet
  const newttweet = await UserTweet.create({
    "tweet_text": tweet.tweet_text,
    "tweet_image": tweet.tweet_image,
    tweet_user_id: req.user?.userId
  })

  // check if the userid is included in the tweet like array
  const userIdIncludedInTweetLikesArray = tweet.retweets.includes(req.user?.userId)
  if (!userIdIncludedInTweetLikesArray) {
    await UserTweet.findOneAndUpdate({ _id: req.params.id }, { $push: { retweets: req.user?.userId } }, { new: true })

  } else {
    await UserTweet.findOneAndUpdate({ _id: req.params.id }, { $pull: { retweets: req.user?.userId } }, { new: true })


  }


  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ tweet });

});

// GET 
// Get single tweet
const GetSingleTweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  const tweet = await UserTweet.findById({ _id: req.params.id })
    .populate("tweet_user_id", " username bio display_name name profile_image_url");
  const userIdIncludedInBookmarksArray = tweet?.tweet_bookmarks.includes(req?.user?.userId)
  const userIdIncludedInTweetLikesArray = tweet?.tweet_likes.includes(req?.user?.userId)


  if (!tweet) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ tweet, userIdIncludedInBookmarksArray, userIdIncludedInTweetLikesArray });
});


// GET 
// Get user's tweet
const GetUserTweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  const tweet = await UserTweet.find({ tweet_user_id: req?.params?.id }).sort("-createdAt")
    .populate("tweet_user_id", " username bio display_name name profile_image_url")
    .populate('quote_tweet_id', 'tweet_image tweet_text')
    .populate('quote_user_id', " username bio display_name name profile_image_url")


  if (!tweet) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }
  // const quote = await QuoteTweet.find({ tweet_user_id: req.user?.userId }).populate('tweet_id', 'tweet_image tweet_text')

  // const tweet = tweets?.concat(quote!)
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ tweet });
});


//PUT
// ADMIN
const UpdateTweet = asyncHandler(async (req: ExpressRequest, res: Response) => {
  // find the tweet
  const tweet = await UserTweet.findById({ _id: req.params.id })
  // check if the tweet exists
  if (!tweet) {
    res.status(404);
    throw new Error("This tweet does not exists");
  }
  // delete the tweet
  const newtweet = await UserTweet.findByIdAndUpdate({ _id: req.params.id }, {
    ...req.body
  }, { new: true })
  res.status(200).json({ tweet: newtweet })
});

//PUT
// User
const LikeAndUnlikeATweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the user id
  const userid = req.user?.userId
  // find the tweet
  // check if the user Id is inclused in the likes array of the tweet
  const tweet = await UserTweet.findOne({ _id: req.params.id })
  if (!tweet) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }

  // check if the userid is included in the tweet like array
  const userIdIncludedInTweetLikesArray = tweet.tweet_likes.includes(userid)
  if (!userIdIncludedInTweetLikesArray) {
    const updateTweet = await UserTweet.findOneAndUpdate({ _id: req.params.id }, { $push: { tweet_likes: userid } }, { new: true })


    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ updateTweet, userIdIncludedInTweetLikesArray });
  } else {
    const updateTweet = await UserTweet.findOneAndUpdate({ _id: req.params.id }, { $pull: { tweet_likes: userid } }, { new: true })


    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ updateTweet, userIdIncludedInTweetLikesArray });

  }
  // // const userIdIncludedInTweetLikesArray = await UserTweet.

  // console.log(userid)
});

//PUT
// User
const BookMarkATweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the user id
  const userid = req.user?.userId
  // find the tweet
  // check if the user Id is inclused in the likes array of the tweet
  const tweet = await UserTweet.findOne({ _id: req.params.id })
  if (!tweet) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }

  // check if the userid is included in the tweet like array
  const userIdIncludedInBookmarksArray = tweet.tweet_bookmarks.includes(userid)
  if (!userIdIncludedInBookmarksArray) {
    const updateTweet = await UserTweet.findOneAndUpdate({ _id: req.params.id }, { $push: { tweet_bookmarks: userid } }, { new: true })
    const userIdIncludedInBookmarksArray = updateTweet?.tweet_bookmarks?.includes(userid)

    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ updateTweet, userIdIncludedInBookmarksArray });
  } else {
    const updateTweet = await UserTweet.findOneAndUpdate({ _id: req.params.id }, { $pull: { tweet_bookmarks: userid } }, { new: true })
    const userIdIncludedInBookmarksArray = updateTweet?.tweet_bookmarks?.includes(userid)

    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.status(200).json({ updateTweet, userIdIncludedInBookmarksArray });

  }
});

//PUT
// User
const getAllBookMarks = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the user id
  const userid = req.user?.userId
  // find the tweet
  // check if the user Id is inclused in the likes array of the tweet
  const tweets = await UserTweet.find({ tweet_bookmarks: userid }).sort("-createdAt")
    .populate("tweet_user_id", " username bio display_name name profile_image_url").exec()
  if (!tweets || tweets.length === 0) {
    res.status(404);
    throw new Error("No bookmarked tweets found");
  }

  // Return the bookmarked tweets
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ bookmarkTweets: tweets });
});



// POST 
// CreateTweet UserTweet
// Private
const CreateTweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  // check for empty values
  const { tweet_image, tweet_text } = req.body
  if (!tweet_image && !tweet_text) {
    res.status(404);
    throw new Error("Empty values are not permitted");
  }

  // create the tweet
  const tweet = await UserTweet.create({
    tweet_user_id: req.user?.userId,
    tweet_image,
    tweet_text
  })
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ tweet });

})

// DELETE
//PRIVATE
const DeleteTweet = asyncHandler(async (req: ExpressRequest, res: Response) => {

  // find the tweet
  const tweet = await UserTweet.findById({ _id: req.params.id })
  // check if the tweet exists
  if (!tweet) {
    res.status(404);
    throw new Error("This tweet does not exists");
  }
  // delete the tweet
  await UserTweet.findByIdAndDelete({ _id: req.params.id })
  res.status(200).send('Tweet has been deleted successfully');

})

export {
  CreateTweet,
  DeleteTweet,
  UpdateTweet,
  GetAllTweet,
  GetSingleTweet,
  LikeAndUnlikeATweet,
  RePostATweet,
  GetUserTweet,
  BookMarkATweet,
  getAllBookMarks
};
