import express from "express";
import { signup, login, changePassword, verifyEmail } from "../controller/user.controller.js";
import { sendEmail } from "../controller/email.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/change-password", changePassword);
router.get("/verify-email/:token", verifyEmail);
router.post("/send-email", sendEmail);

export default router;