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
exports.getUserController = exports.deleteUserByIdController = exports.getAllUserController = exports.createUserController = void 0;
const user_model_1 = require("../model/user.model");
const path_1 = __importDefault(require("path"));
const response_helper_1 = require("../helpers/response.helper");
const user_service_1 = require("../service/user.service");
const user_helper_1 = require("../helpers/user.helper");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        const file = req.files.profileImage;
        console.log(req.files);
        // Handle the uploaded file as needed
        file.mv(path_1.default.join(__dirname, "../uploads/", (0, user_helper_1.removeSpace)(file.name)), (error) => {
            if (error) {
                console.error(error);
                console.log({ message: "Error uploading file" });
                return;
            }
            // File successfully uploaded
            console.log({ message: "File uploaded successfully" });
            (0, user_service_1.createFunction)(req.body, `/dist/uploads/${(0, user_helper_1.removeSpace)(file.name)}`, res);
        });
    }
    catch (error) {
        return (0, response_helper_1.errorResponse)(res, {
            statusCode: 500,
            message: "An error occurred",
            errors: error,
        });
    }
});
exports.createUserController = createUserController;
const getAllUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.User.find({});
        return (0, response_helper_1.successResponse)(res, { message: "Requested List", data: users });
    }
    catch (error) {
        return (0, response_helper_1.errorResponse)(res, {
            statusCode: 500,
            message: "An error occurred",
            errors: error,
        });
    }
});
exports.getAllUserController = getAllUserController;
const deleteUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        yield user_model_1.User.findByIdAndDelete(userId);
        return (0, response_helper_1.successResponse)(res, {
            message: "User deleted successfully",
            data: {},
        });
    }
    catch (error) {
        return (0, response_helper_1.errorResponse)(res, {
            statusCode: 500,
            message: "An error occurred",
            errors: error,
        });
    }
});
exports.deleteUserByIdController = deleteUserByIdController;
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        const user = yield user_model_1.User.findById(userId);
        return (0, response_helper_1.successResponse)(res, {
            message: "success",
            data: user,
        });
    }
    catch (error) {
        return (0, response_helper_1.errorResponse)(res, {
            statusCode: 500,
            message: "An error occurred",
            errors: error,
        });
    }
});
exports.getUserController = getUserController;
