import { User } from "../models/userModel.js";

// Fucntion for get request on route "/"
export const sendData = async (request, response) => {
  // console.log(request);
  const list = await User.find({});

  // if (!list) {
  //   return res.status(200).json({ data: list });
  // }

  return response.status(200).json({ data: list });
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

export const patchData = async (req, res) => {
  try {
    const { password, _id } = req.body;

    const getUser = await User.findById({ _id });
    console.log(getUser);

    getUser.password = password;
    // Admin@123 <= 123445678

    const result = await getUser.save();

    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (request, response) => {
  const { id } = request.params;

  const doesUserExits = await User.findById({ _id: id });

  if (!doesUserExits) {
    return response.status(404).json({ error: "User not found!" });
  }

  const result = await User.deleteOne({ _id: id });

  if (!result) {
    return response.status(400).json({ error: "Something went wrong!" });
  }

  return response.status(200).json({ data: result });
};
