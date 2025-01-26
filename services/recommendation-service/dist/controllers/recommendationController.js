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
exports.getRecommendations = exports.generateRecommendations = void 0;
const recommendationService_1 = __importDefault(require("../services/recommendationService"));
const mockData_1 = require("../mock/mockData");
const generateRecommendations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userId;
        const recommendations = yield recommendationService_1.default.generateRecommendations(userId, mockData_1.mockPurchaseHistory);
        res.status(201).json(recommendations);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.generateRecommendations = generateRecommendations;
const getRecommendations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const recommendations = yield recommendationService_1.default.getRecommendations(userId);
        res.json(recommendations);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getRecommendations = getRecommendations;
