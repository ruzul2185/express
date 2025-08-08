import Express from "express";

const app = Express();

// Middleware to parse string to json/obj
app.use(Express.json());

// Fucntion for get request on route "/"
const sendData = (request, response) => {
  return response.status(200).json({ message: "Backend is working!!" });
};

// get request
app.get("/", sendData);

//  Post request
app.post("/user", (req, res) => {

  // Checking if the body is empty or not
  if(!req.body.hasOwnProperty("email") && !req.body.hasOwnProperty("password")){
    return res.status(400).json({message: "Developers mistake"})
  } 

  // Destructuring email and password
  const { email, password } = req.body;

  // Checking if both are present
  if (!email || !password) {
    return res
      .status(406)
      .json({ status: "failed", error: "Email and Password are required!" });
  }

  // If all cases are passed, give a positive response
  return res.status(200).json({ message: "user is authenticated" });
});

// Listener to listen to incoming requests
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
