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
  GetUserTweet,
  LikeAndUnlikeATweet,
  RePostATweet,
  BookMarkATweet,
  getAllBookMarks
} from "../controllers/userTweetControllers";

router.get("/", GetAllTweet);
router.get("/user/:id", authMiddleware, GetUserTweet);
router.post("/", authMiddleware, CreateTweet);
router.route('/like/:id').put(authMiddleware, LikeAndUnlikeATweet)
router.route('/bookmark/:id').put(authMiddleware, BookMarkATweet)
router.route('/bookmark').get(authMiddleware, getAllBookMarks)
router.route('/repost/:id').post(authMiddleware, RePostATweet)

router.route('/:id').get(authMiddleware, GetSingleTweet).put(authMiddleware, UpdateTweet).delete(authMiddleware, DeleteTweet)
export default router;
