import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  RegisterUser,
  LoginUser,
} from "../controllers/authControllers";

router.post("/register", authMiddleware, RegisterUser);
router.post("/login", authMiddleware, LoginUser);
export default router;
