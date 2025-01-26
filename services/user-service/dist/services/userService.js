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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const data_source_1 = require("../data-source");
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const userService = {
    // Register a new user
    registerUser(name, email, password, preferences) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
            // Check if the email already exists
            const existingUser = yield userRepository.findOne({ where: { email } });
            if (existingUser) {
                throw new Error("Email already in use.");
            }
            // Hash the password
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            // Create a new user
            const newUser = userRepository.create({
                name,
                email,
                password: hashedPassword,
                preferences,
            });
            return yield userRepository.save(newUser);
        });
    },
    // Log in a user
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
            // Check if the user exists
            const user = yield userRepository.findOne({ where: { email } });
            if (!user) {
                throw new Error("Invalid email or password.");
            }
            // Validate the password
            const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid email or password.");
            }
            // Generate a JWT token
            const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRY || "1h",
            });
            return token;
        });
    },
    // Fetch user details
    getUserDetails(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
            const user = yield userRepository.findOne({
                where: { id: userId }, // Use `where` to filter by ID
            });
            if (!user) {
                throw new Error("User not found.");
            }
            return user;
        });
    },
    // Update user preferences
    updateUserPreferences(userId, preferences) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
            const user = yield userRepository.findOne({
                where: { id: userId }, // Use `where` to filter by ID
            });
            if (!user) {
                throw new Error("User not found.");
            }
            user.preferences = preferences;
            return yield userRepository.save(user);
        });
    },
};
exports.default = userService;
