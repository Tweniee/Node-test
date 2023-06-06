"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Connect to MongoDB
const db = mongoose_1.default
    .connect("mongodb://localhost:27017/testDb")
    .then(() => {
    console.log("Db Connected");
})
    .catch((err) => {
    console.log(err.message);
});
exports.default = db;
