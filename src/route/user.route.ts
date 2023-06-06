import { Router } from "express";
import {
  createUserController,
  deleteUserByIdController,
  getAllUserController,
  getUserController,
} from "../controller/user.controller";
import { validateUser } from "../validators/user.validator";

const route = Router();

// Create/update user
route.post("/users", [validateUser], createUserController);

// List users
route.get("/users", getAllUserController);

// Delete user
route.delete("/users/:id", deleteUserByIdController);

// View user details
route.get("/users/:id", getUserController);

export default route;
