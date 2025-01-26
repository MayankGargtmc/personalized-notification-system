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
exports.sendOrderUpdates = void 0;
const axios_1 = __importDefault(require("axios"));
const sendOrderUpdates = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Fetching mock order updates...");
    // Mock order update logic
    const mockOrders = [
        { userId: "123", status: "Shipped" },
        { userId: "456", status: "Delivered" },
    ];
    for (const order of mockOrders) {
        yield axios_1.default.post("http://localhost:5002/api/notifications", {
            userId: order.userId,
            type: "order_update",
            content: `Your order status is: ${order.status}`,
        });
    }
    console.log("Order updates sent!");
});
exports.sendOrderUpdates = sendOrderUpdates;
