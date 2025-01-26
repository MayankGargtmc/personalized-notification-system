import { Router } from "express";
import { createNotification, getUnreadNotifications, markNotificationAsRead } from "../controllers/notificationController";

const router = Router();

router.post("/", createNotification);
router.get("/unread/:userId", getUnreadNotifications);
router.patch("/:id/read", markNotificationAsRead);

export default router;
