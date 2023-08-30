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
} from "../controllers/userTweetControllers";

router.get("/", authMiddleware, GetAllTweet);
router.post("/", authMiddleware, CreateTweet);


router.route('/:id').get(authMiddleware, GetSingleTweet).put(authMiddleware, UpdateTweet).delete(authMiddleware, DeleteTweet)
export default router;
