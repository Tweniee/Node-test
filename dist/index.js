"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./utils/db");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const RouteGuard_1 = require("./middleware/invalidRoute/RouteGuard");
const user_route_1 = __importDefault(require("./route/user.route"));
const app = (0, express_1.default)();
const PORT = 5000;
// * Middleware
//* Middleware for parsing JSON in the request body
app.use((0, express_1.json)());
// * Cross Origin
app.use((0, cors_1.default)());
// Serve the files in the 'uploads' folder as static files
const dir = __dirname + "/uploads";
app.use("/dist/uploads", express_1.default.static(path_1.default.join(dir)));
// * fileupload
const upload = (0, express_fileupload_1.default)();
// * Use the file upload middleware
app.use(upload);
// * Normal Routes
app.use("/api", user_route_1.default);
// * Wild Card
app.use("*", RouteGuard_1.invalidRouteHandlerMiddleware);
app.listen(PORT, () => {
    console.log("Listening to port", PORT);
});
