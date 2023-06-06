"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
//* <--------------------------------SuccessResponse is used to send all successful response to client------------------------>
const successResponse = (res, { message, data = {} }) => {
    return res.status(200).json({
        success: true,
        message,
        body: data,
    });
};
exports.successResponse = successResponse;
//* <---------------------------------ErrorResponse is used to send all failure response to client---------------------------->
const errorResponse = (res, { statusCode, message, errors }) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors,
    });
};
exports.errorResponse = errorResponse;
