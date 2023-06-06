import { Request, Response } from "express";
import { User } from "../model/user.model";
import path from "path";
import { errorResponse, successResponse } from "../helpers/response.helper";
import { createFunction } from "../service/user.service";
import { removeSpace } from "../helpers/user.helper";

export const createUserController = async (req: Request, res: Response) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file: any = req.files.profileImage;
    console.log(req.files);
    // Handle the uploaded file as needed
    file.mv(
      path.join(__dirname, "../uploads/", removeSpace(file.name)),
      (error: Error) => {
        if (error) {
          console.error(error);
          console.log({ message: "Error uploading file" });
          return;
        }

        // File successfully uploaded
        console.log({ message: "File uploaded successfully" });
        createFunction(
          req.body,
          `/dist/uploads/${removeSpace(file.name)}`,
          res
        );
      }
    );
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred",
      errors: error,
    });
  }
};

export const getAllUserController = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    return successResponse(res, { message: "Requested List", data: users });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred",
      errors: error,
    });
  }
};

export const deleteUserByIdController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    await User.findByIdAndDelete(userId);
    return successResponse(res, {
      message: "User deleted successfully",
      data: {},
    });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred",
      errors: error,
    });
  }
};

export const getUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    return successResponse(res, {
      message: "success",
      data: user,
    });
  } catch (error) {
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred",
      errors: error,
    });
  }
};
