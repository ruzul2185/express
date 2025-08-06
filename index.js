import Express from "express";

const app = Express();

// Middleware
app.use(Express.json());

const sendData = (request, response) => {
  return response.status(200).json({ message: "Backend is working!!" });
};

app.get("/", sendData);
app.post("/user", (req, res) => {
  const { email, password } = req.body;
  // undefined = false
  //  ! = opposite
  // !false = true
  const count = 1;

  if (!email || !password) {
    return res
      .status(406)
      .json({ status: "failed", error: "Email and Password are required!" });
  }

  return res.status(200).json({ message: "user is authenticated" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
