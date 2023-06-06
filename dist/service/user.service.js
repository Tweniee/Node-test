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
exports.createFunction = void 0;
const response_helper_1 = require("../helpers/response.helper");
const user_model_1 = require("../model/user.model");
const createFunction = (body, file, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, phoneNumber } = body;
    let user;
    console.log(body, file);
    // Check if user already exists
    if (email) {
        user = yield user_model_1.User.findOne({ email });
    }
    // Create or update user
    if (user) {
        user.firstName = firstName;
        user.lastName = lastName;
        user.phoneNumber = phoneNumber;
        user.profileImage = file;
    }
    else {
        user = new user_model_1.User({
            firstName,
            lastName,
            email,
            phoneNumber,
            profileImage: file,
        });
    }
    const users = yield user.save();
    return (0, response_helper_1.successResponse)(res, {
        message: "User created/updated successfully",
        data: users,
    });
});
exports.createFunction = createFunction;
