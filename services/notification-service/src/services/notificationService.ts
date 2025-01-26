import { Notification, INotification } from "../models/Notification";

const notificationService = {
    // Create a new notification
    async createNotification(notificationData: INotification) {
        const notification = new Notification(notificationData);
        return await notification.save();
    },

    // Fetch unread notifications for a user
    async getUnreadNotifications(userId: string) {
        return await Notification.find({ userId, read: false });
    },

    // Mark a notification as read
    async markNotificationAsRead(notificationId: string) {
        return await Notification.findByIdAndUpdate(notificationId, { read: true }, { new: true });
    },
};

export default notificationService;
