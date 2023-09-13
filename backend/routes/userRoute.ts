import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  DeleteUser,
  UpdateUser,
  GetAllUser,
  GetSingleUser,
  FollowAndUnFollowUser
} from "../controllers/userControllers";

router.get("/", authMiddleware, GetAllUser);
router.put("/follow/:id", authMiddleware, FollowAndUnFollowUser);


router.route('/profile/:id').get(authMiddleware, GetSingleUser)
.put(authMiddleware, UpdateUser).delete(authMiddleware, DeleteUser)

export default router;
