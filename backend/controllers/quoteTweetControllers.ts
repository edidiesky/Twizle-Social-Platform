// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";

import UserTweet from "../models/UserTweet";
import QuoteTweet from "../models/QuoteTweet";

interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

const LikeAndUnlikeAQuote = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the user id
  const userid = req.user?.userId
  // find the tweet
  // check if the user Id is inclused in the likes array of the tweet
  const tweet = await QuoteTweet.findOne({ _id: req.params.id })
  if (!tweet) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }

  // check if the userid is included in the tweet like array
  const userIdIncludedInTweetLikesArray = tweet.quote_likes.includes(userid)
  if (!userIdIncludedInTweetLikesArray) {
    const updateTweet = await QuoteTweet.findOneAndUpdate({ _id: req.params.id }, { $push: { quote_likes: userid } }, { new: true })
    res.status(200).json({ updateTweet });
  } else {
    const updateTweet = await QuoteTweet.findOneAndUpdate({ _id: req.params.id }, { $pull: { quote_likes: userid } },{new:true})
    res.status(200).json({ updateTweet });

  }
  // // const userIdIncludedInTweetLikesArray = await UserTweet.

  // console.log(userid)
});


//PRIVATE
// User
const QuoteATweet = asyncHandler(async (req: CustomInterface, res: Response) => {
  // check for empty values
  const { quote_image, quote_text } = req.body
  if (!quote_text) {
    res.status(404);
    throw new Error("Empty values are not permitted");
  }

  // create the quote
  const quote = await QuoteTweet.create({
    tweet_user_id: req.user?.userId,
    quote_image,
    quote_text,
    tweet_id:req.params.id,
    quote_user_id: req.body.quote_user_id
  })
  const tweet = await UserTweet.create({
    tweet_user_id: req.user?.userId,
    tweet_image:quote_image,
    tweet_text:quote_text,
    quote_tweet_id: req.params.id,
    quote_user_id: req.body.quote_user_id
  })
  // console.log(tweet,quote)
  res.status(200).json({ quote, tweet });
});

//PRIVATE
// User
const GetUsersQuote = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find the tweetand aggregate the tweet data
  const quote = await QuoteTweet.find({ tweet_user_id: req.user?.userId }).populate('tweet_id', 'tweet_image tweet_text')
  // check if the quote exists
  if (!quote) {
    res.status(404);
    throw new Error("These quote does not exists");
  }
  res.status(200).json({quote});

});


const GetSingleTweetUsersQuote = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find the tweetand aggregate the tweet data
  const quote = await QuoteTweet.find({ tweet_id: req.params.id})
  .sort("-createdAt")
  .populate('tweet_id', 'tweet_image tweet_text')
    .populate("tweet_user_id", " username bio display_name name profile_image_url").populate("quote_user_id", " username bio display_name name profile_image_url");

  // check if the quote exists
  if (!quote) {
    res.status(404);
    throw new Error("These quote does not exists");
  }
  res.status(200).json({ quote });

});


//PRIVATE
// User
const GetSingleUsersQuote = asyncHandler(async (req: CustomInterface, res: Response) => {
  // find the tweetand aggregate the tweet data
  const tweet = await QuoteTweet.findOne({ tweet_user_id: req.user?.userId, _id:req.params.id }).populate('tweet_id', 'tweet_image tweet_text')
  // check if the tweet exists
  if (!tweet) {
    res.status(404);
    throw new Error("These tweet does not exists");
  }
  res.status(200).json({ tweet });

});


//PRIVATE
// User
const RePostATweet = asyncHandler(async (req: ExpressRequest, res: Response) => {
  res.status(200).send('RePostATweet a Tweet');
});



// DELETE
//PRIVATE
const DeleteTweet = asyncHandler(async (req: ExpressRequest, res: Response) => {

  // find the tweet
  const tweet = await QuoteTweet.findById({ _id: req.params.id })
  // check if the tweet exists
  if (!tweet) {
    res.status(404);
    throw new Error("This tweet does not exists");
  }
  // delete the tweet
  await QuoteTweet.findByIdAndDelete({ _id: req.params.id })
  res.status(200).send('Tweet has been deleted successfully');

})


export {
  DeleteTweet,
  QuoteATweet,
  RePostATweet,
  LikeAndUnlikeAQuote,
  GetUsersQuote,
  GetSingleUsersQuote,
  GetSingleTweetUsersQuote
};
