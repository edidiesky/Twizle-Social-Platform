import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  getUserConversation,
  DeleteConversation,
  getSingleConversation,
  UpdateConversation,
  createConversation
} from "../controllers/conversationControllers";

router.get("/:id", authMiddleware, getSingleConversation);
router.get("/", authMiddleware, getUserConversation);
router.post("/", authMiddleware, createConversation);


// router.route('/profile/:id').get(authMiddleware, GetSingleUser)
// .put(authMiddleware, UpdateUser).delete(authMiddleware, DeleteUser)

export default router;
