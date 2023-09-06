import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication";
import {
  DeleteTweet,
  GetUsersQuote,
  LikeAndUnlikeAQuote,
  QuoteATweet,
  RePostATweet,
  GetSingleUsersQuote
} from "../controllers/quoteTweetControllers";

router.get("", authMiddleware, GetUsersQuote);
router.route('/like/:id').put(authMiddleware, LikeAndUnlikeAQuote)
router.route('/:id').post(authMiddleware, QuoteATweet).get(authMiddleware, GetSingleUsersQuote)
router.route('/repost/:id').post(authMiddleware, RePostATweet)

export default router;
