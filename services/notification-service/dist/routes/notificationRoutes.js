"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notificationController_1 = require("../controllers/notificationController");
const router = (0, express_1.Router)();
router.post("/", notificationController_1.createNotification);
router.get("/unread/:userId", notificationController_1.getUnreadNotifications);
router.patch("/:id/read", notificationController_1.markNotificationAsRead);
exports.default = router;
