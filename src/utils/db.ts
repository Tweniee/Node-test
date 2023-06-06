import mongoose from "mongoose";

// Connect to MongoDB
const db = mongoose
  .connect("mongodb://localhost:27017/testDb")
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

export default db;
