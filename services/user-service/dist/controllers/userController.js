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
exports.updateUserPreferences = exports.getUserDetails = exports.loginUser = exports.registerUser = void 0;
const userService_1 = __importDefault(require("../services/userService"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, preferences } = req.body;
    try {
        const newUser = yield userService_1.default.registerUser(name, email, password, preferences);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const token = yield userService_1.default.loginUser(email, password);
        res.json({ token });
    }
    catch (error) {
        res.status(401).json({ error: error });
    }
});
exports.loginUser = loginUser;
const getUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    try {
        const user = yield userService_1.default.getUserDetails(userId);
        res.json(user);
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.getUserDetails = getUserDetails;
const updateUserPreferences = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.id);
    const { preferences } = req.body;
    try {
        const updatedUser = yield userService_1.default.updateUserPreferences(userId, preferences);
        res.json(updatedUser);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.updateUserPreferences = updateUserPreferences;
