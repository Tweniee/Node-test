import { Response } from "express";

//* <--------------------------------SuccessResponse is used to send all successful response to client------------------------>
export const successResponse = (
  res: Response,
  { message, data = {} }: any
) => {
  return res.status(200).json({
    success: true,
    message,
    body: data,
  });
};

//* <---------------------------------ErrorResponse is used to send all failure response to client---------------------------->
export const errorResponse = (
  res: Response,
  { statusCode, message, errors }: any
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};
