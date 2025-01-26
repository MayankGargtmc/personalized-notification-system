import { Router } from "express";
import { registerUser, loginUser, getUserDetails, updateUserPreferences } from "../controllers/userController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", authMiddleware, getUserDetails);
router.put("/:id/preferences", authMiddleware, updateUserPreferences);

export default router;
