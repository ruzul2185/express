import { config } from "dotenv";
config();
import Express from "express";
import indexRoute from "./routes/indexRoute.js";
import { databaseConnection } from "./utils/database.js";

const app = Express();
databaseConnection();

// Middleware to parse string to json/obj
app.use(Express.json());

app.use("/", indexRoute);

// Listener to listen to incoming requests
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
