import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  createConversation,
  getSingleConversation,
  DeleteConversation,
  getAllConversation,
  UpdateConversation,
} from "../controllers/conversationControllers";

router.get("/", authMiddleware, getAllConversation);
router.get("/:id", authMiddleware, getSingleConversation);
router.post("/", authMiddleware, createConversation);


// router.route('/profile/:id').get(authMiddleware, GetSingleUser)
// .put(authMiddleware, UpdateUser).delete(authMiddleware, DeleteUser)

export default router;
