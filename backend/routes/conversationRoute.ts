import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  getUserConversation,
  DeleteConversation,
  UpdateConversation,
  createConversation
} from "../controllers/conversationControllers";

// router.get("/:senderId/:receiverId", authMiddleware, getSingleConversation);
router.get("/", authMiddleware, getUserConversation);
router.post("/", authMiddleware, createConversation);


// router.route('/profile/:id').get(authMiddleware, GetSingleUser)
// .put(authMiddleware, UpdateUser).delete(authMiddleware, DeleteUser)

export default router;
