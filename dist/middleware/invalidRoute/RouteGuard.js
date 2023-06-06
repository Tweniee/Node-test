"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidRouteHandlerMiddleware = void 0;
const response_helper_1 = require("../../helpers/response.helper");
// <------------------------------------------Invalid Routes Middleware-------------------------------->
const invalidRouteHandlerMiddleware = (req, res, next) => {
    try {
        return (0, response_helper_1.errorResponse)(res, {
            statusCode: 404,
            message: "Invalid Route",
            errors: `Cannot find ${req.method} ${req.url}`,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.invalidRouteHandlerMiddleware = invalidRouteHandlerMiddleware;
