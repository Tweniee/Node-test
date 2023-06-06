import { NextFunction } from "express";
import Joi from "joi";
import { Request, Response } from "express";
import { errorResponse } from "../helpers/response.helper";
// Middleware for Joi validation
export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  // Joi validation schema for user
  const userValidationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required(),
    // profileImage: Joi.any().required(),
  });
  const { error } = userValidationSchema.validate(req.body);

  if (error) {
    const errorMessage = error.details[0].message;
    return errorResponse(res, {
      statusCode: 400,
      message: errorMessage,
      errors: {},
    });
  }

  next();
};
