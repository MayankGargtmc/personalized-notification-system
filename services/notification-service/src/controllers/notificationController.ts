import { Request, Response } from "express";
import notificationService from "../services/notificationService";

export const createNotification = async (req: Request, res: Response) => {
    try {
        const notification = await notificationService.createNotification(req.body);
        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getUnreadNotifications = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const notifications = await notificationService.getUnreadNotifications(userId);
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const markNotificationAsRead = async (req: Request, res: Response) => {
    try {
        const notificationId = req.params.id;
        const updatedNotification = await notificationService.markNotificationAsRead(notificationId);
        res.json(updatedNotification);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
