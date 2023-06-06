"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const user_validator_1 = require("../validators/user.validator");
const route = (0, express_1.Router)();
// Create/update user
route.post("/users", [user_validator_1.validateUser], user_controller_1.createUserController);
// List users
route.get("/users", user_controller_1.getAllUserController);
// Delete user
route.delete("/users/:id", user_controller_1.deleteUserByIdController);
// View user details
route.get("/users/:id", user_controller_1.getUserController);
exports.default = route;
