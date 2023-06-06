import mongoose from "mongoose";

// Define user schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phoneNumber: Number,
    profileImage: String,
  });

  export const User = mongoose.model('User', userSchema);