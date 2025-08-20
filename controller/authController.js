import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email | !password) {
      return response
        .status(404)
        .json({ error: "Email and Password are required!" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return response.status(404).json({ error: "User does not exist!" });
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);

    if (!isPasswordEqual) {
      return response
        .status(400)
        .json({ error: "email or password is wrong!" });
    }

    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = jsonwebtoken.sign(payload, process.env.ACCESS_TOKEN_KEY, {
      expiresIn: "10h",
    });

    return response
      .status(200)
      .json({ message: "User successfully authenticated!", token });
  } catch (error) {
    console.log(error);
  }
};
