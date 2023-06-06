import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../../helpers/response.helper";

// <------------------------------------------Invalid Routes Middleware-------------------------------->
export const invalidRouteHandlerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return errorResponse(res, {
      statusCode: 404,
      message: "Invalid Route",
      errors: `Cannot find ${req.method} ${req.url}`,
    });
  } catch (error) {
    next(error);
  }
};
