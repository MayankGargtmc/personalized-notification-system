"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markNotificationAsRead = exports.getUnreadNotifications = exports.createNotification = void 0;
const notificationService_1 = __importDefault(require("../services/notificationService"));
const createNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notification = yield notificationService_1.default.createNotification(req.body);
        res.status(201).json(notification);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createNotification = createNotification;
const getUnreadNotifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const notifications = yield notificationService_1.default.getUnreadNotifications(userId);
        res.json(notifications);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getUnreadNotifications = getUnreadNotifications;
const markNotificationAsRead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notificationId = req.params.id;
        const updatedNotification = yield notificationService_1.default.markNotificationAsRead(notificationId);
        res.json(updatedNotification);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.markNotificationAsRead = markNotificationAsRead;
