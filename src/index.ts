import express, { json } from "express";
import cors from "cors";
import "./utils/db";
import fileUpload from "express-fileupload";
import path from "path";
import { invalidRouteHandlerMiddleware } from "./middleware/invalidRoute/RouteGuard";
import userRoute from "./route/user.route";
const app = express();
const PORT = 5000;

// * Middleware
//* Middleware for parsing JSON in the request body
app.use(json());
// * Cross Origin
app.use(cors());
// Serve the files in the 'uploads' folder as static files
const dir = __dirname + "/uploads";
app.use("/dist/uploads", express.static(path.join(dir)));

// * fileupload
const upload = fileUpload();

// * Use the file upload middleware
app.use(upload);

// * Normal Routes
app.use("/api", userRoute);
// * Wild Card
app.use("*", invalidRouteHandlerMiddleware);

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
