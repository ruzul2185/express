import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

// Named export
export const User = mongoose.model("users", userModel);
