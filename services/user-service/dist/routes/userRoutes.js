"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.post("/register", userController_1.registerUser);
router.post("/login", userController_1.loginUser);
router.get("/:id", authMiddleware_1.default, userController_1.getUserDetails);
router.put("/:id/preferences", authMiddleware_1.default, userController_1.updateUserPreferences);
exports.default = router;
