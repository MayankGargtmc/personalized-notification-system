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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Recommendation_1 = require("../models/Recommendation");
const recommendationRepository = data_source_1.AppDataSource.getRepository(Recommendation_1.Recommendation);
const recommendationService = {
    // Generate recommendations for a user
    generateRecommendations(userId, mockData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("AppDataSource", data_source_1.AppDataSource);
            const recommendations = {
                userId,
                content: JSON.stringify(mockData), // Store mock data as JSON string
                createdAt: new Date(),
            };
            const recommendation = recommendationRepository.create(recommendations);
            return yield recommendationRepository.save(recommendation);
        });
    },
    // Fetch recommendations for a user
    getRecommendations(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield recommendationRepository.find({ where: { userId } });
        });
    },
};
exports.default = recommendationService;
