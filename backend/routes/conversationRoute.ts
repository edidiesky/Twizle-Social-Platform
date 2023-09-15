import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  createConversation,
  getSingleUserConversation,
  DeleteConversation,
  getAllConversation,
  UpdateConversation,
} from "../controllers/conversationControllers";

router.get("/:id", authMiddleware, getAllConversation);
router.get("/", authMiddleware, getSingleUserConversation);
router.post("/", authMiddleware, createConversation);


// router.route('/profile/:id').get(authMiddleware, GetSingleUser)
// .put(authMiddleware, UpdateUser).delete(authMiddleware, DeleteUser)

export default router;
