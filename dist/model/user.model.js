"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define user schema
const userSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phoneNumber: Number,
    profileImage: String,
});
exports.User = mongoose_1.default.model('User', userSchema);
