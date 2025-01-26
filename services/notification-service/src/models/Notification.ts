import { Schema, model } from "mongoose";

export interface INotification {
    userId: string;
    type: string; // e.g., "promotion", "order_update"
    content: string;
    sentAt: Date;
    read: boolean;
}

const notificationSchema = new Schema<INotification>({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    content: { type: String, required: true },
    sentAt: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
});

export const Notification = model<INotification>("Notification", notificationSchema);
