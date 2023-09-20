import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  createReply,
  getSingleCommentReply,
  getAllReply,
  createReplyComment
} from "../controllers/commentControllers";

router.get("/:tweetid", authMiddleware, getAllReply);
router.get("/:tweetid/reply/:replyid", authMiddleware, getSingleCommentReply);
router.post("/:tweetid/reply/:replyid", authMiddleware, createReplyComment);
router.post("/:tweetid", authMiddleware, createReply);

export default router;
