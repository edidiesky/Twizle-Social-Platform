import express from "express";
const router = express.Router();
import {
  adminMiddleware,
  authMiddleware,
} from "../middleware/authentication";
import {
  CreateTweet,
  DeleteTweet,
  UpdateTweet,
  GetAllTweet,
  GetSingleTweet,

  LikeAndUnlikeATweet,
  QuoteATweet,
  RePostATweet
} from "../controllers/userTweetControllers";

router.get("/", authMiddleware, GetAllTweet);
router.post("/", authMiddleware, CreateTweet);
router.route('/like/:id').put(authMiddleware, LikeAndUnlikeATweet)
router.route('/quote/:id').post(authMiddleware, QuoteATweet)
router.route('/repost/:id').post(authMiddleware, RePostATweet)

router.route('/:id').get(authMiddleware, GetSingleTweet).put(authMiddleware, UpdateTweet).delete(authMiddleware, DeleteTweet)
export default router;
