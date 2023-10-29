import express from "express";
const router = express.Router();
import {
  RegisterUser,
  LoginUser,
  GoogleSignin
} from "../controllers/authControllers";

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/google/oauth", GoogleSignin);
export default router;
