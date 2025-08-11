import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    const data = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection successful!");
  } catch (error) {
    console.log(error);
  }
};
