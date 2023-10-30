import express from "express";
const router = express.Router();
import {
  RegisterUser,
  LoginUser,
  GoogleSignin,
  GithubGetAccessToken,
  GithubGetUserData
} from "../controllers/authControllers";

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.post("/google/oauth", GoogleSignin);
router.post("/github/accessToken", GithubGetAccessToken);
router.get("/github/userData", GithubGetUserData);
export default router;
