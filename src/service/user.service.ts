import { successResponse } from "../helpers/response.helper";
import { User } from "../model/user.model";
import { Response } from "express";

export const createFunction = async (body: any, file: any, res: Response) => {
  const { firstName, lastName, email, phoneNumber } = body;
  let user;
    console.log(body,file)
  // Check if user already exists
  if (email) {
    user = await User.findOne({ email });
  }

  // Create or update user
  if (user) {
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    user.profileImage = file;
  } else {
    user = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      profileImage:file,
    });
  }

  const users = await user.save();

  return successResponse(res, {
    message: "User created/updated successfully",
    data: users,
  });
};
