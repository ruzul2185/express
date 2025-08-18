import { Router } from "express";
import { login } from "../controller/authController.js";

const router = Router();

// http://localhost:5000/auth/login
router.post("/login", login);

// http://localhost:5000/auth
// router.get("/");

export default router;
