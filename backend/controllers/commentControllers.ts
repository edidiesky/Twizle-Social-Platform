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
    text: req.body.text
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
  const userId = req.user?.userId
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
  }).populate('user')

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
  // perform a recursive function to get a specific reply child
  const getRepliesComment = async(reply:any)=> {
    // get the parent request and comment
    const parentreply = await Comment.find({
      parentTweet: tweetid,
      parentComment: reply?._id,
    }) 
    return parentreply
    // const childrenreplies:any[] = [];
    // for (const reply of parentreply) {
    //   const replies = await getRepliesComment(reply?._id)
    //   childrenreplies.push({
    //     comment:reply,
    //     replies: replies
    //   })
    // }

    // return childrenreplies
  }

  // await getRepliesComment(reply)

  // Fetch all child replies recursively
  const replyHierarchy = await getRepliesComment(replyid);



  res.status(200).json({ reply, replies:replyHierarchy })
});


export {
  createReply,
  getSingleCommentReply,
  getAllReply,
  createReplyComment
};
