import { Router } from "express";
import { signup, login, get_user } from "../controllers/authController";
import auth from "../middleware/auth";

const router = Router();

router.post("/register", signup);
router.post("/login", login);
router.get("/user", auth, get_user);

export default router;
