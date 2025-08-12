import { User } from "../models/userModel.js";

// Fucntion for get request on route "/"
export const sendData = (request, response) => {
  return response.status(200).json({ message: "Backend is working!!" });
};

export const postData = async (req, res) => {
  try {
    // Checking if the body is empty or not
    if (
      !req.body.hasOwnProperty("email") &&
      !req.body.hasOwnProperty("password")
    ) {
      return res.status(400).json({ message: "Sending wrong property names" });
    }

    // Destructuring email and password
    const { email, password } = req.body;

    // Checking if both are present
    if (!email || !password) {
      return res
        .status(406)
        .json({ status: "failed", error: "Email and Password are required!" });
    }

    // if exists, alreadyExist will contain some response
    const alreadyExist = await User.findOne({ email });

    if (alreadyExist) {
      return res
        .status(406)
        .json({ status: "failed", error: "This user already exists!" });
    }

    const responseFromMongodb = await User.create({ email, password });

    // If all cases are passed, give a positive response
    return res
      .status(200)
      .json({ user: responseFromMongodb, status: "success" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
