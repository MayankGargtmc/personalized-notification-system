import { Router } from "express";
import { generateRecommendations, getRecommendations } from "../controllers/recommendationController";

const router = Router();

router.post("/generate", generateRecommendations);
router.get("/:userId", getRecommendations);

export default router;
