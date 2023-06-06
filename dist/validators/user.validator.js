"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const response_helper_1 = require("../helpers/response.helper");
// Middleware for Joi validation
const validateUser = (req, res, next) => {
    // Joi validation schema for user
    const userValidationSchema = joi_1.default.object({
        firstName: joi_1.default.string().required(),
        lastName: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        phoneNumber: joi_1.default.string()
            .pattern(/^[0-9]{10}$/)
            .required(),
        // profileImage: Joi.any().required(),
    });
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
        const errorMessage = error.details[0].message;
        return (0, response_helper_1.errorResponse)(res, {
            statusCode: 400,
            message: errorMessage,
            errors: {},
        });
    }
    next();
};
exports.validateUser = validateUser;
