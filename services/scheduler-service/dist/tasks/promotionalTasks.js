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
exports.sendPromotions = void 0;
const axios_1 = __importDefault(require("axios"));
const sendPromotions = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Sending promotional notifications...");
    // Mock promotional logic
    const mockUsers = [
        { userId: "123", promotion: "50% off on Electronics!" },
        { userId: "456", promotion: "Buy 1 Get 1 Free on Books!" },
    ];
    for (const user of mockUsers) {
        yield axios_1.default.post("http://localhost:5002/api/notifications", {
            userId: user.userId,
            type: "promotion",
            content: user.promotion,
        });
    }
    console.log("Promotional notifications sent!");
});
exports.sendPromotions = sendPromotions;
