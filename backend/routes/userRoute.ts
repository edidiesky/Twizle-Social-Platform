import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  CreateUser,
  DeleteUser,
  UpdateUser,
  GetAllUser,
  GetSingleUser,
} from "../controllers/userControllers";

router.get("/", authMiddleware, GetAllUser);
router.post("/", authMiddleware, CreateUser);


router.route('/profile/:id').get(authMiddleware, GetSingleUser).put(authMiddleware, UpdateUser).delete(authMiddleware, DeleteUser)
export default router;
