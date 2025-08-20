import jsonwebtoken from "jsonwebtoken";

const isAutheticated = (request, response, next) => {
  try {
    const token = request.headers?.authorization?.split(" ")[1];

    if (!token) {
      return response.status(403).json({ error: "Un-authenticated User." });
    }

    const isValidToken = jsonwebtoken.verify(
      token,
      process.env.ACCESS_TOKEN_KEY
    );

    next();
    response.status(201);
  } catch (error) {
    return response.status(500).json({ error });
  }
};

export default isAutheticated;
