import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";
import Comment from "../models/Comment";
import UserTweet from "../models/UserTweet";

interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

// Create Reply
//  Public
const createReply = asyncHandler(async (req: CustomInterface, res: Response) => {
  const userId = req.user?.userId
  const tweetid = req.params.tweetid
  // get the tweet comment is to be rendered 
  const tweet = await UserTweet.findOne({ _id: tweetid })
  if (!tweet) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }

  const reply = await Comment.create({
    user: userId,
    parentTweet: tweet?._id,
    text: req.body.text,
    reply_image: req.body.reply_image
  })

  res.status(200).json({ reply })

})


// Create Reply
//  Public
const createReplyComment = asyncHandler(async (req: CustomInterface, res: Response) => {
  const userId = req.user?.userId
  const replyid = req.params.replyid
  const tweetid = req.params.tweetid
  // get the tweet comment is to be rendered 
  const comment = await Comment.findOne({ _id: replyid })
  if (!comment) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }

  const reply = await Comment.create({
    user: userId,
    parentTweet: tweetid,
    text: req.body.text,
    parentComment: comment?._id
  })

  res.status(200).json({ reply })

})
// GET
// GET All Reply
//  Public
const getAllReply = asyncHandler(async (req: CustomInterface, res: Response) => {
  const tweetid = req.params.tweetid
  // get the tweet comment is to be rendered 
  const tweet = await UserTweet.findOne({ _id: tweetid })
  if (!tweet) {
    res.status(404);
    throw new Error("The Tweet does not exist");
  }

  const reply = await Comment.find({
    parentTweet: tweet?._id,
    parentComment: null,
  }).populate('user', 'username bio display_name name profile_image_url')

  res.status(200).json({ reply })
});



// GET All Reply
//  Public
const getSingleCommentReply = asyncHandler(async (req: CustomInterface, res: Response) => {
  const tweetid = req.params.tweetid
  const replyid = req.params.replyid

  // find a speciifc reply
  const reply = await Comment.find({
    parentTweet: tweetid,
    _id: replyid,
  }).populate('parentComment')
  // perform a recursive functions to get all the replies of a comment
  const getCommentReplies = async(comment:any)=> {
    // console.log(comment)
    // get the tweet
    // get the comment
    const comments = await Comment.find({
      parentComment:comment,
      parentTweet: req.params.tweetid
    }).populate('user', 'username bio display_name name profile_image_url')

    // console.log(comments)
    let replies: any[] = []
    for(const comment of comments) {
      const reply = await getCommentReplies(comment?._id)
      // console.log(comment)
      replies.push({
        reply: reply,
        comments: comment
      })
    }

    return replies
  }
  const hierarchyReplies = await getCommentReplies(replyid)
  res.status(200).json({
    reply: hierarchyReplies
  })
});


export {
  createReply,
  getSingleCommentReply,
  getAllReply,
  createReplyComment
};
